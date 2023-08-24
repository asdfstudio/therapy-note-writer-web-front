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
      <div className='flex flex-col items-center min-h-screen w-full'>
        <div className='flex md:hidden'>
          <Image
            src='/banner-text-1-mobile.svg'
            alt=''
            height={100}
            width={330}
          />
        </div>
        <div className='flex md:hidden'>
          <Image
            src='/banner-text-2-mobile.svg'
            alt=''
            height={100}
            width={330}
          />
        </div>
        <div className='hidden md:flex'>
          <Image src='/banner-text-lg.svg' alt='' height={100} width={500} />
        </div>
        <div className='flex flex-col sm:flex-row gap-3 mt-5 items-center'>
          <Link href='/' className='w-[20rem] sm:w-[10rem]'>
            <button
              className='flex bg-[#6F91F4] py-[10px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[10px] text-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
            >
              Get Started
            </button>
          </Link>
          <Link href='/' className='w-[20rem] sm:w-[10rem]'>
            <button
              className='flex bg-white py-[10px] 
            w-full  rounded-full border-[1px] 
            border-[#3157C9] uppercase text-[10px] 
            text-[600] justify-center'
            >
              How It Works
            </button>
          </Link>
        </div>
        <div className='flex sm:hidden mt-8'>
          <Image src='/banner-2-mobile.png' alt='' width={380} height={100} />
        </div>
        <div className='hidden sm:flex md:hidden mt-6'>
          <Image src='/banner-2-lg.png' alt='' width={600} height={100} />
        </div>
        <div className='hidden md:flex mt-6'>
          <Image src='/banner-2-lg.png' alt='' width={800} height={100} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
