import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Pricing = () => {
  return (
    <div
      className='flex flex-col items-center 
      xlc:flex-row xlc:relative'
    >
      {/* Pricing info */}
      <div
        className='flex order-1 flex-col items-center
        xlc:order-2 xlc:absolute xlc:left-[43rem]
        xlc:top-[6rem] xlc:items-start'
      >
        {/* Title */}
        <h2
          className='font-poynter_Oldstyle_Display 
          text-[#29375F] text-[2.5rem] font-[400] 
            leading-[2.75rem] mt-[3.56rem] mb-[1.25rem]
            md:text-[3.4375rem] md:leading-[3.78125rem]'
        >
          Pricing
        </h2>
        {/* Card */}
        <div
          className='flex flex-col items-center h-[17.75rem]
          w-[22.5rem] rounded-[1.125rem] border-[#F4776F]
          border-[1px] shadow-[#353d521a] shadow-md
          bg-[#fff] md:w-[37.5rem] md:h-[14.125rem]
          md:items-start xlc:w-[37.5rem] xl:w-[37.5rem]'
        >
          {/* Card Title */}
          <h3
            className='font-poynter_Oldstyle_Display 
            text-[1.875rem] font-[400] leading-[2.0625rem] 
            mt-[0.81rem] mb-[0.94rem] md:ml-[1.69rem]'
          >
            Unlimited
          </h3>
          {/* Card Text */}
          <div
            className='flex flex-col w-[18rem] 
            md:w-[25rem] md:ml-[1.69rem]'
          >
            <div className='flex items-baseline'>
              <Image
                src={'/icon-circle-check.svg'}
                alt=''
                width={1200}
                height={550}
                className='w-[0.875rem] h-[0.875rem] 
                mr-[0.44rem]'
              />
              <p
                className='font-iBM_Plex_Sans 
                leading-[1.35rem] text-[1.125rem]'
              >
                Everything TherapyNoteWriter has to offer
              </p>
            </div>
            <div className='flex items-baseline'>
              <Image
                src={'/icon-circle-check.svg'}
                alt=''
                width={1200}
                height={550}
                className='w-[0.875rem] h-[0.875rem]
                mr-[0.44rem]'
              />
              <p
                className='font-iBM_Plex_Sans font-[600]
                leading-[1.35rem] text-[1.125rem]'
              >
                Unlimited Note Generation
              </p>
            </div>
          </div>
          {/* Card Footer */}
          <div
            className='flex flex-col items-center
            bg-[#f4776f33] w-[22.5rem]
            h-[8.25rem] rounded-b-[1.125rem] mt-6
            md:w-[37.5rem] md:h-[4.75rem] md:flex-row
            md:justify-around md:mt-11
            xlc:w-[37.5rem] xl:w-[37.5rem]'
          >
            {/* Bullet points */}
            <div
              className='flex items-center justify-center
              mt-[1rem] mb-[0.69rem]'
            >
              <p
                className='font-poynter_Oldstyle_Display 
            text-[2.187rem]
            font-[400] leading-[2.40625rem] mr-[0.94rem]'
              >
                $5.99
              </p>
              <p
                className='font-iBM_Plex_Sans text-[1.125rem]
              font-[400] leading-[1.35rem] '
              >
                Per month
              </p>
            </div>
            {/* Button */}
            <Link
              href='/'
              className='w-[17rem] mt-1
              md:w-[15.8125rem]'
            >
              <button
                className='flex bg-[#F4776F] py-[12px] 
                w-full rounded-full border-[1px] 
                border-[#F4776F] uppercase text-white 
                text-[12px] font-[600] justify-center
                drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <Image
        src={'/pricing-banner-mobile.png'}
        alt=''
        width={1200}
        height={550}
        className='flex order-2 w-[23.8rem] mt-8 md:hidden'
      />
      <Image
        src={'/pricing-banner-tab.png'}
        alt=''
        width={1200}
        height={550}
        className='hidden order-2 w-[48rem] mt-8 md:flex 
        xlc:hidden'
      />
      <Image
        src={'/pricing-banner-lg.png'}
        alt=''
        width={1200}
        height={550}
        className='hidden order-2 w-[58rem] mt-8
        xlc:flex xlc:order-1 xlc:w-[45rem] xlc:ml-[3rem] 
        xl:ml-[7.38rem]'
      />
    </div>
  );
};

export default Pricing;
