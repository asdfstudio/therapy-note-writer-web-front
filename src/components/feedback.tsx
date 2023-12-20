'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
        name: 'Dr. Adam Voigt',
        subTitle: 'PhD in Mental Health',
    },
    {
        desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier.',
        name: 'Dr. Jordan Franklin',
        subTitle: 'PhD in Mental Health',
    },
    {
        desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
        name: 'Dr. Adam Voigt',
        subTitle: 'PhD in Mental Health',
    },
    {
        desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier.',
        name: 'Dr. Jordan Franklin',
        subTitle: 'PhD in Mental Health',
    },
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoChange = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        };
        const interval = setInterval(() => {
            autoChange();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className='bg-[#F0F4FF] flex flex-col items-center z-[1]'>
            {/* Title */}
            <div
                className='w-[23.6rem] mb-[3.61rem] mt-[1.81rem]
          sm:w-[29.5rem] relative'
            >
                <h2
                    className='relative font-poynter_Oldstyle_Display 
          text-[#29375F] text-[2.5rem] font-[400] 
            leading-[2.75rem] text-center justify-center z-10
            sm:text-[3.5rem] sm:leading-[3.78125rem]
            xlc:text-left'
                >
                    Real Feedback from
                    <br />
                    Real Therapists
                </h2>
                <Image
                    src={'/sec-3-title-underline.svg'}
                    alt=''
                    width={1200}
                    height={550}
                    draggable={false}
                    className='absolute w-[12.25rem] h-[0.5rem] 
            top-22 left-[9rem] z-0 sm:left-[10rem] 
            sm:h-[0.7rem] sm:w-[17rem] sm:top-[7.3rem]'
                />
            </div>
            {/* Cards */}
            <div className='flex flex-col relative items-center'>
                <Image
                    src={'/icon-double-quote.svg'}
                    alt=''
                    width={1200}
                    height={550}
                    draggable={false}
                    className='absolute w-[5.175rem] h-[3.5625rem]
          top-[-1.8rem]'
                />
                {/* Card Body */}
                <div
                    className='bg-[#fff] w-[21.25rem] h-[21.87rem]
          flex flex-col justify-center items-center
          md:w-[39.25rem] xlc:w-[50rem]'
                >
                    {/* Text Contents */}
                    <h3
                        className='w-[20rem] font-iBM_Plex_Sans 
            text-[1.375rem] font-[400] text-center mb-2
            md:w-[33.3rem] text-[#29375F]'
                    >
                        {slides[currentIndex].desc}
                    </h3>
                    {/* Stars */}
                    <Image
                        src={'/icon-stars.svg'}
                        alt=''
                        width={1200}
                        height={550}
                        draggable={false}
                        className='w-[11.875rem] mb-[0.31rem]'
                    />
                    {/* Name */}
                    <h3
                        className='font-iBM_Plex_Sans font-[700] 
            text-[1.5rem] text-[#29375F]'
                    >
                        {slides[currentIndex].name}
                    </h3>
                    {/* Sub-title */}
                    <h3
                        className='font-iBM_Plex_Sans font-[400] 
            text-[1.125rem] text-[#29375F]'
                    >
                        {slides[currentIndex].subTitle}
                    </h3>
                </div>
                {/* Arrow */}
                <div
                    className='flex justify-center mt-4 gap-2
          sm:relative'
                >
                    {/* Left Arrow */}
                    <div
                        onClick={prevSlide}
                        className='flex bg-[#3052B5] w-[2.75rem]
            h-[2.75rem] rounded-full justify-center
            border-[1px] shadow-[#3b60cb40] shadow-md
            md:absolute md:left-[-21rem] md:top-[-15rem]
            xlc:left-[-26.5rem]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
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
                        onClick={nextSlide}
                        className='flex bg-[#3052B5] w-[2.75rem]
            h-[2.75rem] rounded-full justify-center
            border-[1px] shadow-[#3b60cb40] shadow-md
            md:absolute md:right-[-21rem] md:top-[-15rem]
            xlc:right-[-26.5rem]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
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
                {/* Slider bar */}
                <div
                    className='flex mt-4 rounded-full w-[8.3125rem] 
          h-[0.75rem] bg-[#a4b8f4]'
                >
                    <hr
                        className={`w-[2.1875rem] h-[0.75rem] ${
                            currentIndex === 0
                                ? `bg-[#6F91F4] opacity-100`
                                : `opacity-0`
                        } rounded-full`}
                    />
                    <hr
                        className={`w-[2.1875rem] h-[0.75rem] ${
                            currentIndex === 1
                                ? `bg-[#6F91F4] opacity-100`
                                : `opacity-0`
                        } rounded-full`}
                    />
                    <hr
                        className={`w-[2.1875rem] h-[0.75rem] ${
                            currentIndex === 2
                                ? `bg-[#6F91F4] opacity-100`
                                : `opacity-0`
                        } rounded-full`}
                    />
                    <hr
                        className={`w-[2.1875rem] h-[0.75rem] ${
                            currentIndex === 3
                                ? `bg-[#6F91F4] opacity-100`
                                : `opacity-0`
                        } rounded-full`}
                    />
                </div>
            </div>
            {/* Button */}
            <Link href='/signup' className='w-[17rem] mt-8 mb-8'>
                <button
                    className='flex bg-[#3052B5] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            font-iBM_Plex_Sans tracking-[0.1rem]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
                >
                    Get Started
                </button>
            </Link>
        </div>
    );
};

export default Feedback;
