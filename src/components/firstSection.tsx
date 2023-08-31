import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IBM_Plex_Sans } from 'next/font/google';

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '600',
});

const FirstSection = () => {
  return (
    <div className={iBM_Plex_Sans.className}>
      <div className='flex flex-col items-center w-full'>
        <div className='flex xlc:hidden'>
          <Image
            src='/banner-text-1-mobile.svg'
            alt=''
            height={100}
            width={330}
            draggable={false}
          />
        </div>
        <div className='flex xlc:hidden'>
          <Image
            src='/banner-text-2-mobile.svg'
            alt=''
            height={100}
            width={330}
            draggable={false}
          />
        </div>
        <div className='hidden xlc:flex w-[47.4375rem]'>
          <Image
            src='/banner-text-lg.svg'
            alt=''
            height={550}
            width={1200}
            draggable={false}
          />
        </div>
        <div
          className='flex flex-col sm:flex-row 
          gap-3 mt-5 items-center'
        >
          <div
            className='w-[20rem] h-[2.75rem] 
            sm:w-[13.75rem] flex bg-[#6F91F4] py-[12px] 
            rounded-full border-[1px] 
            border-[#3157C9] text-white 
            text-[1rem] font-[600] justify-center 
            items-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            <Link href='/'>
              <button className='uppercase'>Get Started</button>
            </Link>
          </div>
          <div
            className='w-[20rem] h-[2.75rem] sm:w-[13.75rem] 
            flex bg-white 
            py-[12px] rounded-full border-[1px] 
            border-[#3157C9] uppercase text-[1rem] 
            font-[600] text-[#6F91F4]
            justify-center items-center'
          >
            <Link href='/'>
              <button className='uppercase'>How It Works</button>
            </Link>
          </div>
        </div>
        <div className='flex sm:hidden mt-8'>
          <Image
            src='/banner-2-mobile.png'
            alt=''
            width={380}
            height={100}
            draggable={false}
          />
        </div>
        <div
          className='hidden sm:flex xlc:hidden mt-6 
          w-[40rem] h-auto justify-center'
        >
          <Image
            src='/banner-2-lg.png'
            alt=''
            width={1200}
            height={550}
            draggable={false}
          />
        </div>
        <div
          className='hidden xlc:flex mt-6 
          w-[70rem] h-auto justify-center'
        >
          <Image
            src='/banner-2-lg-big.png'
            alt=''
            width={1200}
            height={550}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
