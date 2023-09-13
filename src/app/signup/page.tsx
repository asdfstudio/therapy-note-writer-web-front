'use client';
import Navbar2 from '@/components/Navbar2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const signupPage = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[url("/bg-home-1.svg")] w-full bg-no-repeat bg-contain xlc:bg-none'>
      <Navbar2 />
      {/* Big image Left */}
      <div
        className='hidden xlc:flex absolute inset-0 
        xlc:w-[56rem] xlc:h-[53rem]'
        // 2xl:w-[64rem] 2xl:h-[60rem]
      >
        <Image src='/signup-banner-lg.jpg' alt='background image' fill />
      </div>

      {/* Right Side */}
      {/* Background */}
      {/* <div className=' absolute inset-0 -top-[31rem] w-full h-auto z-0'>
        <Image src='/signup-bg-1.svg' alt='background image z-0' fill />
      </div> */}

      {/* Text Contents */}
      <div
        className='flex flex-col items-center 
        xlc:items-center xlc:ml-[56rem]'
      >
        {/* Form */}
        <div
          className='flex flex-col items-center 
          xlc:w-[27rem] 2xl:w-[30rem]'
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
              type='text'
              name='password'
              placeholder='****  ****  ****'
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
              type='text'
              name='password'
              placeholder='****  ****  ****'
              className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
            />
          </form>
          <Link
            href='/signup'
            className='w-[21.25rem] h-[2.75rem] mt-4
            mb-[2.13rem]
            md:w-[43rem] md:mt-[1.25rem] md:mb-[2.37rem]
            xlc:w-[25rem] xlc:mb-0'
          >
            <button
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
          </Link>

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
    </div>
  );
};

export default signupPage;
