import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const links = [
    { id: 1, title: 'How it works', url: '/' },
    { id: 2, title: 'Why choose', url: '/whychoose' },
    { id: 3, title: 'Features', url: '/feautures' },
    { id: 4, title: 'Pricing', url: '/pricing' },
];

const Footer = () => {
    return (
        <div
            className='flex flex-col items-center
      bg-[#F0F4FF]'
        >
            {/* Nav Links */}
            <div
                className='flex flex-col items-center 
        gap-[1.56rem] mt-[3rem] mb-[1.88rem]
        md:flex-row md:mt-[6.38rem]'
            >
                {links.map((item, index) => {
                    return (
                        <Link
                            className='font-iBM_Plex_Sans font-[600]
               tracking-[0.1rem] uppercase text-[1rem]
               text-[#29375F]'
                            key={index}
                            href={item.url}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>

            {/* Button */}
            <Link href='/signup' className='w-[13.75rem] h-[2.75rem]'>
                <button
                    className='flex bg-[#3052B5] 
            w-full h-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[1rem] font-[600] items-center 
            justify-center font-iBM_Plex_Sans 
            tracking-[0.1rem]
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
                >
                    Get Started
                </button>
            </Link>

            <hr
                className='w-[22.5rem] h-[2px] mt-[1.88rem] 
        mb-[2.31rem]
        bg-[rgba(111,145,244,0.24)]
        md:w-[43rem]
        xlc:w-[76rem]'
            />

            {/* Logo Items */}
            <div className='flex items-center'>
                {/* Logo Icon */}
                <div
                    className='flex justify-center items-center
          bg-[#29375F] w-[4.112rem] h-[4.112rem]  
          rounded-[0.99rem]
          drop-shadow-[0_0.416px_8.437px_rgba(6,5,20,0.3)]
          md:h-[6.25rem] md:w-[6.25rem]'
                >
                    <Image
                        src='/logo-1.svg'
                        alt=''
                        width={40}
                        height={40}
                        draggable={false}
                        className='w-[2.94rem] h-[2rem]
                md:w-[4.48rem] md:h-[3.04rem]'
                    />
                </div>
                {/* Numeric Logo */}
                <Link
                    aria-label='therapynotewriter.com'
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
                        className='w-[13.88rem] h-[1.561rem]
                md:w-[21.05rem] md:h-[2.376rem]'
                    />
                </Link>
            </div>

            <hr
                className='w-[22.5rem] h-[2px] mt-[1.88rem] 
        mb-[1.88rem]
        bg-[rgba(111,145,244,0.24)]
        md:w-[43rem]
        xlc:w-[76rem]'
            />

            {/* Copyright */}
            <p
                className='text-[#29375F] font-iBM_Plex_Sans
        text-[1.125rem] font-[600] leadding-[1.35rem]
        mb-[2.71rem] md:mb-[4.87rem]'
            >
                &copy; TherapyNoteWriter LLC 2023
            </p>
        </div>
    );
};

export default Footer;
