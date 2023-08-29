import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const points = [
  {
    key: 1,
    title: 'Save valuable time',
    desc: 'Spend less time on notes and more time with patients. Let TherapynoteWriter take care of the paperwork so you can spend time on what truly matters – delivering exceptional care to your clients.',
  },
  {
    key: 2,
    title: 'Reduce documentation stress',
    desc: 'Notes hanging over your head? Say goodbye to the anxiety of keeping up with paperwork. With TherapynoteWriter, progress note writing becomes an efficient, worry-free process.',
  },
  {
    key: 3,
    title: 'Easy, fast, and works on any device',
    desc: 'TherapynoteWriter is designed with ease of use in mind, offering a fast, intuitive user interface that can be accessed on any device.',
  },
];

const ThirdSection = () => {
  return (
    <div
      className='mt-20 flex flex-col mb-[24rem] 
      lg:flex-row lg:mb-0'
    >
      {/* Text Contents */}
      <div
        className='flex flex-col items-center 
        justify-center lg:items-start lg:ml-[6rem]'
      >
        {/* Title */}
        <div
          className='w-[23.6rem] relative mb-[2.31rem]
          sm:w-[29.5rem]'
        >
          <h2
            className='relative font-poynter_Oldstyle_Display 
          text-[#29375F] text-[2.5rem] font-[400] 
            leading-[2.75rem] text-center justify-center z-10
            sm:text-[3.5rem] sm:leading-[3.78125rem]
            lg:text-left'
          >
            Why <span className='italic'>choose</span>
            <br />
            TherapyNoteWriter
          </h2>
          <Image
            src={'/sec-3-title-underline.svg'}
            alt=''
            width={1200}
            height={550}
            className='absolute w-[12.25rem] h-[0.375rem] 
            top-10 left-6 z-0 sm:left-20 sm:top-14 
            sm:h-[0.5rem]'
          />
        </div>
        {/* bullet points */}
        {points.map((item) => {
          const isLast = 3;
          return (
            <div
              key={item.key}
              className='flex flex-col 
              items-center justify-center
              lg:items-start'
            >
              {/* Point Title */}
              <div
                className='flex flex-col 
                items-center justify-center sm:flex-row 
                lg:items-stretch'
              >
                {/* icon */}
                <div
                  className='bg-[#F4776F]
                  flex rounded-full w-[1.92rem] h-[1.92rem] 
                  items-center justify-center text-[#fff] 
                  text-[0.9rem] font-poynter_Oldstyle_Display
                  font-[400] mb-2 lg:text-[1.125rem]
                  lg:w-[2.4rem] lg:h-[2.4rem]'
                >
                  {item.key}
                </div>
                {/* Text */}
                <div
                  className='font-poynter_Oldstyle_Display
                  font-[400] text-[#29375F] text-[1.65rem] 
                  text-center
                  leading-[1.815rem] w-[18.75rem] 
                  sm:w-auto sm:ml-[0.49rem] lg:text-[2.0625rem]
                  lg:leading-[2.26875rem] lg:text-left'
                >
                  {item.title}
                </div>
              </div>
              {/* Description */}
              <div
                className='w-[20rem] mt-2 mb-[2.31rem]
                text-center
                text-[#29375F] text-[1.125rem]
                font-iBM_Plex_Sans opacity-[0.7] font-[400] 
                sm:w-[40rem] lg:text-left lg:w-[33rem]'
              >
                {item.desc}
              </div>
              {item.key != 3 && (
                <hr
                  className='w-[21.25rem] mb-[2.31rem]
                 bg-[#6F91F4] opacity-[0.3] h-[2px]
                 lg:w-[33rem]'
                />
              )}
            </div>
          );
        })}
        {/* Button */}
        <Link
          href='/'
          className='w-[17rem] mb-[3.13rem]
          lg:w-full'
        >
          <button
            className='flex bg-[#6F91F4] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[12px] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            Get Started
          </button>
        </Link>
      </div>
      {/* Image & Calculator */}
      <div
        className='flex flex-col justify-center
        items-center relative lg:ml-10'
      >
        {/* Image */}
        <div className='flex justify-center relative'>
          <Image
            src={'/sec-3-image-mobile.png'}
            alt=''
            width={1200}
            height={550}
            className='w-[23.7rem] sm:hidden'
          />
          <Image
            src={'/sec-3-image-lg.png'}
            alt=''
            width={1200}
            height={550}
            className='hidden sm:flex w-[36rem] 
            lg:w-[41.75rem]'
          />
        </div>
        {/* Calculator */}
        <Image
          src={'/sec-3-value-calc-mobile.png'}
          alt=''
          width={1200}
          height={550}
          className='absolute w-[22rem] top-[26rem] 
          sm:hidden'
        />
        <Image
          src={'/sec-3-value-calc-tablet.png'}
          alt=''
          width={1200}
          height={550}
          className='hidden absolute w-[30rem] top-[17rem] 
          sm:flex lg:w-[20rem] lg:top-[29rem]'
        />
      </div>
    </div>
  );
};

export default ThirdSection;
