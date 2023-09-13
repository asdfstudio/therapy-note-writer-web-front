'use client';
import './custom.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

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

const patientAmountCount = [5, 10, 15, 20, 25, 30];
const hourlyChargeCount = [50, 75, 100, 150, 200];

const ThirdSection = () => {
  const [patientCount, setPatientCount] = useState(15);
  const [chargePerHour, setChargePerHour] = useState(50);
  const [value, setValue] = useState(15);
  const [valueCharge, setValueCharge] = useState(50);

  const totalHoursSaved = (((patientCount + 5) * 10) / 60).toFixed(2);
  const totalMoneySaved = (
    (((patientCount + 5) * 10) / 60) *
    (chargePerHour + 50)
  ).toFixed(0);

  const MAX = 30;
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${value * 4}% 100%`,
    };
  };

  const chargeMAX = 200;
  const getBackgroundSizeCharge = () => {
    return {
      backgroundSize: `${valueCharge * 1}% 100%`,
    };
  };

  return (
    <div
      className='mt-20 flex flex-col mb-[25rem]
      md:mb-[21rem]
      xlc:flex-row xlc:mb-[8rem] xlc:justify-center 
      xlc:mt-14'
      id='whychoose'
    >
      {/* Text Contents */}
      <div
        className='flex flex-col items-center 
        justify-center xlc:items-start xlc:ml-[4.06rem]
        xlc:justify-normal'
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
            xlc:text-left xlc:w-[29.5rem] 
            xlc:text-[3.437rem] xlc:leading-[3.78125rem]'
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
            draggable={false}
            className='absolute w-[12.25rem] h-[0.375rem] 
            top-10 left-6 z-0 sm:left-20 sm:top-14 
            sm:h-[0.5rem]'
          />
        </div>
        {/* bullet points */}
        {points.map((item, index) => {
          const isLast = 3;
          return (
            <div
              key={index}
              className='flex flex-col 
              items-center justify-center
              xlc:items-start'
            >
              {/* Point Title */}
              <div
                className='flex flex-col 
                items-center justify-center sm:flex-row 
                xlc:items-stretch'
              >
                {/* icon */}
                <div
                  className='bg-[#F4776F]
                  flex rounded-full w-[1.92rem] h-[1.92rem] 
                  items-center justify-center text-[#fff] 
                  text-[0.9rem] font-poynter_Oldstyle_Display
                  font-[400]  xlc:text-[1.125rem]
                  xlc:w-[2.4rem] xlc:h-[2.4rem]'
                >
                  {item.key}
                </div>
                {/* Text */}
                <div
                  className='font-poynter_Oldstyle_Display
                  font-[400] text-[#29375F] text-[1.65rem] 
                  text-center
                  leading-[1.815rem] w-[18.75rem] 
                  sm:w-auto sm:ml-[0.49rem] xlc:text-[2.0625rem]
                  xlc:leading-[2.26875rem] xlc:text-left
                  xlc:w-[30.375rem]'
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
                sm:w-[40rem] xlc:text-left 
                xlc:w-[34.6875rem] xlc:mb-[1.43rem]'
              >
                {item.desc}
              </div>
              {item.key != 3 && (
                <hr
                  className='w-[21.25rem] mb-[2.31rem]
                 bg-[#6F91F4] opacity-[0.3] h-[2px]
                 xlc:w-[33rem] xlc:mb-[1.1rem]'
                />
              )}
            </div>
          );
        })}
        {/* Button */}
        <Link
          href='/signup'
          className='w-[17rem] mb-[3.13rem]
          xlc:w-full'
        >
          <button
            className='flex bg-[#6F91F4] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            font-iBM_Plex_Sans tracking-[0.1rem]'
          >
            Get Started
          </button>
        </Link>
      </div>
      {/* Image & Calculator */}
      <div
        className='flex flex-col
        items-center relative xlc:ml-10'
      >
        {/* Image */}
        <div className='flex justify-center relative'>
          <Image
            src={'/sec-3-image-mobile.png'}
            alt=''
            width={1200}
            height={550}
            draggable={false}
            className='w-[23.75rem] md:hidden'
          />
          <Image
            src={'/sec-3-image-lg.png'}
            alt=''
            width={1200}
            height={550}
            draggable={false}
            className='hidden md:flex w-[36rem] 
            md:w-[43rem]
            xlc:w-[41.75rem]'
          />
        </div>

        {/* Calculator */}
        {/* <div
          className='flex justify-center 
          sm:absolute sm:w-[30rem] sm:top-[17rem] 
          xlc:w-[35rem] xlc:top-[19.5rem]'
        >
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
            className='hidden sm:flex absolute'
          />
        </div> */}

        {/* Another Calculator */}
        {/* Card */}
        <div
          className='flex flex-col items-center
          bg-[#E9EFFD] w-[22.5rem] rounded-[1.5rem]
          absolute top-[26rem]
          md:w-[35.0625rem] md:top-[20rem]
          xlc:top-[19rem]'
        >
          {/* Card Title */}
          <h3
            className='text-[#6F91F4] text-[2.25rem]
            font-[400] font-poynter_Oldstyle_Display
            leading-[2.475rem] mt-[2rem] mb-[1.31rem]
            md:text-[2.81rem] md:leading-[3.09375rem]
            md:text-left md:w-[32rem]'
          >
            Value Calculator
          </h3>
          <hr
            className='h-[2px] w-[22.375rem] 
            bg-[#6F91F4] md:w-[34.9375rem]'
          />

          <p
            className='text-[#29375F] text-[1.125rem]
            font-[600] font-iBM_Plex_Sans
            mt-[0.88rem] mb-[1.44rem]
            md:text-left md:w-[32rem]'
          >
            How many patient you see per week?
          </p>
          {/* Bar 1 */}
          <div>
            <input
              type='range'
              min='0'
              max='25'
              defaultValue='15'
              step='5'
              id='range1'
              style={getBackgroundSize()}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setPatientCount(value);
                setValue(value);
              }}
              className='w-[20rem] md:w-[32.375rem]'
            />
            <div
              className='flex w-[20rem] justify-around
              text-[#29375F] text-[1.125rem]
              font-[400] font-iBM_Plex_Sans
              md:w-[32.375rem] md:gap-14'
            >
              {patientAmountCount.map((item, index) => {
                return (
                  <p
                    className={
                      item === patientCount + 5
                        ? 'font-[700] opacity-[1]'
                        : 'opacity-[0.5]'
                    }
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>

          <p
            className='text-[#29375F] text-[1.125rem]
            font-[600] font-iBM_Plex_Sans
            mt-[2.31rem] mb-[0.94rem]
            md:text-left md:w-[32rem]'
          >
            How much do you charge per hour?
          </p>
          {/* Bar 2 */}
          <div>
            <input
              type='range'
              min='0'
              max='100'
              defaultValue='50'
              step='25'
              id='range1'
              style={getBackgroundSizeCharge()}
              onChange={(e) => {
                let value = parseInt(e.target.value);
                let value2 = parseInt(e.target.value);
                if (value === 75) {
                  value = 100;
                } else if (value === 100) {
                  value = 150;
                }
                setChargePerHour(value);
                setValueCharge(value2);
              }}
              className='w-[20rem] md:w-[32.375rem]'
            />
            <div
              className='flex w-[20rem] justify-around 
              text-[#29375F] text-[1.125rem]
              font-[400] font-iBM_Plex_Sans
              md:w-[32.375rem] md:gap-8'
            >
              {hourlyChargeCount.map((item, index) => {
                return (
                  <p
                    className={
                      item === chargePerHour + 50
                        ? 'font-[700] opacity-[1]'
                        : 'opacity-[0.5]'
                    }
                    key={index}
                  >
                    ${item}
                  </p>
                );
              })}
            </div>
          </div>

          <div className='relative mt-[1rem] md:mt-[1.5rem]'>
            <p
              className='w-[20rem] text-left
            text-[#29375F] text-[1.75rem]
              font-[400] font-poynter_Oldstyle_Display
              leading-[1.925rem]
              mt-[0.88rem] mb-[1.44rem]
              md:w-[32rem] md:text-[2.1875rem]
              md:leading-[2.40625rem]'
            >
              You’ll save{' '}
              <span className='italic'>{totalHoursSaved}hrs/week</span> which is
              worth{' '}
              <span className='italic font-[600]'>${totalMoneySaved}</span> of
              your time
            </p>
            <Image
              src={'/sec-3-title-underline.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='absolute w-[10rem] h-[0.5rem] 
              top-10 left-[7.5rem] z-0
              md:top-12 md:left-[10rem]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
