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
    const [isEmailFormShown, setIsEmailFormShown] = useState(true);
    const [isOTPShown, setIsOTPShown] = useState(false);
    const [isVerifiedScreenShown, setIsVerifiedScreenShown] = useState(false);
    const [isSetupScreenShown, setIsSetupScreenShown] = useState(false);
    const [isAboutScreenShown, setIsAboutScreenShown] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordAgain, setShowPasswordAgain] = useState(false);
    const [noteTakingPref, setNoteTakingPref] = useState('');
    const [avgNumOfSessionsPerWeek, setAvgNumOfSessionsPerWeek] = useState(0);
    const router = useRouter();
    const params = useSearchParams();
    // console.log('param', params.get('code'));
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const noteTakingPrefList = [
        'Data, Assessment, Plan (DAP)',
        'Behavior, Intervention, Response, Plan (BIRP)',
        'Goals, Intervention, Response, Plan (GIRP)',
        'Subject, Objective, Assessment, Plan (SOAP)',
        'Situation, Intervention, Response, Plan (SIRP)',
        'Narrative',
        'Other',
    ];

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
        // console.log('Started use effect');
        initFacebookSdk().then(() => {
            // console.log('2nd time');
            getFacebookLoginStatus().then((response: any) => {
                if (response == null) {
                    console.log('No login status for the person');
                } else {
                    // console.log('res', response);
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
            // const res = await axios.post(`${baseURL}/api/auth/register`, {
            //     username: usernameRef.current.value,
            //     email: emailRef.current.value,
            //     password: passwordRef.current.value,
            // });

            // console.log(res.data);
            // res.data && router.push('/login');

            setIsEmailFormShown(false);
            setIsOTPShown(true);
        } catch (error) {
            return error;
        }
    };

    const submitOTP = async () => {
        // Handle OTP match

        setIsOTPShown(false);
        setIsVerifiedScreenShown(true);
    };

    const OTPVerified = () => {
        setIsVerifiedScreenShown(false);
        setIsSetupScreenShown(true);
    };

    const setupScreenOne = () => {
        setIsSetupScreenShown(false);
        setIsAboutScreenShown(true);
    };

    const handleAccountSetup = () => {
        // Call API to setup profile info
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
            <div>
                {/* Log out button */}
                <div
                    className='flex w-[28rem] items-center justify-end mt-[2rem]
                    mr-[2rem]'
                >
                    <svg
                        className='w-[0.75rem] h-[0.75rem] mr-[0.5rem]'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                    >
                        <path
                            d='M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 
                                    11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 
                                    6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 
                                    0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 
                                    0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 
                                    9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 
                                    14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 
                                    32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 
                                    0c17.7 0 32 14.3 32 32s-14.3 32-32 32z'
                        />
                    </svg>
                    <p
                        className='w-[5rem] text-[0.75rem] font-[600]
                        uppercase font-iBM_Plex_Sans  text-[rgba(41,55,95,0.70)]'
                    >
                        Log Out
                    </p>
                </div>

                {/* Text Contents */}
                {isEmailFormShown && (
                    <div
                        className='flex flex-col items-center 
                        xlc:items-end'
                    >
                        {/* Form */}
                        <div
                            className='flex flex-col items-center 
                        w-screen xlc:w-[30rem] min-h-screen'
                        >
                            <form className='flex flex-col'>
                                <h1
                                    className='text-[2.5rem] 
                            font-poynter_Oldstyle_Display 
                            font-[400] leading-[2.75rem] mt-[6.5rem]
                            mb-[0.75rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-0'
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

                                {/* Commented for new designs  (DOWN CODES) */}

                                {/* <label
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
                        /> */}

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

                                {/* Sign-up button */}
                                <div
                                    className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                                >
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
                                </div>

                                <div className='mt-[0.75rem] flex items-center self-center'>
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
                                    className='w-[21.25rem] h-[2.75rem] 
                        mb-[0.75rem]
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
                                            sign up with twitter
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
                            </form>

                            <hr
                                className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[2.5rem]
            mb-[2.5rem] xlc:mt-[3rem] xlc:mb-[1rem]'
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
                )}
                {/* </GoogleOAuthProvider> */}

                {/* OTP Screen */}
                {isOTPShown && (
                    <div
                        className='flex flex-col items-center 
                    w-screen xlc:w-[30rem] min-h-screen mx-[2.5rem]'
                    >
                        {/* Title */}
                        <p
                            className='text-[2.5rem] 
                            font-poynter_Oldstyle_Display 
                            font-[400] leading-[2.75rem] mt-[6.5rem]
                            mb-[0.75rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-0 self-start'
                        >
                            Confirm Email
                        </p>

                        {/* Paragraph */}
                        <p
                            className='text-[1rem] 
                            font-iBM_Plex_Sans
                            font-[400] mt-[1.5rem]
                            mb-[1.5rem] text-[#29375F]'
                        >
                            We have sent a verification code to your email
                            “adamvoigt@gmail.com”. Please enter the code to
                            verify your email.
                        </p>

                        <div className='flex gap-[0.5rem]'>
                            <input
                                maxLength={1}
                                className='w-[4.6rem] h-[2.75rem] rounded-[6.25rem]
                            border-[rgba(111,145,244,0.50)] border-[1px]
                            text-center'
                                type='text'
                                onInput={(e: any) => {
                                    e.target.parentElement.children[1].focus();
                                }}
                            />
                            <input
                                className='w-[4.6rem] h-[2.75rem] rounded-[6.25rem]
                        border-[rgba(111,145,244,0.50)] border-[1px]
                            text-center'
                                type='text'
                                // onKeyUp={(e: any) => {
                                //     if (
                                //         e.key === 'Delete' ||
                                //         e.key === 'Backspace'
                                //     ) {
                                //         console.log('press');
                                //         e.target.value = '';
                                //         e.target.parentElement.children[0].focus();
                                //     }
                                // }}
                                onInput={(e: any) => {
                                    e.target.parentElement.children[2].focus();
                                }}
                            />
                            <input
                                className='w-[4.6rem] h-[2.75rem] rounded-[6.25rem]
                            border-[rgba(111,145,244,0.50)] border-[1px]
                            text-center'
                                type='text'
                                onInput={(e: any) => {
                                    e.target.parentElement.children[3].focus();
                                }}
                            />
                            <input
                                className='w-[4.6rem] h-[2.75rem] rounded-[6.25rem]
                            border-[rgba(111,145,244,0.50)] border-[1px]
                            text-center'
                                type='text'
                                onInput={(e: any) => {
                                    e.target.parentElement.children[4].focus();
                                }}
                            />
                            <input
                                className='w-[4.6rem] h-[2.75rem] rounded-[6.25rem]
                            border-[rgba(111,145,244,0.50)] border-[1px]
                            text-center'
                                type='text'
                            />
                        </div>

                        <p className='mt-[1rem] mb-[1.5rem] font-iBM_Plex_Sans text-[#29375F]'>
                            Did not receive the code?
                            <span className='font-[600] text-[#6F91F4]'>
                                {' '}
                                Resend
                            </span>
                        </p>

                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-[4rem]
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0 xlc:mt-0'
                        >
                            <button
                                onClick={submitOTP}
                                className='flex bg-[#6F91F4] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Email Verified Screen */}
                {isVerifiedScreenShown && (
                    <div
                        className='flex flex-col items-center 
                    w-screen xlc:w-[30rem] min-h-screen'
                    >
                        {/* Title */}
                        <p
                            className='w-[24.9375rem] text-[3.125rem] text-center
                            font-poynter_Oldstyle_Display 
                            font-[400] leading-[3.4375rem] mt-[6.5rem]
                            mb-[1.5rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-0 '
                        >
                            Your email has been verified
                        </p>

                        {/* Paragraph */}
                        <p
                            className='text-[1rem] text-center w-[24.9375rem] 
                            font-iBM_Plex_Sans
                            font-[400] 
                            mb-[1.5rem] text-[#29375F]'
                        >
                            Welcome to TherapyNoteWriter! You will be
                            automatically redirected to continue your account
                            creation.
                        </p>

                        <div
                            className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0 xlc:mt-0'
                        >
                            <button
                                onClick={OTPVerified}
                                className='flex bg-[#6F91F4] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {isSetupScreenShown && (
                    <div
                        className='flex flex-col items-center 
                    w-screen xlc:w-[30rem] min-h-screen'
                    >
                        {/* Title */}
                        <p
                            className='w-[24.9375rem] text-[3.125rem] text-left
                            font-poynter_Oldstyle_Display  
                            font-[400] leading-[3.4375rem] mt-[6.5rem]
                            mb-[1.5rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-0 '
                        >
                            Set Up Your Account
                        </p>

                        <label
                            className='font-iBM_Plex_Sans w-[24.9375rem]
                        text-[#29375F] text-[1rem] font-[400] 
                        mt-[1.25rem] mb-[0.5rem] text-left'
                        >
                            Email Address
                        </label>
                        <input
                            type='text'
                            name='email'
                            placeholder='yourname@domain.com'
                            ref={emailRef}
                            disabled
                            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[rgba(111,145,244,0.10)] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem] '
                        />

                        <div className='flex flex-col'>
                            <label
                                className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
                            >
                                Password
                            </label>
                            <input
                                type={`${showPassword ? 'text' : 'password'}`}
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
                            <Image
                                alt=''
                                src='/sign-up-view-password.png'
                                width='1200'
                                height='550'
                                className={`absolute w-[1.25rem] h-auto mt-[4rem] right-[2rem] cursor-pointer
                            ${!showPassword ? '' : 'hidden'}`}
                                onClick={() => {
                                    !showPassword
                                        ? setShowPassword(true)
                                        : setShowPassword(false);
                                }}
                            />
                            <Image
                                alt=''
                                src='/sign-up-hide-password.png'
                                width='1200'
                                height='550'
                                className={`absolute w-[1.25rem] h-auto mt-[4rem] right-[2rem] cursor-pointer
                            z-[4] ${!showPassword ? 'hidden' : ''}`}
                                onClick={() => {
                                    !showPassword
                                        ? setShowPassword(true)
                                        : setShowPassword(false);
                                }}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label
                                className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
                            >
                                Confirm Password
                            </label>
                            <input
                                type={`${
                                    showPasswordAgain ? 'text' : 'password'
                                }`}
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
                            <Image
                                alt=''
                                src='/sign-up-view-password.png'
                                width='1200'
                                height='550'
                                className={`absolute w-[1.25rem] h-auto mt-[4rem] right-[2rem] cursor-pointer
                            ${!showPasswordAgain ? '' : 'hidden'}`}
                                onClick={() => {
                                    !showPasswordAgain
                                        ? setShowPasswordAgain(true)
                                        : setShowPasswordAgain(false);
                                }}
                            />
                            <Image
                                alt=''
                                src='/sign-up-hide-password.png'
                                width='1200'
                                height='550'
                                className={`absolute w-[1.25rem] h-auto mt-[4rem] right-[2rem] cursor-pointer
                            z-[4] ${!showPasswordAgain ? 'hidden' : ''}`}
                                onClick={() => {
                                    !showPasswordAgain
                                        ? setShowPasswordAgain(true)
                                        : setShowPasswordAgain(false);
                                }}
                            />
                            {error && (
                                <span
                                    className='ml-[0.75rem] text-[#F4776F] font-iBM_Plex_Sans
                                font-[400]'
                                >
                                    Password doesn&apos;t match{' '}
                                </span>
                            )}
                        </div>

                        <div className='flex flex-col mt-[4rem] lg:absolute lg:bottom-[2.5rem] lg:mt-0'>
                            <div className='flex items-center self-center gap-[1.25rem]'>
                                <hr className='h-[0.375rem] w-[11.875rem] rounded-[62.5rem] bg-[#6F91F4] ' />

                                <hr className='h-[0.375rem] w-[11.875rem] rounded-[62.5rem] bg-[#D9D9D9] ' />
                            </div>

                            <div
                                className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                            >
                                <button
                                    onClick={setupScreenOne}
                                    className='flex bg-[#6F91F4] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {isAboutScreenShown && (
                    <div
                        className='flex flex-col items-center 
                    w-screen xlc:w-[30rem] min-h-screen'
                    >
                        {/* Title */}
                        <p
                            className='w-[24.9375rem] text-[3.125rem] text-left
                            font-poynter_Oldstyle_Display 
                            font-[400] leading-[3.4375rem] mt-[6.5rem]
                            mb-[1.5rem] text-[#29375F] md:mb-[1.25rem]
                            xlc:mt-0 '
                        >
                            Tell Us About Yourself
                        </p>

                        <label
                            className='font-iBM_Plex_Sans
                        text-[#29375F] text-[1rem] font-[400]
                        mt-[1.25rem] mb-[0.5rem] text-left w-[24.9375rem]'
                        >
                            Full Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Adam Voigt'
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
                        mt-[1.25rem] mb-[0.5rem] text-left w-[24.9375rem]'
                        >
                            Note-Taking Preference
                        </label>
                        {noteTakingPrefList.map((item: any, index: any) => {
                            return (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between 
                        px-[0.88rem] w-[21.25rem] h-[2.75rem] 
                        text-[#242C44] rounded-full mb-[0.5rem]
                        border-[1px] border-[#6f91f480]
                        pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
                        font-iBM_Plex_Sans font-[400] text-[1rem]
                        hover:border-[#6F91F4] cursor-pointer
                        ${
                            noteTakingPref === item
                                ? 'bg-[rgba(49,87,201,0.06)]'
                                : 'bg-[#fff] '
                        }
                        `}
                                    defaultValue={item}
                                    onClick={() => {
                                        setNoteTakingPref(item);
                                    }}
                                >
                                    <p>{item}</p>
                                    <span
                                        className={`w-[1rem] h-[1rem] border-[2px] 
                                    rounded-[10rem] border-[#3157C9] 
                                    ${noteTakingPref === item ? 'hidden' : ''}
                                    `}
                                    ></span>
                                    <svg
                                        className={`fill-[#fff] bg-[#3157C9]
                                    w-[1rem] h-[1rem] rounded-[10rem] p-[0.2rem]
                                    ${noteTakingPref === item ? '' : 'hidden'}
                                    `}
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='1em'
                                        viewBox='0 0 448 512'
                                    >
                                        <path
                                            d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 
                                        256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 
                                        0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 
                                        32.8-12.5 45.3 0z'
                                        />
                                    </svg>
                                </div>
                            );
                        })}

                        <label
                            className='font-iBM_Plex_Sans
                        text-[#29375F] text-[1rem] font-[400]
                        mt-[0.75rem] mb-[0.5rem] text-left w-[24.9375rem]'
                        >
                            Average number of sessions per week (Optional)
                        </label>
                        <div
                            className={`flex items-center justify-between 
                        px-[0.88rem] w-[21.25rem] h-[2.75rem] 
                        text-[#242C44] rounded-full mb-[0.5rem]
                        border-[1px] border-[#6f91f480]
                        pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
                        font-iBM_Plex_Sans font-[400] text-[1rem]
                        hover:border-[#6F91F4] 
                        `}
                        >
                            <div
                                className='w-[1.5rem] h-[1.5rem] bg-[#3157C9]
                            rounded-[10rem] text-[#fff] text-center 
                            text-[1rem] cursor-pointer'
                                onClick={() => {
                                    avgNumOfSessionsPerWeek > 0
                                        ? setAvgNumOfSessionsPerWeek(
                                              avgNumOfSessionsPerWeek - 1
                                          )
                                        : setAvgNumOfSessionsPerWeek(0);
                                }}
                            >
                                -
                            </div>

                            <input
                                type='number'
                                name='session amount'
                                placeholder='0'
                                value={avgNumOfSessionsPerWeek}
                                onChange={(e: any) => {
                                    let numOfSession = e.target.value;
                                    numOfSession < 0 ? (numOfSession = 0) : '';
                                    setAvgNumOfSessionsPerWeek(numOfSession);
                                }}
                                className='w-[5rem] h-[2.5rem] rounded-full
                            bg-[#fff] pl-[1.06rem] text-center
                            font-iBM_Plex_Sans font-[400] text-[1rem]
                            [&::-webkit-outer-spin-button]:appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none'
                            />

                            <div
                                className='w-[1.5rem] h-[1.5rem] bg-[#3157C9]
                            rounded-[10rem] text-[#fff] text-center 
                            text-[1rem] cursor-pointer'
                                onClick={() => {
                                    setAvgNumOfSessionsPerWeek(
                                        avgNumOfSessionsPerWeek + 1
                                    );
                                }}
                            >
                                +
                            </div>
                        </div>

                        <div className='flex flex-col mt-[4rem] mb-[2rem]'>
                            <div className='flex items-center self-center gap-[1.25rem]'>
                                <hr className='h-[0.375rem] w-[11.875rem] rounded-[62.5rem] bg-[#6F91F4] ' />

                                <hr className='h-[0.375rem] w-[11.875rem] rounded-[62.5rem] bg-[#6F91F4] ' />
                            </div>

                            <div
                                className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[2.13rem]
                        md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                        xlc:w-[25rem] xlc:mb-0'
                            >
                                <button
                                    // onClick={handleAccountSetup}
                                    className='flex bg-[#6F91F4] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                                >
                                    Complete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignupPage;
