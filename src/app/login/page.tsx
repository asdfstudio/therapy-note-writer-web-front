'use client';
import Navbar2 from '@/components/Navbar2';
import { Context } from '@/context/Context';
import {
    fbLogin,
    fbMe,
    getFacebookLoginStatus,
    initFacebookSdk,
} from '@/utils/FacebookSDK';
import axios from 'axios';
import { error } from 'console';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react';

const LoginPage = () => {
    // const userRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const { user, dispatch, isFetching } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupMedium, setSignupMedium] = useState('manual');
    const [currentError, setCurrentError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleButtonHidden, setIsGoogleButtonHidden] = useState(true);
    const router = useRouter();
    const params = useSearchParams();
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const redirect_uri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL_LOGIN;
    const redirect_uri_encoded =
        process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URL_LOGIN_ENCODED;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setCurrentError(false);
        setIsLoading(true);

        console.log('email', email);
        dispatch({ type: 'LOGIN_START' });
        try {
            const headers = {
                'Content-Type': 'application/json',
            };
            const res = await axios.post(`${baseURL}/api/auth/login`, {
                headers,
                email: email,
                password: password,
                signupMedium: signupMedium,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        } catch (error: any) {
            setIsLoading(false);
            dispatch({ type: 'LOGIN_FAILURE' });
            setCurrentError(true);
            setErrorMessage(error.response.data.error);
        }
    };

    const handleSubmitSocial = async (
        emailParam: any,
        passwordParam: any,
        signupMediumParam: any
    ) => {
        setCurrentError(false);
        console.log('email', email);
        dispatch({ type: 'LOGIN_START' });
        try {
            const headers = {
                'Content-Type': 'application/json',
            };
            const res = await axios.post(`${baseURL}/api/auth/login`, {
                headers,
                email: emailParam,
                password: passwordParam,
                signupMedium: signupMediumParam,
            });
            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
        } catch (error: any) {
            dispatch({ type: 'LOGIN_FAILURE' });
            setCurrentError(true);
            setErrorMessage(error.response.data.error);
        }
    };

    const handleSubmitGoogle = (e: any) => {
        e.preventDefault();

        if (isGoogleButtonHidden) {
            setIsGoogleButtonHidden(false);
        } else {
            setIsGoogleButtonHidden(true);
        }
    };

    useEffect(() => {
        user ? router.push('/dashboard') : '';
    }, [user, router]);

    const login = async () => {
        setSignupMedium('facebook');
        setPassword('facebook');

        console.log('reached log in button');

        initFacebookSdk().then(() => {
            console.log('2nd time');
            getFacebookLoginStatus().then((response: any) => {
                console.log('res', response);
                if (response === null || response.authResponse === null) {
                    console.log('No login status for the person');
                    fbLogin().then((response: any) => {
                        console.log('login button', response);
                        if (response.status === 'connected') {
                            console.log('Person is connected');
                        } else {
                            // something
                            // console.log('something else');
                        }
                    });
                } else {
                    // console.log('res', response);
                    if (response.authResponse != null) {
                        console.log('person in');
                        fbMe().then((res: any) => {
                            console.log('me', res);
                            setEmail(res.email);
                            console.log('email here', email);
                            handleSubmitSocial(
                                res.email,
                                'facebook',
                                'facebook'
                            );
                        });
                    }
                }
            });
        });
    };

    const linkedinLogin = () => {
        router.push(
            `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86z5s5j7v8ljtj&redirect_uri=${redirect_uri_encoded}&state=1234&scope=openid%20profile%20email`
        );
    };

    useEffect(() => {
        // LinkedIn Access

        const code = params.get('code');

        if (code !== null) {
            axios
                .post(`${baseURL}/api/auth/getLinkedinUserEmail`, {
                    code: code,
                    redirect_uri: redirect_uri,
                })
                .then((userData) => {
                    setSignupMedium('linkedin');
                    setEmail(userData.data.email);
                    setCurrentError(false);

                    dispatch({ type: 'LOGIN_START' });
                    try {
                        const headers = {
                            'Content-Type': 'application/json',
                        };
                        axios
                            .post(`${baseURL}/api/auth/login`, {
                                headers,
                                email: userData.data.email,
                                password: 'facebook',
                                signupMedium: 'linkedin',
                            })
                            .then((res) => {
                                dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    payload: res.data,
                                });
                            });
                    } catch (error: any) {
                        dispatch({ type: 'LOGIN_FAILURE' });
                        setCurrentError(true);
                        setErrorMessage(error.response.data.error);
                    }
                })
                .catch((err: any) => {
                    console.log('ERROR', err);
                });
        }

        // google login

        if (typeof window !== undefined) {
            const handleGoogleCallbackResponse = (response: any) => {
                const userObject: any = jwtDecode(response.credential);

                setSignupMedium('google');
                setEmail(userObject.email);
                setCurrentError(false);

                dispatch({ type: 'LOGIN_START' });

                try {
                    const headers = {
                        'Content-Type': 'application/json',
                    };

                    axios
                        .post(`${baseURL}/api/auth/login`, {
                            headers,
                            email: userObject.email,
                            password: 'facebook',
                            signupMedium: 'google',
                        })
                        .then((res) => {
                            dispatch({
                                type: 'LOGIN_SUCCESS',
                                payload: res.data,
                            });
                        });
                } catch (error: any) {
                    dispatch({ type: 'LOGIN_FAILURE' });
                    setCurrentError(true);
                    setErrorMessage(error.response.data.error);
                }
            };

            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleGoogleCallbackResponse,
            });

            window.google.accounts.id.renderButton(
                document.getElementById('googleSignInDiv'),
                { theme: 'outline', size: 'large' }
            );

            // window.google.accounts.id.prompt();
        }
    }, [params, baseURL, dispatch, redirect_uri]);

    return (
        <div
            className='flex min-h-screen flex-row bg-[url("/bg-home-1.svg")] w-screen 
      bg-no-repeat bg-contain xlc:bg-none'
        >
            <div
                className={`absolute w-screen h-screen  bg-[rgba(0,0,0,0.25)]
                    z-[10] ${isLoading ? 'block' : 'hidden'}`}
            >
                <div
                    className='absolute border-[gray-300] h-[4rem] w-[4rem] animate-spin 
                        rounded-full border-[0.5rem] border-t-[#3157C9]
                        top-[40%] right-[50%]'
                />
            </div>

            <Navbar2 />

            {/* Big image Left */}

            <div
                className='hidden xlc:flex bg-[url("/signup-banner-lg.jpeg")] bg-no-repeat
        bg-cover items-start w-[73%] h-screen'
            >
                <div className='w-[50%] relative mt-[7.94rem] ml-[2.5rem]'>
                    <h2
                        className='relative font-poynter_Oldstyle_Display 
          text-[#fff] text-[3.4375rem] font-[400] 
            leading-[3.78125rem] text-start justify-center z-10 '
                    >
                        An{' '}
                        <span
                            className=' font-[600] italic bg-[url("/login-underline-1.svg")] 
              bg-contain bg-no-repeat bg-bottom'
                        >
                            AI-Powered
                        </span>
                        <br />
                        <span className=' font-[600]'>Note</span> taking App
                    </h2>

                    <h2
                        className='relative font-poynter_Oldstyle_Display 
          text-[#fff] text-[3.4375rem] font-[400] 
            leading-[3.78125rem] text-start justify-center z-20 
            mt-[1.12rem] '
                    >
                        Made exclusively for{' '}
                        <span
                            className=' font-[600] italic bg-[url("/login-ellipse-1.svg")] 
              bg-contain bg-no-repeat'
                        >
                            Therapists.
                        </span>
                    </h2>
                    {/* <Image
            src={'/login-ellipse-1.svg'}
            alt=''
            width={1200}
            height={550}
            draggable={false}
            className='absolute w-[18.9375rem] h-[4.5rem] 
            z-[5] left-20 top-[12rem] '
          /> */}
                </div>
            </div>

            {/* Right Side */}

            {/* Text Contents */}
            <div
                className='flex flex-col items-center 
                xlc:items-end '
            >
                {/* Form */}
                <div
                    className='flex flex-col items-center 
                    w-screen
                    xlc:w-[30rem] min-h-screen xlc:snap-y scroll-auto '
                >
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        <h1
                            className='text-[2.5rem] 
                            font-poynter_Oldstyle_Display 
                            font-[400] leading-[2.75rem] mt-[6.5rem]
                            mb-[0.75rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-[4.75rem]'
                        >
                            Login
                        </h1>

                        <label
                            className='font-iBM_Plex_Sans
                            text-[#29375F] text-[1rem] font-[400] 
                            mb-[0.5rem]'
                        >
                            Email Address
                        </label>
                        <input
                            type='email'
                            name='email'
                            placeholder='yourname@domain.com'
                            className='w-[21.25rem] h-[2.75rem] rounded-full
                            bg-[#fff] border-[1px] border-[#6f91f480]
                            pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
                            font-iBM_Plex_Sans font-[400] text-[1rem]
                            hover:border-[#6F91F4] 
                            active:border-[#4771ED] active:bg-[#FAFAFA]'
                            // ref={userRef}
                            onChange={(e) => {
                                const mailValue = e.target.value;
                                const mailRegexPattern =
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                const matched =
                                    mailValue.match(mailRegexPattern);

                                if (matched !== null) {
                                    setMailError(false);
                                    setEmail(e.target.value);
                                } else {
                                    setErrorMessage(
                                        "Email can't be empty and needs to be valid"
                                    );
                                    setMailError(true);
                                }
                            }}
                        />
                        {mailError && (
                            <span
                                className='ml-[0.75rem] text-[#F4776F] font-iBM_Plex_Sans
                                font-[400]'
                            >
                                {/* Email can&apos;t be empty and needs to
                                        be valid */}
                                {errorMessage}
                            </span>
                        )}

                        <label
                            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[0.75rem] mb-[0.5rem] md:mt-[1.25rem]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='****  ****  ****'
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                            // ref={passwordRef}
                            onChange={(e: any) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {currentError ? (
                            <span
                                className='font-iBM_Plex_Sans font-[400] text-[1rem]
                            text-red-600 self-center mt-5'
                            >
                                {errorMessage}
                            </span>
                        ) : (
                            <></>
                        )}
                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-[0.75rem]
                              mb-[0.75rem]
                              md:w-[43rem] md:mt-[1.25rem] 
                              xlc:w-[25rem]'
                        >
                            <button
                                type='submit'
                                disabled={isFetching}
                                className='flex bg-[#6F91F4] h-full 
                                  w-full items-center rounded-full border-[1px] 
                                  border-[#3157C9] uppercase text-white 
                                  font-iBM_Plex_Sans tracking-[0.1rem]
                                  text-[1rem] font-[600] justify-center
                                  drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                  hover:bg-[#4771ED] active:bg-[#4063C7] 
                                   disabled:cursor-not-allowed
                                   disabled:bg-[#7a98f3] '
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Forgot password link */}
                    <h3
                        className='font-iBM_Plex_Sans
                        text-[#29375F] font-[600] text-[1rem]'
                    >
                        Forgot password?{' '}
                        <Link
                            href={'/reset'}
                            className='text-[#6F91F4]
                            underline'
                        >
                            Reset
                        </Link>
                    </h3>

                    <div className='mt-[0.75rem] flex items-center'>
                        <hr className='h-[2px] w-[8.87rem] bg-[rgba(111,145,244,0.40)] ' />
                        <p
                            className=' uppercase font-iBM_Plex_Sans text-[1rem] font-[600] 
                            text-[#AEB9D9] mx-[1rem]'
                        >
                            or
                        </p>
                        <hr className='h-[2px] w-[8.87rem] bg-[rgba(111,145,244,0.40)] ' />
                    </div>

                    {/* Facebook login button */}
                    <div
                        className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[0.75rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    >
                        <button
                            type='button'
                            onClick={login}
                            className='flex bg-[#1877F2] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#5199F5] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] 
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#1800F2] active:bg-[#4063C7]'
                        >
                            <Image
                                src={'/fb-logo.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[2.01225rem] h-[2.01225rem] ml-[0.52rem]'
                            />
                            <span className='flex-1'>
                                continue with facebook
                            </span>
                        </button>
                    </div>

                    {/* Google login button */}
                    <div
                        className='w-[21.25rem] h-[2.75rem] 
                        mb-[0.75rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    >
                        <button
                            onClick={(e: any) => {
                                handleSubmitGoogle(e);
                            }}
                            className='flex bg-[#DE6558] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#D84A3B] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] 
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#DE0058] active:bg-[#4063C7]'
                        >
                            <Image
                                src={'/google-logo.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[2.01225rem] h-[2.01225rem] ml-[0.52rem]'
                            />
                            <span className='flex-1'>continue with google</span>
                        </button>
                    </div>
                    {/* Google Generated Button */}
                    <div
                        hidden={isGoogleButtonHidden}
                        className='mt-[1rem] self-center'
                        id='googleSignInDiv'
                    ></div>

                    {/* Twitter login button */}
                    <div
                        className='w-[21.25rem] h-[2.75rem] mb-[0.75rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    >
                        <button
                            // onClick={handleSubmit}
                            className='flex bg-[#262626] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#4D4847] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] 
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#260026] active:bg-[#4063C7]'
                        >
                            <Image
                                src={'/twitter-logo.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[1.8125rem] h-[1.5625rem] ml-[0.52rem]'
                            />
                            <span className='flex-1'>
                                continue with twitter
                            </span>
                        </button>
                    </div>

                    {/* LinkedIn login button */}
                    <div
                        className='w-[21.25rem] h-[2.75rem] 
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    >
                        <button
                            onClick={linkedinLogin}
                            className='flex bg-[#0A66C2] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#0C75DF] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] 
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            <Image
                                src={'/linkedin-logo.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[1.81988rem] h-[1.80188rem] ml-[0.52rem]'
                            />
                            <span className='flex-1'>
                                continue with linkedin
                            </span>
                        </button>
                    </div>

                    <hr
                        className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[3.8rem]
            mb-[0.75rem]'
                    />

                    <h3
                        className='font-iBM_Plex_Sans
            text-[#29375F] font-[600] text-[1rem]'
                    >
                        Don’t have an account?
                    </h3>
                    <Link
                        href='/signup'
                        className='w-[21.25rem] h-[2.75rem] mt-[0.75rem]
                          mb-[8.38rem]
                          md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                          xlc:w-[25rem]'
                    >
                        <button
                            className='flex bg-white h-full 
                              w-full items-center rounded-full border-[1px] 
                              border-[#3157C9] uppercase text-[#6F91F4] 
                              font-iBM_Plex_Sans tracking-[0.1rem]
                              text-[1rem] font-[600] justify-center
                              drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                              hover:border-[#4771ED] hover:bg-[#FAFAFA]
                              active:border-[#4063C7] active:bg-[#FAFAFA]'
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
            {/* <h1 className='flex flex-1'>WHo</h1>
      <h1 className='flex flex-2'>Where</h1> */}
        </div>
    );
};

export default LoginPage;
