'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';

const PasswordResetPage = () => {
    // const oldPasswordRef = useRef<any>(null);
    const NewPasswordRef = useRef<any>(null);
    const [currentError, setCurrentError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [series, setSeries] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const router = useRouter();
    const params = useSearchParams();
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        return () => {
            setSeries(params.get('series'));
            setEmail(params.get('identity'));
        };
    });

    const handlePassword = (password: any) => {
        if (password !== NewPasswordRef.current.value) {
            setErrorMessage(`Password doesn't match`);
            setCurrentError(true);
        } else {
            setCurrentError(false);
        }
    };

    const handleSubmit = async (e: any) => {
        setCurrentError(false);
        e.preventDefault();
        try {
            const res = await axios.post(
                `${baseURL}/api/auth/resetPasswordFromLink`,
                {
                    email: email,
                    series: series,
                    newPassword: NewPasswordRef.current.value,
                }
            );
            // console.log(res.data);
            res.data && router.push('/login');
        } catch (error: any) {
            if (error.response) {
                setErrorMessage(error.response!.data.error);
            } else {
                setErrorMessage(error.message);
            }
            setCurrentError(true);
            return error;
        }
    };

    return (
        <div
            className='flex min-h-screen bg-[url("/bg-home-1.svg")] 
      w-screen flex-col items-center
      bg-no-repeat bg-contain'
        >
            {/* Change Pass */}
            <div>
                <form className='flex flex-col mb-[15rem]'>
                    <h1
                        className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[3.4375rem] mt-[2.98rem]
              mb-[1.5rem] text-[#29375F]'
                    >
                        Reset Password
                    </h1>

                    <label
                        className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.5rem] mb-[0.5rem]'
                    >
                        New Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Type new password'
                        ref={NewPasswordRef}
                        className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                    />
                    <label
                        className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.5rem] mb-[0.5rem]'
                    >
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Re-enter new password'
                        onChange={(event) => {
                            handlePassword(event.target.value);
                        }}
                        className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                    />
                    {currentError && (
                        <span
                            className=' font-iBM_Plex_Sans font-[400] text-[1rem]
                        text-red-600ml-[1rem] opacity-[0.5] ml-[1rem] mt-[0.3rem]'
                        >
                            {errorMessage}
                        </span>
                    )}

                    <div
                        className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
                        md:w-[25rem] xlc:w-[25rem]'
                    >
                        {/* <Link
                            href='/dashboard/settings'
                            className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
                            md:w-[25rem] 
                            xlc:w-[25rem]'
                        > */}
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='flex bg-[#3052B5] h-full 
                            w-full items-center rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            text-[1rem] font-[600] justify-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            reset password
                        </button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordResetPage;
