import React from 'react';
import Link from 'next/link';

const SettingsHome = () => {
  return (
    <div
      className='flex min-h-screen bg-[url("/bg-home-1.svg")] 
      w-screen flex-col items-center
      bg-no-repeat bg-contain xlc:flex-row
      xlc:justify-center '
    >
      {/* Account */}

      <form className='flex flex-col'>
        <h1
          className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[2.75rem] mt-[2.98rem]
              mb-[1.31rem] text-[#29375F]'
        >
          Account
        </h1>

        <label
          className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
           mb-[0.5rem]'
        >
          Your Name
        </label>
        <input
          type='email'
          name='email'
          placeholder='Amanda Groel'
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
          Email Address
        </label>
        <input
          type='email'
          name='email'
          placeholder='yourname@domain.com'
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
          Password
        </label>
        <input
          type='password'
          name='password'
          placeholder='****  ****  ****'
          className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
        />
        <Link
          href='/dashboard/changepassword'
          className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
            md:w-[25rem] md:mt-[1.25rem] md:mb-[2.37rem]
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
            change password
          </button>
        </Link>
      </form>
      <div
        className='hidden xlc:flex bg-[rgba(111,145,244,0.40)] w-[1px] h-[40rem]
        mx-[5rem]'
      ></div>

      <hr
        className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[2.5rem]
            mb-[2.5rem] xlc:hidden'
      />

      <form className='flex flex-col mb-[5rem] xlc:mb-0'>
        <h1
          className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[3.4375rem] 
              mb-[2rem] text-[#29375F]'
        >
          Manage <br /> Subscription
        </h1>
        <h3
          className='font-iBM_Plex_Sans
            text-[#29375F] font-[400] text-[1rem]
            mb-[1.5rem]'
        >
          Modify your subscription and billing cycle.
        </h3>

        <label
          className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
           mb-[0.5rem]'
        >
          Current Plan
        </label>
        <input
          type='text'
          name='plan'
          placeholder='Basic'
          defaultValue={'Basic'}
          disabled
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
          Next Billing Cycle
        </label>
        <input
          type='text'
          name='email'
          placeholder='June 10, 2024'
          disabled
          className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
        />
        <Link
          href='/dashboard/settings'
          className='w-[21.25rem] h-[2.75rem] mt-4
            mb-[0.94rem]
            md:w-[25rem] md:mt-[1.25rem] 
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
            update subscription
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SettingsHome;
