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
    { id: 3, title: 'Features', url: '/#features' },
];

const Navbar2 = () => {
    return (
        <div
            className='flex justify-start mt-[1.56rem] ml-[2.5rem]
       absolute z-50 xlc:justify-start xlc:ml-[2.5rem]
       xlc:mt-[2.44rem]'
        >
            <div
                className='bg-[#fff] flex fixed justify-between 
          h-[3.75rem] w-[18.5rem]
          border-[rgba(41,55,95,0.20)] border-[0.833px] 
          drop-shadow-[0_8.33px_16.66px_rgba(53,61,82,0.15)]
          rounded-[6.25rem]'
            >
                {/* Nav Items Left */}
                <div className='flex justify-start items-center'>
                    {/* Logo Items */}
                    <div
                        className='bg-[#fff] flex justify-between 
            items-center rounded-full'
                    >
                        {/* Logo Icon */}
                        <div
                            className='bg-[#29375F] w-[3.75rem] 
              h-[3.75rem] flex justify-center items-center 
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
                                className='w-[2.82rem] h-[1.80rem]
                md:w-[2.681rem] md:h-[1.82rem]'
                            />
                        </div>
                        {/* Numeric Logo */}
                        <Link
                            aria-label='therapynotewriter.com'
                            className='ml-[0.74rem] mr-[1.38rem]'
                            href='/'
                        >
                            <Image
                                src='/TherapyNoteWriter.svg'
                                alt=''
                                width={160}
                                height={20}
                                draggable={false}
                                className='w-[12.63138rem] h-[1.426rem]
                md:w-[12.68rem] md:h-[1.68rem]'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
