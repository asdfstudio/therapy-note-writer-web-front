'use client';
import DashboardHome from '@/components/DashboardHome';
import Menubody from '@/components/Menubody';
import Image from 'next/image';
import React, { useState } from 'react';

const DashboardPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex md:justify-between'>
      {/* Logo and Menu */}
      <div
        className='fixed h-[4.75rem] w-screen bg-[#12192E] 
        font-iBM_Plex_Sans
        text-[#fff] flex justify-between
        md:w-[20.125rem]'
      >
        {/* Menu Bar Items */}
        {/* Logo and menu bar */}
        <div
          className='flex justify-start items-center
          ml-[1.25rem]'
        >
          <div
            className='w-[2.36475rem] h-[2.36475rem] 
              bg-[#6F91F4] flex items-center justify-center
              rounded-[0.5715rem] mr-[0.75rem]'
          >
            <Image
              src={'/dashboard-logo-1.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='w-[1.6945rem] h-[1.15038rem] '
            />
          </div>
          <Image
            src={'/dashboard-logo-2.svg'}
            alt=''
            width={1200}
            height={550}
            draggable={false}
            className='w-[4.625rem] h-[2.45rem] '
          />
        </div>
        <div
          className='flex justify-end items-center
          mr-[1.25rem]'
        >
          <div
            className='w-[2.75rem] h-[2.75rem] 
          border-[#6F91F4] border-[1px] flex items-center justify-center
          rounded-[6.25rem] mr-[0.5rem]'
            onClick={() => {
              !showMenu ? setShowMenu(true) : setShowMenu(false);
            }}
          >
            <Image
              src={'/dashboard-icon-pen.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='w-5'
            />
          </div>
          <div
            className='w-[2.75rem] h-[2.75rem] 
          border-[#6F91F4] border-[1px] flex items-center justify-center
          rounded-[6.25rem]'
          >
            <Image
              src={'/dashboard-icon-user.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='w-5'
            />
          </div>
        </div>
      </div>
      {/* Menu body */}
      <div className={!showMenu ? 'hidden md:flex' : ''}>
        <Menubody />
      </div>

      {/* Body */}
      <div className='pt-[4.5rem] w-full md:pt-0 md:w-[calc(100vw-20.125rem)] '>
        <DashboardHome />
      </div>
    </div>
  );
};

export default DashboardPage;
