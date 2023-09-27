import React from 'react';
import Link from 'next/link';

const ChangePassHome = () => {
  return (
    <div
      className='flex min-h-screen bg-[url("/bg-home-1.svg")] 
      w-screen 
      bg-no-repeat bg-contain'
    >
      {/* Account */}
      <div>
        <div
          className='flex flex-col items-center 
          w-screen
          xlc:w-[30rem] min-h-screen'
        >
          <form className='flex flex-col mb-[15rem]'>
            <h1
              className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[3.4375rem] mt-[2.98rem]
              mb-[1.5rem] text-[#29375F]'
            >
              Change <br /> Password
            </h1>

            <label
              className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.5rem] mb-[0.5rem]'
            >
              Current Password
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
            mt-[1.5rem] mb-[0.5rem]'
            >
              Confirm Password
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
              href='/dashboard/settings'
              className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
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
                update subscription
              </button>
            </Link>
            <Link
              href='/dashboard/changepassword'
              className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
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
                change password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassHome;
