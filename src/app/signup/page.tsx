'use client';
import Navbar2 from '@/components/Navbar2';
import { Context } from '@/context/Context';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    initFacebookSdk,
    getFacebookLoginStatus,
    fbLogin,
    fbLogout,
    fbApi,
    fbMe,
} from '../../utils/FacebookSDK';
import Image from 'next/image';

const SignupPage = () => {
    const usernameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const [error, setError] = useState(false);
    const router = useRouter();
    const params = useSearchParams();
    // console.log('param', params.get('code'));
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    // useEffect(() => {
    //     console.log('Started use effect');
    //     fbLogic().then(() => {
    //         console.log('2nd time');
    //         getFacebookLoginStatus().then((response: any) => {
    //             if (response == null) {
    //                 console.log('No login status for the person');
    //             } else {
    //                 console.log('res', response);
    //             }
    //         });
    //     });
    // }, []);

    // useEffect(() => {
    //     console.log('window', window);
    //     console.log('Started use effect');
    //     initFacebookSdk();
    // }, []);

    useEffect(() => {
        console.log('Started use effect');
        initFacebookSdk().then(() => {
            console.log('2nd time');
            getFacebookLoginStatus().then((response: any) => {
                if (response == null) {
                    console.log('No login status for the person');
                } else {
                    console.log('res', response);
                    if (response.authResponse != null) {
                        fbMe().then((res: any) => {
                            console.log('me', res);
                        });
                    }
                }
            });
        });

        // Should check linkedin API is there's any code in param
        // Then use the apram to call api for access token
        // Then call user data api with access token to get user data and complete registration
    }, []);

    function login() {
        console.log('reached log in button');
        fbLogin().then((response: any) => {
            console.log(response);
            if (response.status === 'connected') {
                console.log('Person is connected');
            } else {
                // something
                console.log('something else');
            }
        });
    }

    function logout() {
        console.log('reached log out button');
        fbLogout().then((response: any) => {
            console.log(response);
            console.log('something else');
        });
    }

    const linkedinLogin = () => {
        router.push(
            'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86z5s5j7v8ljtj&redirect_uri=https%3A%2F%2F63dc-116-204-154-22.ngrok-free.app%2Fsignup&state=1234&scope=profile%20email'
        );
    };

    const handlePassword = (password: any) => {
        if (password !== passwordRef.current.value) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${baseURL}/api/auth/register`, {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            });
            // console.log(res.data);
            res.data && router.push('/login');
        } catch (error) {
            return error;
        }
    };

    const getUser = (credentialResponse: any) => {
        console.log(credentialResponse);

        axios
            .get(
                `https://www.googleapis.com/oauth2/v1/userinfo?client_id=${credentialResponse.clientId}`,
                {
                    headers: {
                        Authorization: `Bearer ${credentialResponse.credenial}`,
                        Accept: 'application/json',
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div
            // <GoogleOAuthProvider clientId='1060704648880-2vqttp1m0jsdkitbh77nn9if0sos43ne.apps.googleusercontent.com'>
            className='flex min-h-screen flex-row bg-[url("/bg-home-1.svg")] w-screen 
      bg-no-repeat bg-contain xlc:bg-none'
        >
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
                </div>
            </div>

            {/* Right Side */}

            {/* Text Contents */}
            <div
                className='flex flex-col items-center 
        xlc:items-end'
            >
                {/* Form */}
                <div
                    className='flex flex-col items-center 
          w-screen 
          xlc:w-[30rem] min-h-screen'
                >
                    <form className='flex flex-col'>
                        <h1
                            className='text-[2.5rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[2.75rem] mt-[9.25rem]
              mb-[1.31rem] text-[#29375F]'
                        >
                            Sign Up
                        </h1>

                        {/* <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                    getUser(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            /> */}

                        {/* FACEBOOK BUTTON */}
                        {/* <div
                            className='fb-login-button'
                            data-width='400px'
                            data-size=''
                            data-button-type=''
                            data-layout=''
                            data-auto-logout-link='false'
                            data-use-continue-as='false'
                        ></div> */}

                        {/* <button className=' bg-slate-300' onClick={login}>
                            Login
                        </button>
                        <button className=' bg-slate-500' onClick={logout}>
                            Logout
                        </button> */}

                        {/* Facebook login button */}
                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                        >
                            <button
                                // onClick={login}
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
                                    sign up with facebook
                                </span>
                            </button>
                        </div>

                        {/* Google login button */}
                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                        >
                            <button
                                // onClick={handleSubmit}
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
                                <span className='flex-1'>
                                    sign up with google
                                </span>
                            </button>
                        </div>

                        {/* Twitter login button */}
                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
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
                                    sign up with twitter
                                </span>
                            </button>
                        </div>

                        {/* LinkedIn login button */}
                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                        >
                            <button
                                // onClick={linkedinLogin}
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
                                    sign up with linkedin
                                </span>
                            </button>
                        </div>

                        <h2 className='flex self-center mt-5'>Or</h2>
                        <label
                            className='font-iBM_Plex_Sans
            text-[#29375F] text-[1rem] font-[400] 
              mb-[0.5rem]'
                        >
                            Your Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Adam Voigt'
                            ref={usernameRef}
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                        />

                        <label
                            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
          mt-[1.25rem] mb-[0.5rem]'
                        >
                            Email Address
                        </label>
                        <input
                            type='text'
                            name='email'
                            placeholder='yourname@domain.com'
                            ref={emailRef}
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                        />

                        <label
                            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='****  ****  ****'
                            ref={passwordRef}
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                        />
                        <label
                            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
                        >
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            placeholder='****  ****  ****'
                            onChange={(event) => {
                                handlePassword(event.target.value);
                            }}
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                        />
                        {error && (
                            <span className='ml-[1rem]'>
                                Password doesn&apos;t match{' '}
                            </span>
                        )}
                    </form>
                    <div
                        className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    >
                        {/* <Link
                        href='/signup'
                        className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                    > */}
                        <button
                            onClick={handleSubmit}
                            className='flex bg-[#6F91F4] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            Sign up
                        </button>
                        {/* </Link> */}
                    </div>

                    <hr
                        className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[2.5rem]
            mb-[2.5rem] xlc:mt-[1rem] xlc:mb-[1rem]'
                    />

                    <h3
                        className='font-iBM_Plex_Sans
            text-[#29375F] font-[600]'
                    >
                        Already have an account?
                    </h3>
                    <Link
                        href='/login'
                        className='w-[21.25rem] h-[2.75rem] mt-3
            mb-[2.13rem]
            md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
            xlc:w-[25rem] xlc:mb-2'
                    >
                        <button
                            className='flex bg-white h-full 
            w-full items-center rounded-full border-[1px] 
            border-[#3157C9] uppercase text-[#6F91F4] 
            font-iBM_Plex_Sans tracking-[0.1rem]
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            hover:border-[#4771ED] hover:bg-[#FAFAFA]
            active:border-[#4063C7] 
            active:bg-[#FAFAFA]'
                        >
                            Login
                        </button>
                    </Link>
                </div>
            </div>
            {/* </GoogleOAuthProvider> */}
        </div>
    );
};

export default SignupPage;
