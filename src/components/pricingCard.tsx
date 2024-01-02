'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const PricingCard = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['1 1', '0 0'],
    });

    const pricingYProgress = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [600, 0, -850]
    );

    return (
        <div
            // id='pricing'
            className=' flex flex-col items-center h-screen relative 
            font-poynter_Oldstyle_Display bg-[url("/pricing-bg.svg")] bg-no-repeat bg-top 
            xlc:h-screen'
        >
            <motion.div
                className=' absolute top-0 flex flex-col gap-[2rem] xlc:flex-row xlc:gap-0'
                style={{
                    y: pricingYProgress,
                }}
            >
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
                            flex flex-col`}
                        >
                            <div className=' m-[2rem] '>
                                {/* Title */}
                                <p className='text-[2.815rem] text-[#242C44] font-[400]'>
                                    {item.title}
                                </p>
                                {index === 2 ? (
                                    <Image
                                        src={'/pricing-popular-ribbon.png'}
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
                                    mt-[1.31rem] mb-[2rem]'
                                />

                                {/* Price */}
                                <p className='mb-[2rem]'>
                                    <span
                                        className='text-[3.4375rem] text-[#29375F]
                                        font-[600]'
                                    >
                                        {item.amount}
                                    </span>
                                    <span
                                        className='text-[2.06rem] text-[#29375F]
                                        font-[400] italic'
                                    >
                                        /month
                                    </span>
                                </p>

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
                                        {item.point_1}
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

                                {index === 2 ? (
                                    <Link
                                        href='/'
                                        className='w-[17.25rem] h-[2.75rem] '
                                    >
                                        <button
                                            className='flex bg-[#6F91F4] h-[2.75rem] 
                                            mt-[2.63rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-white 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                                        >
                                            Get Started
                                        </button>
                                    </Link>
                                ) : (
                                    <Link
                                        href='/signup'
                                        className='w-[21.25rem] h-[2.75rem] '
                                    >
                                        <button
                                            className='flex bg-white h-[2.75rem] 
                                            mt-[2.63rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#6F91F4] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA]
                                            active:border-[#4063C7] active:bg-[#FAFAFA]'
                                        >
                                            Get Started
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default PricingCard;
