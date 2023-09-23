'use client';
import Menubody from '@/components/menubody';
import SecondSection from '@/components/secondSection';
import Image from 'next/image';
import React, { useState } from 'react';

const DashboardPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=''>
      {/* Logo and Menu */}
      <div
        className='fixed h-[4.75rem] w-screen bg-[#12192E] font-iBM_Plex_Sans
        text-[#fff] flex justify-center flex-col'
      >
        {/* Menu Bar Items */}
        <div className='flex'>
          {/* Logo and menu bar */}
          <div className='flex'>
            <Image
              src={'/dashboard-logo-1.svg'}
              alt=''
              width={1200}
              height={550}
              className='w-14'
            />
            <Image
              src={'/dashboard-logo-2.svg'}
              alt=''
              width={1200}
              height={550}
              className='w-20'
            />
          </div>
          <div className='flex'>
            <div
              onClick={() => {
                !showMenu ? setShowMenu(true) : setShowMenu(false);
              }}
            >
              <Image
                src={'/dashboard-icon-pen.svg'}
                alt=''
                width={1200}
                height={550}
                className='w-10'
              />
            </div>
            <div>
              <Image
                src={'/dashboard-icon-user.svg'}
                alt=''
                width={1200}
                height={550}
                className='w-10'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Menu body */}
      <div className={!showMenu ? 'hidden' : ''}>
        <div
          className='bg-[#12192E] w-screen h-screen text-[#fff] font-iBM_Plex_Sans
          fixed flex flex-col top-[4.75rem]'
        >
          <div>
            <p className='font-[700]'>Session Description</p>
            <p className=' opacity-[0.6]'>Pronouns</p>
            <div>
              <input
                type='radio'
                value='She/Her/Hers'
                id='option_1'
                name='pronouns'
              />
              <label htmlFor='option_1'>She/Her/Hers</label>
              <input
                type='radio'
                value='He/Him/His'
                id='option_2'
                name='pronouns'
              />
              <label htmlFor='option_1'>He/Him/His</label>
              <input
                type='radio'
                value='They/Them/Theirs'
                id='option_3'
                name='pronouns'
              />
              <label htmlFor='option_1'>They/Them/Theirs</label>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className='pt-[calc(100vh-37rem)]'>
        <SecondSection />
      </div>
    </div>
  );
};

export default DashboardPage;
