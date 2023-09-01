import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div
      className='flex flex-col items-center 
      bg-[url("/bg-home-2.svg")] h-auto
      bg-repeat-x bg-cover'
    >
      {/* Title */}
      <h2
        className='font-poynter_Oldstyle_Display
        text-[#29375F] text-[2.5rem] font-[400]
        leading-[2.75rem] mt-[2.19rem]'
      >
        Contact Us
      </h2>
      <p
        className='font-iBM_Plex_Sans
        text-[#29375F] text-[1.125rem] font-[400] 
        text-center w-[21.25rem] opacity-[0.7]'
      >
        If you have any question or inquiries, please drop us a line and we will
        get back to you
      </p>
      {/* Form */}
      <div
        className='flex flex-col items-center 
        mt-[1.5rem]'
      >
        <form className='flex flex-col'>
          <label
            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
            mb-[0.5rem]'
          >
            Your Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Adam Voigt'
            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
            pl-[1.06rem]'
          />

          <label
            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
          mt-[1.25rem] mb-[0.5rem]'
          >
            Email
          </label>
          <input
            type='text'
            name='email'
            placeholder='yourname@domain.com'
            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
            pl-[1.06rem]'
          />

          <label
            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
          >
            Phone
          </label>
          <input
            type='number'
            name='number'
            placeholder='01 12 1234'
            className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
            pl-[1.06rem]'
          />

          <label
            className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.25rem] mb-[0.5rem]'
          >
            Message
          </label>
          <textarea
            placeholder='Type your message here...'
            className='w-[21.25rem] h-[7rem] 
            rounded-[1.25rem]
            bg-[#fff] border-[1px] border-[#6f91f480]
            pl-[1.06rem]'
          />
        </form>
        <Link
          href='/'
          className='w-[21.25rem] h-[2.75rem] mt-4
              md:w-[15.8125rem]'
        >
          <button
            className='flex bg-[#6F91F4] h-full 
            w-full items-center rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            font-iBM_Plex_Sans tracking-[0.1rem]
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            '
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
