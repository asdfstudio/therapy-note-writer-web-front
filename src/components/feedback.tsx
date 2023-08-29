import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const feedbacks = [
  {
    key: 1,
    desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
    name: 'Dr. Adam Voigt',
    subTitle: 'PhD in Mental Health',
  },
  {
    key: 1,
    desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier',
    name: 'Dr. Jordan Franklin',
    subTitle: 'PhD in Mental Health',
  },
];

const Feedback = () => {
  return (
    <div className='bg-[#F0F4FF] flex flex-col items-center'>
      {/* Title */}
      <div
        className='w-[23.6rem] mb-[2.31rem] mt-[1.81rem]
          sm:w-[29.5rem]'
      >
        <h2
          className='relative font-poynter_Oldstyle_Display 
          text-[#29375F] text-[2.5rem] font-[400] 
            leading-[2.75rem] text-center justify-center z-10
            sm:text-[3.5rem] sm:leading-[3.78125rem]
            lg:text-left'
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
          className='absolute w-[12.25rem] h-[0.5rem] 
            top-22 left-[9rem] z-0 sm:left-20 sm:top-14 
            sm:h-[0.5rem]'
        />
      </div>
      {/* Cards */}
      <div>
        {/* Card Body */}
        <div className='bg-[#fff] w-[21.25rem] h-[21.87rem]'>
          {/* Left Arrow */}
          <Image
            src={'/'}
            alt=''
            width={1200}
            height={550}
            className='hidden'
          />
          {/* Text Contents */}
          {feedbacks.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.desc}</h3>
                {/* Stars */}
                <div>
                  <Image
                    src={'/icon-stars.svg'}
                    alt=''
                    width={1200}
                    height={550}
                    className='w-[11.875rem]'
                  />
                </div>
                {/* Name */}
                <h3></h3>
                {/* Sub-title */}
                {/* h3
                 */}
              </div>
            );
          })}
          {/* Right Arrow */}
          <Image
            src={'/'}
            alt=''
            width={1200}
            height={550}
            className='hidden'
          />
        </div>
        {/* Slider pointer */}
        <div></div>
      </div>
      {/* Button */}
      <Link href='/' className='w-[17rem] mt-10'>
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
  );
};

export default Feedback;
