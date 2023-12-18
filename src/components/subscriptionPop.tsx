'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '@/context/Context';
import axios from 'axios';

const contents = [
    {
        title: 'Free',
        amount: '$0',
        desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
        point_1_part_1: '5 notes generated ',
        point_1_part_2: 'per month, completely free',
        point_2: 'Simple and easy-to-use interface',
        subTitle: 'PhD in Mental Health',
    },
    {
        title: 'Basic',
        amount: '$10',
        desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier.',
        point_1_part_1: '100 notes generated ',
        point_1_part_2: 'per month',
        point_2: 'Suitable for therapists with a moderate caseload',
        subTitle: 'PhD in Mental Health',
    },
    {
        title: 'Premium',
        amount: '$20',
        desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
        point_1_part_1: '500 notes generated ',
        point_1_part_2: 'per month',
        point_2: 'Perfect for therapists with a large caseload',
        subTitle: 'PhD in Mental Health',
    },
];

const SubscriptionPop = ({
    setShowSubscriptionTable,
    disabledIndex,
    username,
    title,
    subTitle,
    subReason,
}: {
    setShowSubscriptionTable: any;
    disabledIndex: any;
    username: any;
    title: any;
    subTitle: any;
    subReason: any;
}) => {
    const { user } = useContext<any>(Context);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const stripePriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const userID = user && user.user._id;
    // const clickLimit = user && user.user.clickLimit;

    const nextCard = () => {
        if (activeCardIndex === contents.length - 1) {
            setActiveCardIndex(0);
        } else {
            setActiveCardIndex(activeCardIndex + 1);
        }
    };

    const prevCard = () => {
        if (activeCardIndex === 0) {
            setActiveCardIndex(contents.length - 1);
        } else {
            setActiveCardIndex(activeCardIndex - 1);
        }
    };

    const handleSubscription = async (subType: any, clickLimit: any) => {
        // priceId, sub, userID, clickLimit

        try {
            const subscriptionData = await axios
                .post(`${baseURL}/api/stripe/checkout`, {
                    sub: subType,
                    priceId: stripePriceId,
                    userID: userID,
                    clickLimit: clickLimit,
                })
                .then((data) => {
                    if (data.data.success === true) {
                        setShowSubscriptionTable(false);
                    }
                    if (data.data.success === 2) {
                        // setShowSubscriptionTable(false);
                        const body = data.data.url;
                        window.location.href = body;
                    }
                });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    return (
        <div
            className='absolute z-[70] bg-[rgba(0,0,0,0.50)] w-screen h-screen flex 
                items-center justify-center'
        >
            <div
                className=' flex flex-col items-center
                    w-[22.75rem] md:w-[45rem] xlc:w-[67.125rem] 
                    py-[2.81rem] drop-shadow-lg bg-gradient-to-b
                    from-[#f6f7f8] to-[rgba(240,244,255,1)]'
            >
                {/* Close icon */}
                <span
                    onClick={() => {
                        setShowSubscriptionTable(false);
                    }}
                    className={`absolute right-[2rem] md:right-[3.38rem] 
                    top-[2rem] 
                    ${
                        subReason === 'upgrade' ? 'block' : 'hidden'
                    } cursor-pointer`}
                >
                    <Image
                        src={'/icon-close-color.svg'}
                        alt=''
                        width={1200}
                        height={550}
                        className={`w-[1.375rem]  `}
                    />
                </span>
                {/* Title */}
                <p
                    className={`font-poynter_Oldstyle_Display font-[400]
                    text-[2.25rem] md:text-[2.8125rem] text-[#29375F] 
                    leading-[3.09375rem]  mt-[1rem] md:mt-0
                    mb-[1.25rem] mx-[2.81rem] w-[19.75rem] md:w-[39rem]
                    xlc:w-[60rem]  ${
                        subReason === 'upgrade'
                            ? 'text-center md:text-left xlc:text-center self-start'
                            : 'text-center md:text-left xlc:text-center self-center'
                    } `}
                >
                    <span className='hidden xlc:flex'>
                        {title}, {username}
                    </span>
                    <span className='flex xlc:hidden'>{title}</span>
                </p>
                {/* paragraph */}
                <p
                    className='font-iBM_Plex_Sans font-[500]
                    text-[1rem] md:text-[1.25rem] 
                    text-[rgba(41,55,95,0.70)] 
                    text-center md:text-left
                    leading-[1.75rem]
                    mb-[2rem] mx-[2.81rem] w-[19.75rem] md:w-[39rem]
                    xlc:w-[60rem]'
                >
                    {subTitle}
                </p>

                {/* Pricing Card */}
                <div className='hidden xlc:flex'>
                    {contents.map((item: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className={`w-[21.25rem] h-auto bg-[#fff]
                            rounded-[1.125rem]
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)] mx-[1rem]
                            flex flex-col 
                            md:w-[40.25rem] xlc:w-[19.67rem]
                            `}
                            >
                                <div className=' m-[2rem] flex flex-col'>
                                    {/* Title */}
                                    <p
                                        className='text-[2.0625rem] text-[#242C44] font-[400]
                                            font-poynter_Oldstyle_Display'
                                    >
                                        {item.title}
                                    </p>
                                    {/* premium ribbon */}
                                    {index === 2 ? (
                                        <Image
                                            src={'/pricing-popular-ribbon.png'}
                                            alt=''
                                            width={1200}
                                            height={550}
                                            draggable={false}
                                            className='absolute w-[8.625rem] h-auto mr-[0.44rem]
                                                right-[-1.3rem] top-[2.2rem]'
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
                                                font-[600] font-poynter_Oldstyle_Display'
                                        >
                                            {item.amount}
                                        </span>
                                        <span
                                            className='text-[1.5rem] text-[#29375F]
                                        font-[400] italic  font-poynter_Oldstyle_Display'
                                        >
                                            /month
                                        </span>
                                    </p>

                                    {/* Description */}

                                    <div className='flex items-baseline'>
                                        <Image
                                            src={'/icon-circle-check.svg'}
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
                                            <span className='font-[700]'>
                                                {item.point_1_part_1}
                                            </span>
                                            {item.point_1_part_2}
                                        </p>
                                    </div>
                                    <div className='flex items-baseline'>
                                        <Image
                                            src={'/icon-circle-check.svg'}
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

                                    <div
                                        className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                        onClick={() => {
                                            // priceId, sub, userID, clickLimit
                                            let sub = 'FREE';
                                            let clickLimit = 5;
                                            if (index === 1) {
                                                sub = 'BASIC';
                                                clickLimit = 100;
                                            } else if (index === 2) {
                                                sub = 'PREMIUM';
                                                clickLimit = 500;
                                            }

                                            handleSubscription(sub, clickLimit);
                                        }}
                                    >
                                        <button
                                            disabled={
                                                index <= disabledIndex
                                                    ? true
                                                    : false
                                            }
                                            className='flex bg-[#3052B5] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#fff] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-white hover:text-[#3052B5]
                                            active:bg-white active:text-[#3052B5]
                                            disabled:bg-white disabled:text-[#9e9d9d] 
                                            disabled:cursor-not-allowed'
                                        >
                                            Select plan
                                        </button>
                                    </div>

                                    {/* {index === 2 ? (
                                        <div
                                            className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                 self-center'
                                            onClick={() => {
                                                // priceId, sub, userID, clickLimit
                                                let sub = 'FREE';
                                                let clickLimit = 5;
                                                if (index === 1) {
                                                    sub = 'BASIC';
                                                    clickLimit = 100;
                                                } else if (index === 2) {
                                                    sub = 'PREMIUM';
                                                    clickLimit = 500;
                                                }

                                                handleSubscription(
                                                    sub,
                                                    clickLimit
                                                );
                                            }}
                                        >
                                            <button
                                                disabled={
                                                    disabledIndex === index
                                                        ? true
                                                        : false
                                                }
                                                className='flex bg-[#6F91F4] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-white 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-[#4771ED] active:bg-[#4063C7]
                                             disabled:bg-[#dad9d9]'
                                            >
                                                Select plan
                                            </button>
                                        </div>
                                    ) : (
                                        <div
                                            className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                            onClick={() => {
                                                // priceId, sub, userID, clickLimit
                                                let sub = 'FREE';
                                                let clickLimit = 5;
                                                if (index === 1) {
                                                    sub = 'BASIC';
                                                    clickLimit = 100;
                                                } else if (index === 2) {
                                                    sub = 'PREMIUM';
                                                    clickLimit = 500;
                                                }

                                                handleSubscription(
                                                    sub,
                                                    clickLimit
                                                );
                                            }}
                                        >
                                            <button
                                                disabled={
                                                    index === disabledIndex
                                                        ? true
                                                        : false
                                                }
                                                className='flex bg-white h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#6F91F4] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA]
                                            active:border-[#4063C7] active:bg-[#FAFAFA]
                                            disabled:bg-[#dad9d9] disabled:cursor-not-allowed'
                                            >
                                                Select plan
                                            </button>
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pricing Card Slide for tab and mobile */}
                <div className='flex  xlc:hidden'>
                    {contents.map((item: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className={`w-[18rem] h-auto bg-[#fff]
                            rounded-[1.125rem]
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)] mx-[1rem]
                            flex flex-col 
                            md:w-[20.375rem] xlc:w-[19.67rem]
                            ${index !== activeCardIndex ? 'hidden' : ''}`}
                            >
                                <div className=' m-[2rem] flex flex-col'>
                                    {/* Title */}
                                    <p
                                        className='text-[2.0625rem] text-[#242C44] font-[400]
                                            font-poynter_Oldstyle_Display'
                                    >
                                        {item.title}
                                    </p>
                                    {/* premium ribbon */}
                                    {index === 2 ? (
                                        <Image
                                            src={'/pricing-popular-ribbon.png'}
                                            alt=''
                                            width={1200}
                                            height={550}
                                            draggable={false}
                                            className='absolute w-[8.625rem] h-auto mr-[0.44rem]
                                                right-[-1.3rem] top-[2.2rem]'
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
                                                font-[600] font-poynter_Oldstyle_Display'
                                        >
                                            {item.amount}
                                        </span>
                                        <span
                                            className='text-[1.5rem] text-[#29375F]
                                        font-[400] italic  font-poynter_Oldstyle_Display'
                                        >
                                            /month
                                        </span>
                                    </p>

                                    {/* Description */}

                                    <div className='flex items-baseline'>
                                        <Image
                                            src={'/icon-circle-check.svg'}
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
                                            <span className='font-[700]'>
                                                {item.point_1_part_1}
                                            </span>
                                            {item.point_1_part_2}
                                        </p>
                                    </div>
                                    <div className='flex items-baseline'>
                                        <Image
                                            src={'/icon-circle-check.svg'}
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

                                    <div
                                        className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                        onClick={() => {
                                            // priceId, sub, userID, clickLimit
                                            let sub = 'FREE';
                                            let clickLimit = 5;
                                            if (index === 1) {
                                                sub = 'BASIC';
                                                clickLimit = 100;
                                            } else if (index === 2) {
                                                sub = 'PREMIUM';
                                                clickLimit = 500;
                                            }

                                            handleSubscription(sub, clickLimit);
                                        }}
                                    >
                                        <button
                                            disabled={
                                                index <= disabledIndex
                                                    ? true
                                                    : false
                                            }
                                            className='flex bg-[#3052B5] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#fff] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-white hover:text-[#3052B5]
                                            active:bg-white active:text-[#3052B5]
                                            disabled:bg-white disabled:text-[#9e9d9d] 
                                            disabled:cursor-not-allowed'
                                        >
                                            Select plan
                                        </button>
                                    </div>

                                    {/* {index === 2 ? (
                                        <div
                                            className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                 self-center'
                                            onClick={() => {
                                                // priceId, sub, userID, clickLimit
                                                let sub = 'FREE';
                                                let clickLimit = 5;
                                                if (index === 1) {
                                                    sub = 'BASIC';
                                                    clickLimit = 100;
                                                } else if (index === 2) {
                                                    sub = 'PREMIUM';
                                                    clickLimit = 500;
                                                }

                                                handleSubscription(
                                                    sub,
                                                    clickLimit
                                                );
                                            }}
                                        >
                                            <button
                                                disabled={
                                                    disabledIndex === index
                                                        ? true
                                                        : false
                                                }
                                                className='flex bg-[#6F91F4] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-white 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-[#4771ED] active:bg-[#4063C7]
                                             disabled:bg-[#dad9d9]'
                                            >
                                                Select plan
                                            </button>
                                        </div>
                                    ) : (
                                        <div
                                            className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                            onClick={() => {
                                                // priceId, sub, userID, clickLimit
                                                let sub = 'FREE';
                                                let clickLimit = 5;
                                                if (index === 1) {
                                                    sub = 'BASIC';
                                                    clickLimit = 100;
                                                } else if (index === 2) {
                                                    sub = 'PREMIUM';
                                                    clickLimit = 500;
                                                }

                                                handleSubscription(
                                                    sub,
                                                    clickLimit
                                                );
                                            }}
                                        >
                                            <button
                                                disabled={
                                                    index === disabledIndex
                                                        ? true
                                                        : false
                                                }
                                                className='flex bg-white h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#6F91F4] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA]
                                            active:border-[#4063C7] active:bg-[#FAFAFA]
                                            disabled:bg-[#dad9d9] disabled:cursor-not-allowed'
                                            >
                                                Select plan
                                            </button>
                                        </div>
                                    )} */}
                                </div>

                                {/* Left Arrow */}
                                <div
                                    onClick={prevCard}
                                    className='flex bg-[#6F91F4] w-[2.75rem]
                                    h-[2.75rem] rounded-full justify-center
                                    border-[1px] shadow-[#3b60cb40] shadow-md
                                    hover:bg-[#4771ED] active:bg-[#4063C7]
                                    cursor-pointer absolute top-[40%] left-[-8%]'
                                >
                                    <Image
                                        src={'/icon-arrow-left.svg'}
                                        alt=''
                                        width={1200}
                                        height={550}
                                        draggable={false}
                                        className='w-[1rem]'
                                    />
                                </div>
                                {/* Right Arrow */}
                                <div
                                    onClick={nextCard}
                                    className='flex bg-[#6F91F4] w-[2.75rem]
                                    h-[2.75rem] rounded-full justify-center
                                    border-[1px] shadow-[#3b60cb40] shadow-md
                                    hover:bg-[#4771ED] active:bg-[#4063C7]
                                    cursor-pointer absolute top-[40%] right-[-8%]'
                                >
                                    <Image
                                        src={'/icon-arrow-right-2.svg'}
                                        alt=''
                                        width={1200}
                                        height={550}
                                        draggable={false}
                                        className='w-[1rem]'
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPop;
