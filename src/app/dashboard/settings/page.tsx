'use client';
import SettingsHome from '@/components/SettingsHome';
import { Context } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const SettingsPage = () => {
    const { user, dispatch } = useContext(Context);
    const router = useRouter();

    return (
        <div className='flex md:justify-between'>
            {/* Logo and Menu */}
            <div
                className='fixed h-[4.75rem] w-screen bg-[#12192E] 
        font-iBM_Plex_Sans
        text-[#fff] flex justify-between
        md:w-[5.375rem] md:flex-col md:h-screen
        md:pt-[1rem] z-[2]'
            >
                {/* Menu Bar Items */}
                {/* Logo and menu bar */}
                <div
                    className='flex justify-start items-center
            ml-[1.25rem] md:hidden'
                >
                    <Link href='/dashboard'>
                        <div
                            className='w-[2.36475rem] h-[2.36475rem] 
                bg-[#6F91F4] flex items-center justify-center
                rounded-[0.5715rem] mr-[0.75rem]'
                        >
                            <Image
                                src={'/dashboard-logo-1.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[1.6945rem] h-[1.15038rem] '
                            />
                        </div>
                    </Link>
                    <Link href='/dashboard'>
                        <Image
                            src={'/dashboard-logo-2.svg'}
                            alt=''
                            width={1200}
                            height={550}
                            draggable={false}
                            className='w-[4.625rem] h-[2.45rem] '
                        />
                    </Link>
                </div>

                {/* Right side items */}
                <div
                    className='flex justify-end items-center
            mr-[1.25rem] md:flex-col-reverse
            md:gap-[1.25rem] md:mr-0'
                >
                    <Link href='/dashboard'>
                        <div
                            onClick={() => {
                                dispatch({ type: 'LOGOUT' });
                                router.push('/login');
                            }}
                            className='w-[2.75rem] h-[2.75rem] 
            border-[#6F91F4] border-[1px] flex items-center justify-center
            rounded-[6.25rem] mr-[0.5rem]'
                        >
                            <Image
                                src={'/dashboard-icon-logout.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-5'
                            />
                        </div>
                    </Link>
                    <div className='w-full flex justify-end'>
                        <Link href='/dashboard'>
                            <div
                                className='w-[2.75rem] h-[2.75rem] bg-[#6F91F4]
              border-[#6F91F4] border-[1px] flex items-center justify-center
              rounded-[6.25rem]'
                            >
                                <Image
                                    src={'/icon-arrow-left.svg'}
                                    alt=''
                                    width={1200}
                                    height={550}
                                    draggable={false}
                                    className='w-5'
                                />
                            </div>
                        </Link>
                        <span
                            className='border-r-[0.375rem] border-[#6F91F4] 
              rounded-full ml-4 hidden md:flex'
                        ></span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className='pt-[4.5rem] w-full md:pt-0 '>
                <SettingsHome />
            </div>
        </div>
    );
};

export default SettingsPage;
