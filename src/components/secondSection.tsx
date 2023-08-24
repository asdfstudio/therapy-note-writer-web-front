import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const poynter_Oldstyle_Display = localFont({
  src: '../../public/font/PoynterOldstyleDisplay_Roman.ttf',
});

const SecondSection = () => {
  return (
    <div className={iBM_Plex_Sans.className}>
      <div
        className='bg-[url("/bg-home-2.svg")] h-auto 
        bg-repeat-x bg-contain flex flex-col items-center justify-center'
      >
        <h1
          className='font-["poynter_Oldstyle_Display"] 
          text-[40px] mt-5 text-[#29375F]'
        >
          How it <span className='italic'>works</span>
        </h1>

        {/* Icon wrapper  */}
        <div className='flex flex-col items-center mt-5'>
          {/* Single Item */}
          <div className='flex flex-col items-center justify-center'>
            {/* Icon */}
            <div className='flex'>
              <Image
                src='/second-icon-1.svg'
                alt=''
                width={90}
                height={10}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div className='flex flex-col items-center justify-center mt-3 w-[70vw]'>
              <p className='text-[#29375F] text-[22px] font-[500] leading-[1.75rem]'>
                Input session info
              </p>
              <p className='text-[#29375F] text-center text-[15px] font-[400] leading-[1.75rem] opacity-[0.7]'>
                Easily enter relevant details about the therapy session.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className='flex mt-6 mb-6'>
            <Image
              src='/icon-arrow-down.svg'
              alt=''
              width={20}
              height={10}
              draggable={false}
            />
          </div>

          {/* Single Item */}
          <div className='flex flex-col items-center justify-center'>
            {/* Icon */}
            <div className='flex'>
              <Image
                src='/second-icon-2.svg'
                alt=''
                width={90}
                height={10}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div className='flex flex-col items-center justify-center mt-3 w-[70vw]'>
              <p className='text-[#29375F] text-[22px] font-[500] leading-[1.75rem]'>
                Click generate
              </p>
              <p className='text-[#29375F] text-center text-[15px] font-[400] leading-[1.75rem] opacity-[0.7]'>
                Our Al-powered system creates a professional progress note in
                DAP format.
              </p>
            </div>
          </div>
          {/* Arrow */}
          <div className='flex mt-6 mb-6'>
            <Image
              src='/icon-arrow-down.svg'
              alt=''
              width={20}
              height={10}
              draggable={false}
            />
          </div>

          {/* Single Item */}
          <div className='flex flex-col items-center justify-center'>
            {/* Icon */}
            <div className='flex'>
              <Image
                src='/second-icon-3.svg'
                alt=''
                width={90}
                height={10}
                draggable={false}
              />
            </div>
            {/* Text Contents */}
            <div className='flex flex-col items-center justify-center mt-3 w-[70vw]'>
              <p className='text-[#29375F] text-[22px] font-[500] leading-[1.75rem]'>
                Note complete
              </p>
              <p className='text-[#29375F] text-center text-[15px] font-[400] leading-[1.75rem] opacity-[0.7]'>
                Review, edit, and copy your progress note, freeing up time for
                patient care.
              </p>
            </div>
          </div>
        </div>

        <Link href='/' className='w-[17rem] sm:w-[10rem] mt-6'>
          <button
            className='flex bg-[#6F91F4] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[12px] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SecondSection;
