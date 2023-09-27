'use client';
import ChangePassHome from '@/components/ChangePassHome';
import DashboardNavMenu from '@/components/DashboardNavMenu';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ChangePasswordPage = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <div className='flex md:justify-between'>
      {/* Logo and Menu */}
      <div
        className='fixed h-[4.75rem] w-screen bg-[#12192E] 
        font-iBM_Plex_Sans
        text-[#fff] flex justify-between
        md:w-[5.375rem] md:flex-col md:h-screen
        md:pt-[1rem]'
      >
        {/* Menu Bar Items */}
        {/* Logo and menu bar */}
        <div
          className='flex justify-start items-center
              ml-[1.25rem] md:hidden'
        >
          <Link href='/dashboard'>
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
          </Link>
          <Link href='/dashboard'>
            <Image
              src={'/dashboard-logo-2.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='w-[4.625rem] h-[2.45rem] '
            />
          </Link>
        </div>

        {/* Right side items */}
        <div
          className='flex justify-end items-center
              mr-[1.25rem] md:flex-col-reverse
              md:gap-[1.25rem] md:mr-0'
        >
          <Link href='/dashboard'>
            <div
              className='w-[2.75rem] h-[2.75rem] 
              border-[#6F91F4] border-[1px] flex items-center justify-center
              rounded-[6.25rem] mr-[0.5rem]'
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
          </Link>
          <div
            className='w-[2.75rem] h-[2.75rem] bg-[#6F91F4]
              border-[#6F91F4] border-[1px] flex items-center justify-center
              rounded-[6.25rem]'
            onClick={() => {
              !showNavMenu ? setShowNavMenu(true) : setShowNavMenu(false);
            }}
          >
            <Image
              src={'/dashboard-icon-user-white.svg'}
              alt=''
              width={1200}
              height={550}
              draggable={false}
              className='w-5'
            />
          </div>
        </div>
      </div>

      {/* Menu Nav */}
      <div
        className={
          !showNavMenu
            ? 'hidden'
            : `flex fixed w-full md:w-[18rem] justify-end z-20 md:-top-[3.5rem]`
        }
      >
        <DashboardNavMenu />
      </div>

      {/* Body */}
      <div className='pt-[4.5rem] w-full md:pt-0 '>
        <ChangePassHome />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
