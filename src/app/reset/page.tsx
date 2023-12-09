'use client';
import Navbar2 from '@/components/Navbar2';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const LoginPage = () => {
    // const userRef = useRef<any>(null);
    const [email, setEmail] = useState('');
    const [currentError, setCurrentError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showEmailSent, setShowEmailSent] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setCurrentError(false);

        setShowEmailSent(true);

        // console.log('email', email);
        try {
            // do something
        } catch (error: any) {
            setCurrentError(true);
            setErrorMessage(error.response.data.error);
        }
    };

    const handleDone = async (e: any) => {
        e.preventDefault();

        router.push('/login');
    };

    useEffect(() => {
        // do something
    }, []);

    return (
        <div
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
                            Reset Password
                        </h1>

                        {showEmailSent ? (
                            <div className='w-[25rem] flex flex-col items-center'>
                                <p
                                    className='font-iBM_Plex_Sans
                            text-[#29375F] text-[1rem] font-[400] 
                            mb-[1.25rem] w-[25rem] xlc:w-[25rem]'
                                >
                                    We have sent an email to your email address
                                    “{email}”. Please follow the instructions in
                                    the email to reset your password.
                                </p>
                                <div
                                    className='w-[21.25rem] h-[2.75rem] mt-[0.75rem]
                              mb-[0.75rem]
                              md:w-[43rem] md:mt-[1.25rem] 
                              xlc:w-[25rem]'
                                    onClick={handleDone}
                                >
                                    <button
                                        type='button'
                                        // disabled={isFetching}
                                        className='flex bg-[#3052B5] h-full 
                                  w-full items-center rounded-full border-[1px] 
                                  border-[#3157C9] uppercase text-white 
                                  font-iBM_Plex_Sans tracking-[0.1rem]
                                  text-[1rem] font-[600] justify-center
                                  drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                  hover:bg-[#4771ED] active:bg-[#4063C7] 
                                   disabled:cursor-not-allowed
                                   disabled:bg-[#7a98f3] '
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='w-[25rem]'>
                                <p
                                    className='font-iBM_Plex_Sans
                            text-[#29375F] text-[1rem] font-[400] 
                            mb-[1.25rem] xlc:w-[25rem]'
                                >
                                    Enter your email linked to your account to
                                    receive instructions on how to reset your
                                    password.
                                </p>

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
                                <div
                                    className='w-[21.25rem] h-[2.75rem] mt-[0.75rem]
                              mb-[0.75rem]
                              md:w-[43rem] md:mt-[1.25rem] 
                              xlc:w-[25rem]'
                                >
                                    <button
                                        type='submit'
                                        // disabled={isFetching}
                                        className='flex bg-[#3052B5] h-full 
                                  w-full items-center rounded-full border-[1px] 
                                  border-[#3157C9] uppercase text-white 
                                  font-iBM_Plex_Sans tracking-[0.1rem]
                                  text-[1rem] font-[600] justify-center
                                  drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                  hover:bg-[#4771ED] active:bg-[#4063C7] 
                                   disabled:cursor-not-allowed
                                   disabled:bg-[#7a98f3] '
                                    >
                                        reset password
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    {showEmailSent ? (
                        <div></div>
                    ) : (
                        <div className='w-[25] flex flex-col items-center'>
                            <hr
                                className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[3.8rem]
            mb-[0.75rem]'
                            />

                            <h3
                                className='font-iBM_Plex_Sans
            text-[#29375F] font-[600] text-[1rem]'
                            >
                                Remembered your password?
                            </h3>
                            <Link
                                href='/login'
                                className=' w-[21.25rem] h-[2.75rem] mt-[0.75rem]
                          mb-[8.38rem]
                          md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
                          xlc:w-[25rem] flex items-center justify-center'
                            >
                                <button
                                    className='flex bg-white h-[2.75rem] mt-[0.5rem] 
                              w-[21.25rem] items-center rounded-full border-[1px] 
                              border-[#3157C9] uppercase text-[#6F91F4] 
                              font-iBM_Plex_Sans tracking-[0.1rem]
                              text-[1rem] font-[600] justify-center
                              drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                              hover:border-[#4771ED] hover:bg-[#FAFAFA]
                              active:border-[#4063C7] active:bg-[#FAFAFA]'
                                >
                                    Back To Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            {/* <h1 className='flex flex-1'>WHo</h1>
      <h1 className='flex flex-2'>Where</h1> */}
        </div>
    );
};

export default LoginPage;
