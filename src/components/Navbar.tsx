import Link from 'next/link';
import React, { useState } from 'react';
import Menu from '@/components/Menu';
import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';

const iBM_Plex_Sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: '600',
});

const links = [
    { id: 1, title: 'How it works', url: '/#how_it_works' },
    { id: 2, title: 'Why choose', url: '/#whychoose' },
    { id: 3, title: 'Pricing', url: '/#pricing' },
];

const Navbar = () => {
    return (
        <div
            className='flex justify-center mt-[1.81rem] 
      relative z-50'
        >
            <div
                className='bg-[#fff] flex fixed justify-between 
          h-[3.125rem] w-[21.25rem] 
          border-[rgba(41,55,95,0.20)] border-[0.833px] 
          drop-shadow-[0_8.33px_16.66px_rgba(53,61,82,0.15)]
          rounded-[5.208rem]
          md:w-[44.25rem] md:h-[3.75rem]
          xlc:w-[80rem] xl1440:w-[85rem] 2xl:w-[89rem]'
            >
                {/* Nav Items Left */}
                <div className='flex justify-start items-center'>
                    {/* Logo Items */}
                    <div
                        className='bg-[#6F91F421] flex justify-between 
            items-center rounded-full'
                    >
                        {/* Logo Icon */}
                        <div
                            className='bg-[#29375F] w-[3.125rem] 
              h-[3.125rem] flex justify-center items-center 
              rounded-full z-0
              drop-shadow-[0_0.416px_8.437px_rgba(6,5,20,0.3)]
              md:h-[3.75rem] md:w-[3.75rem]'
                        >
                            <Image
                                src='/logo-1.svg'
                                alt=''
                                width={40}
                                height={40}
                                draggable={false}
                                className='w-[2.23rem] h-[1.51rem]
                md:w-[2.681rem] md:h-[1.82rem]'
                            />
                        </div>
                        {/* Numeric Logo */}
                        <Link
                            className='ml-2 mr-2 md:mr-[1.31rem] 
              xlc:mr-4'
                            href='/'
                        >
                            <Image
                                src='/TherapyNoteWriter.svg'
                                alt=''
                                width={160}
                                height={20}
                                draggable={false}
                                className='w-[10.526rem] h-[1.188rem]
                md:w-[12.68rem] md:h-[1.68rem]'
                            />
                        </Link>
                    </div>

                    {/* Nav Items for Desktop */}
                    <div
                        className='hidden xlc:flex gap-[2.5rem] 
            xlc:ml-[1.81rem]  focus-within:text-[#6F91F4]
            text-[#29375F] font-[600] uppercase 
            text-[1rem] tracking-widest scroll-smooth'
                    >
                        {links.map((item) => (
                            <Link
                                className='font-iBM_Plex_Sans hover:underline 
                hover:underline-offset-[1.3rem] 
                hover:decoration-[0.1875rem]
                focus:underline 
                focus:underline-offset-[1.3rem] 
                focus:decoration-[0.1875rem]
                focus:text-[#29375F]'
                                key={item.id}
                                href={item.url}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Nav Items Right */}
                <div className='flex justify-end items-center gap-2'>
                    {/* Signup Button */}
                    <div className=''>
                        <Link
                            href='/signup'
                            className='hidden md:flex bg-[#3052B5] 
              md:w-[9.375rem] md:h-[2.75rem]  
              xlc:w-[13.75rem] xlc:h-[2.75rem] rounded-full 
              border-[1px] border-[#3157C9] text-white 
              text-[1rem] font-[600] justify-center 
              items-center
              drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
              font-iBM_Plex_Sans
              hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            <button
                                className='uppercase 
                tracking-[0.1rem]'
                            >
                                Sign up
                            </button>
                        </Link>
                    </div>
                    {/* Login Button */}
                    <Link
                        href='/login'
                        className='hidden md:flex bg-white 
              md:w-[9.375rem] md:h-[2.75rem] 
              xlc:w-[13.75rem] xlc:h-[2.75rem] rounded-full 
              border-[1px] border-[#3157C9] text-[1rem] 
              font-[600] text-[#3052B5] mr-[0.5rem] 
              justify-center items-center
              drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
              font-iBM_Plex_Sans 
              hover:border-[#4771ED] hover:bg-[#FAFAFA]
              active:border-[#4063C7] active:bg-[#FAFAFA]'
                    >
                        <button
                            className='uppercase 
                tracking-[0.1rem]'
                        >
                            Login
                        </button>
                    </Link>
                    {/* Hamburger Icon */}
                    <div className='flex xlc:hidden'>
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
