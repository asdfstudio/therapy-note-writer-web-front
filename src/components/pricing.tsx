'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const Pricing = () => {
    const [screenWidth, setScreenWidth] = useState(1360);

    useEffect(() => {
        const getScreenWidth = () => {
            setScreenWidth(window.screen.availWidth);
        };
        getScreenWidth();
    }, [screenWidth]);

    const titleRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['1 1', '0 0'],
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const opacityProgressMobile = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [0.1, 1, 1]
    );
    const YProgress = useTransform(scrollYProgress, [0, 1], [-60, 120]);
    const YProgressMobile = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-160, 20, 100]
    );
    const bgYProgress = useTransform(scrollYProgress, [0, 1], [500, 140]);
    const bgBlurProgress = useTransform(
        scrollYProgress,
        [0, 0.8, 1],
        ['blur(0)', 'blur(0)', 'blur(5px)']
    );

    const pricingYProgress = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        [600, 600, 250]
    );
    const pricingYProgressMobile = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [600, 600, -850]
    );

    return (
        <div
            id='pricing'
            className=' flex flex-col items-center h-screen relative  
            font-poynter_Oldstyle_Display bg-[url("/pricing-bg.svg")] bg-no-repeat bg-top 
            xlc:h-screen'
        >
            {/* Title */}
            <motion.div
                className=' z-0 '
                ref={titleRef}
                style={{
                    opacity:
                        screenWidth >= 1360
                            ? opacityProgress
                            : opacityProgressMobile,
                    y: screenWidth >= 1360 ? YProgress : YProgressMobile,
                }}
            >
                <h1
                    className='text-[2.5rem] text-[#29375F] leading-[2.75rem] 
                    w-[21rem] text-center mt-[2rem] mb-[4rem]
                    md:text-[3.4375rem] md:w-[32.59rem] md:leading-[3.78rem] xlc:w-screen xlc:mt-0 xlc:mb-0'
                >
                    <span className='font-poynter_Oldstyle_Display font-[400]'>
                        Our pricing is simple with{' '}
                        <span
                            className='italic font-[600] 
                            bg-[url("/login-underline-1.svg")] 
                            bg-contain bg-no-repeat bg-[center_top_2.5rem] md:bg-[center_top_3.5rem]  '
                        >
                            no hidden fees!
                        </span>
                    </span>
                </h1>
            </motion.div>

            <motion.div
                style={{
                    y: bgYProgress,
                    filter: bgBlurProgress,
                }}
            >
                <Image
                    src={'/pricing-banner-lg.png'}
                    alt=''
                    width={700}
                    height={320}
                    draggable={false}
                    className='hidden xlc:flex z-0'
                />
                <Image
                    src={'/pricing-banner-mobile.png'}
                    alt=''
                    width={700}
                    height={320}
                    draggable={false}
                    className=' xlc:hidden z-0'
                />
            </motion.div>
            <motion.div
                className=' absolute top-0 flex flex-col gap-[2rem] xlc:flex-row xlc:gap-0'
                style={{
                    y:
                        screenWidth >= 1360
                            ? pricingYProgress
                            : pricingYProgressMobile,
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
                            flex flex-col 
                            md:w-[40.25rem] xlc:w-[21.25rem]`}
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
                                        leading-[1.35rem] text-[1.125rem]
                                        text-[#29375F]'
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
                                        leading-[1.35rem] text-[1.125rem]
                                        text-[#29375F]'
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
                                            className='flex bg-[#3052B5] h-[2.75rem] 
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
                                            border-[#3157C9] uppercase text-[#3052B5] 
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

export default Pricing;
