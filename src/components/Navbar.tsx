import Link from 'next/link';
import React from 'react';
import Menu from '@/components/Menu';
import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';
import { inherits } from 'util';

const iBM_Plex_Sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: '600',
});

const links = [
  { id: 1, title: 'How it works', url: '/' },
  { id: 2, title: 'Why choose', url: '/whychoose' },
  { id: 3, title: 'Features', url: '/feautures' },
];

const Navbar = () => {
  return (
    <div
      className='bg-slate-50 flex h-10  mx-6 my-6 
      justify-between items-center drop-shadow-xl rounded-full 
      border-[1px] border-[#29375f33]'
    >
      <div className='flex justify-start items-center'>
        <div
          className='bg-[#6F91F421] flex justify-between 
        items-center rounded-full'
        >
          <div
            className='bg-[#29375F] w-10 h-10 flex 
        justify-center items-center rounded-full z-0'
          >
            <Image src='/logo-1.svg' alt='' width={30} height={30} />
          </div>
          <Link className='ml-2 mr-2 lg:mr-4' href='/'>
            <Image
              src='/TherapyNoteWriter.svg'
              alt=''
              width={160}
              height={20}
            />
          </Link>
        </div>
        <div
          className='hidden md:flex md:gap-2 lg:gap-4 md:ml-2 lg:ml-4 text-[#29375F] 
          font-[600] uppercase text-[12px]'
        >
          {links.map((item) => (
            <Link
              className={iBM_Plex_Sans.className}
              key={item.id}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex justify-end items-center gap-2'>
        <Link href='/'>
          <button
            className='hidden md:flex bg-[#6F91F4] py-[6px] 
            px-7 md:px-10 rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[10px] text-[600] 
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            Sign up
          </button>
        </Link>
        <Link href='/'>
          <button
            className='hidden md:flex bg-white py-[6px] 
            px-7 md:px-10 rounded-full border-[1px] 
            border-[#3157C9] uppercase text-[10px] 
            text-[600] mr-1
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            Login
          </button>
        </Link>
        <div className='flex md:hidden'>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
