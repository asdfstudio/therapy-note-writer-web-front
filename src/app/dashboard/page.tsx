'use client';
import DashboardHome from '@/components/DashboardHome';
import DashboardNavMenu from '@/components/DashboardNavMenu';
import Menubody from '@/components/Menubody';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const DashboardPage = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [mainSummary, setMainSummary] = useState('');
    const [showSubscriptionTable, setShowSubscriptionTable] = useState(true);

    const contents = [
        {
            title: 'Free',
            amount: '$0',
            desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
            point_1: '5 notes generated per month, completely free',
            point_2: 'Simple and easy-to-use interface',
            subTitle: 'PhD in Mental Health',
        },
        {
            title: 'Basic',
            amount: '$10',
            desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier.',
            point_1: '100 notes generated per month',
            point_2: 'Suitable for therapists with a moderate caseload',
            subTitle: 'PhD in Mental Health',
        },
        {
            title: 'Premium',
            amount: '$20',
            desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
            point_1: '500 notes generated per month',
            point_2: 'Perfect for therapists with a large caseload',
            subTitle: 'PhD in Mental Health',
        },
    ];

    const handleShowMenu = () => {
        setShowMenu(true);
    };

    const handleSubscription = () => {
        setShowSubscriptionTable(false);
    };
    return (
        <div className='flex md:justify-between'>
            {/* Subscription pop-up */}
            {showSubscriptionTable ? (
                <div
                    className='absolute z-[70] bg-[rgba(0,0,0,0.50)] w-screen h-screen flex 
                items-center justify-center'
                >
                    <div
                        className=' flex flex-col items-center
                    w-[67.125rem] py-[2.81rem]
                    drop-shadow-lg bg-gradient-to-b
                    from-[#f6f7f8] to-[rgba(240,244,255,1)]'
                    >
                        {/* Title */}
                        <p
                            className='font-poynter_Oldstyle_Display font-[400]
                        text-[2.8125rem] text-[#29375F] leading-[3.09375rem]
                        mb-[1.25rem]'
                        >
                            Welcome to TherapyNoteWriter, Adam
                        </p>
                        {/* paragraph */}
                        <p
                            className='font-iBM_Plex_Sans font-[500]
                        text-[1.25rem] text-[#29375F] leading-[1.75rem]
                        mb-[2rem]'
                        >
                            Select the plan that’s right for you
                        </p>

                        {/* Pricing Card */}
                        <div className='flex'>
                            {contents.map((item: any, index: any) => {
                                return (
                                    <div
                                        key={index}
                                        className={`w-[21.25rem] h-auto ${
                                            index === 2
                                                ? 'bg-[#CAD8FB] border-[#3157C9] border-[1px]'
                                                : 'bg-[#fff]'
                                        }  
                            rounded-[1.125rem]
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)] mx-[1rem]
                            flex flex-col 
                            md:w-[40.25rem] xlc:w-[19.67rem]`}
                                    >
                                        <div className=' m-[2rem] flex flex-col'>
                                            {/* Title */}
                                            <p
                                                className='text-[2.0625rem] text-[#242C44] font-[400]
                                            font-poynter_Oldstyle_Display'
                                            >
                                                {item.title}
                                            </p>
                                            {index === 2 ? (
                                                <Image
                                                    src={
                                                        '/pricing-popular-ribbon.png'
                                                    }
                                                    alt=''
                                                    width={1200}
                                                    height={550}
                                                    draggable={false}
                                                    className='absolute w-[8.625rem] h-auto mr-[0.44rem]
                                                right-[-1.3rem] top-[2.7rem]'
                                                />
                                            ) : (
                                                ''
                                            )}

                                            <hr
                                                className=' bg-[#6F91F4] h-[2px] w-[17.25rem] 
                                    mt-[1.25rem] mb-[2rem]'
                                            />

                                            {/* Price */}
                                            <p className='mb-[2rem]'>
                                                <span
                                                    className='text-[2.81rem] text-[#29375F]
                                                font-[600 font-poynter_Oldstyle_Display]'
                                                >
                                                    {item.amount}
                                                </span>
                                                <span
                                                    className='text-[1.5rem] text-[#29375F]
                                        font-[400] italic  font-poynter_Oldstyle_Display]'
                                                >
                                                    /month
                                                </span>
                                            </p>

                                            <div className='flex items-baseline'>
                                                <Image
                                                    src={
                                                        '/icon-circle-check.svg'
                                                    }
                                                    alt=''
                                                    width={1200}
                                                    height={550}
                                                    draggable={false}
                                                    className='w-[0.875rem] h-[0.875rem] mr-[0.44rem]'
                                                />
                                                <p
                                                    className='font-iBM_Plex_Sans font-[400]
                                        leading-[1.35rem] text-[1.125rem]'
                                                >
                                                    {item.point_1}
                                                </p>
                                            </div>
                                            <div className='flex items-baseline'>
                                                <Image
                                                    src={
                                                        '/icon-circle-check.svg'
                                                    }
                                                    alt=''
                                                    width={1200}
                                                    height={550}
                                                    draggable={false}
                                                    className='w-[0.875rem] h-[0.875rem] mr-[0.44rem]'
                                                />
                                                <p
                                                    className='font-iBM_Plex_Sans font-[400]
                                        leading-[1.35rem] text-[1.125rem]'
                                                >
                                                    {item.point_2}
                                                </p>
                                            </div>

                                            {index === 2 ? (
                                                <div
                                                    className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                 self-center'
                                                    onClick={handleSubscription}
                                                >
                                                    <button
                                                        className='flex bg-[#6F91F4] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-white 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                                                    >
                                                        Select plan
                                                    </button>
                                                </div>
                                            ) : (
                                                <div
                                                    className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                                    onClick={handleSubscription}
                                                >
                                                    <button
                                                        className='flex bg-white h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#6F91F4] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA]
                                            active:border-[#4063C7] active:bg-[#FAFAFA]'
                                                    >
                                                        Select plan
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {/* Logo and Menu */}
            <div
                className='fixed h-[4.75rem] w-screen bg-[#12192E] 
        font-iBM_Plex_Sans
        text-[#fff] flex justify-between
        md:w-[23.75rem] z-[2] border-b-[1px]
        border-[rgba(111,145,244,0.40)]'
            >
                {/* Menu Bar Items */}
                {/* Logo and menu bar */}
                <div
                    className='flex justify-start items-center
          ml-[1.25rem]'
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
          mr-[1.25rem]'
                >
                    <div
                        className={`w-[2.75rem] h-[2.75rem] 
                        border-[#6F91F4] border-[1px] flex items-center justify-center
                        rounded-[6.25rem] mr-[0.5rem] md:hidden ${
                            showMenu ? 'bg-[#6F91F4]' : ''
                        }`}
                        onClick={() => {
                            !showMenu ? setShowMenu(true) : setShowMenu(false);
                        }}
                    >
                        {!showMenu ? (
                            <div>
                                <Image
                                    src={'/dashboard-icon-pen.svg'}
                                    alt=''
                                    width={1200}
                                    height={550}
                                    draggable={false}
                                    className='w-5'
                                />
                            </div>
                        ) : (
                            <Image
                                src={'/dashboard-icon-pen-white.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-5'
                            />
                        )}
                    </div>
                    <div
                        className='w-[2.75rem] h-[2.75rem] 
          border-[#6F91F4] border-[1px] flex items-center justify-center
          rounded-[6.25rem]'
                        onClick={() => {
                            !showNavMenu
                                ? setShowNavMenu(true)
                                : setShowNavMenu(false);
                        }}
                    >
                        <Image
                            src={'/dashboard-icon-user.svg'}
                            alt=''
                            width={1200}
                            height={550}
                            draggable={false}
                            className='w-5'
                        />
                    </div>
                </div>
            </div>

            {/* Menu body */}
            <div className={!showMenu ? 'hidden md:flex' : ''}>
                <Menubody setMainSummary={setMainSummary} />
            </div>

            <div
                className={
                    !showNavMenu
                        ? 'hidden'
                        : `flex fixed w-full z-20 md:w-[24.75rem] justify-end `
                }
            >
                <DashboardNavMenu />
            </div>

            {/* Body */}
            <div className='pt-[4.5rem] w-full md:pt-0 md:w-[calc(100vw-23.75rem)]'>
                <DashboardHome
                    handleShowMenu={handleShowMenu}
                    mainSummary={mainSummary}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
