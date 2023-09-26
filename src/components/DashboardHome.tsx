import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DashboardHome = () => {
  return (
    <div className='font-iBM_Plex_Sans'>
      <div
        className='bg-[url("/bg-home-2.svg")] h-auto 
        bg-repeat-x bg-cover flex flex-col items-center 
        justify-center xlc:bg-contain xlc:pt-[7rem]'
      >
        <h1 className='text-[3.4375rem] mt-5 text-[#29375F]'>
          <span className='font-poynter_Oldstyle_Display'>
            How it <span className='italic'>works</span>
          </span>
        </h1>

        {/* Icon wrapper  */}
        <div
          className='flex flex-col items-center mt-5 
          xlc:flex-row xlc:items-baseline xlc:justify-evenly 
          xlc:w-[70vw]'
        >
          {/* Single Item */}
          <div
            className='flex items-center 
            justify-center w-[90vw] sm:flex-row xlc:flex-col 
            xlc:w-full'
          >
            {/* Icon */}
            <div
              className='flex w-[4.54594rem] 
              h-[3.90006rem]'
            >
              <Image
                src='/second-icon-1.svg'
                alt=''
                width={1200}
                height={550}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div
              className='flex flex-col items-start ml-[1.5rem]
              justify-center mt-3 sm:items-start 
              w-[15rem] xlc:items-center
              xlc:ml-0 xlc:w-full'
            >
              <p
                className='text-[#29375F] text-[1.375rem] 
                font-[500] leading-[1.75rem]'
              >
                Input session info
              </p>
              <p
                className='text-[#29375F] 
                text-[1.125rem] font-[400] leading-[1.75rem] 
                opacity-[0.7] text-left xlc:text-center 
                xlc:w-[15.8125rem]'
              >
                Easily enter relevant details about the therapy session.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div
            className='flex w-[0.9205rem] h-[1.5625rem] 
            mt-6 mb-6 -ml-[15rem] 
            xlc:hidden'
          >
            <Image
              src='/icon-arrow-down.svg'
              alt=''
              width={200}
              height={100}
              draggable={false}
            />
          </div>
          <div className='hidden xlc:flex'>
            <Image
              src='/icon-arrow-right.svg'
              alt=''
              width={130}
              height={10}
              draggable={false}
            />
          </div>

          {/* Single Item */}
          <div
            className='flex items-center 
            justify-center w-[90vw] sm:flex-row xlc:flex-col 
            xlc:w-full'
          >
            {/* Icon */}
            <div
              className='flex w-[4.54594rem] 
              h-[3.90006rem]'
            >
              <Image
                src='/second-icon-2.svg'
                alt=''
                width={1200}
                height={550}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div
              className='flex flex-col items-start ml-[1.5rem]
              justify-center mt-3 sm:items-start 
              w-[15rem] xlc:items-center
              xlc:ml-0 xlc:w-full'
            >
              <p
                className='text-[#29375F] text-[1.375rem] 
                font-[500] leading-[1.75rem]'
              >
                Click generate
              </p>
              <p
                className='text-[#29375F] 
                text-[1.125rem] font-[400] leading-[1.75rem] 
                opacity-[0.7] text-left xlc:text-center 
                xlc:w-[15.8125rem]'
              >
                Our Al-powered system creates a professional progress note in
                DAP format.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div
            className='flex w-[0.9205rem] h-[1.5625rem] 
            mt-6 mb-6 -ml-[15rem] 
            xlc:hidden'
          >
            <Image
              src='/icon-arrow-down.svg'
              alt=''
              width={200}
              height={100}
              draggable={false}
            />
          </div>

          <div className='hidden xlc:flex'>
            <Image
              src='/icon-arrow-right.svg'
              alt=''
              width={130}
              height={10}
              draggable={false}
            />
          </div>

          {/* Single Item */}
          <div
            className='flex items-center 
            justify-center w-[90vw] sm:flex-row xlc:flex-col 
            xlc:w-full'
          >
            {/* Icon */}
            <div
              className='flex w-[4.54594rem] 
              h-[3.90006rem]'
            >
              <Image
                src='/second-icon-3.svg'
                alt=''
                width={1200}
                height={550}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div
              className='flex flex-col items-start ml-[1.5rem]
              justify-center mt-3 sm:items-start 
              w-[15rem] xlc:items-center
              xlc:ml-0 xlc:w-full'
            >
              <p
                className='text-[#29375F] text-[1.375rem] 
                font-[500] leading-[1.75rem]'
              >
                Note complete
              </p>
              <p
                className='text-[#29375F] 
                text-[1.125rem] font-[400] leading-[1.75rem] 
                opacity-[0.7] text-left xlc:text-center 
                xlc:w-[15.8125rem]'
              >
                Review, edit, and copy your progress note, freeing up time for
                patient care.
              </p>
            </div>
          </div>
        </div>

        <Link
          href='/dashboard'
          className='w-[17rem] mt-10 
          mb-10'
        >
          <button
            className='flex bg-[#6F91F4] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            font-iBM_Plex_Sans tracking-[0.1rem]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
