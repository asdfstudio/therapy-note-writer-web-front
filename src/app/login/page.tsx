'use client';
import Navbar2 from '@/components/Navbar2';
import Link from 'next/link';
import React from 'react';

const loginPage = () => {
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
              font-[400] leading-[2.75rem] mt-[10.94rem]
              mb-[1.31rem] text-[#29375F]'
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
              className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[43rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
            />
            <Link
              href='/login'
              className='w-[21.25rem] h-[2.75rem] mt-4
            mb-[0.94rem]
            md:w-[43rem] md:mt-[1.25rem] 
            xlc:w-[25rem]'
            >
              <button
                type='submit'
                className='flex bg-[#6F91F4] h-full 
            w-full items-center rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            font-iBM_Plex_Sans tracking-[0.1rem]
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
              >
                Login
              </button>
            </Link>
          </form>
          <h3
            className='font-iBM_Plex_Sans
            text-[#29375F] font-[600] text-[1rem]'
          >
            Forgot password?{' '}
            <Link
              href={'/login'}
              className='text-[#6F91F4]
              underline'
            >
              Reset
            </Link>
          </h3>

          <hr
            className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[2.5rem]
            mb-[2.5rem]'
          />

          <h3
            className='font-iBM_Plex_Sans
            text-[#29375F] font-[600] text-[1rem]'
          >
            Don’t have an account?
          </h3>
          <Link
            href='/signup'
            className='w-[21.25rem] h-[2.75rem] mt-3
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

export default loginPage;
