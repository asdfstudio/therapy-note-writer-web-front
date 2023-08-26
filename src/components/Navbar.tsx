import Link from 'next/link';
import React from 'react';
import Menu from '@/components/Menu';
import Image from 'next/image';
import { IBM_Plex_Sans } from 'next/font/google';

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
    <div className={iBM_Plex_Sans.className}>
      <div
        className='bg-slate-50 flex h-[3.75rem]  mx-6 my-6 
      justify-between items-center drop-shadow-xl 
      rounded-full 
      border-[1px] border-[#29375f33]'
      >
        <div className='flex justify-start items-center'>
          <div
            className='bg-[#6F91F421] flex justify-between 
        items-center rounded-full'
          >
            <div
              className='bg-[#29375F] w-[3.75rem] h-[3.75rem] flex 
        justify-center items-center rounded-full z-0'
            >
              <Image src='/logo-1.svg' alt='' width={40} height={40} />
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
            className='hidden lg:flex gap-[2.5rem] 
            lg:ml-[1.81rem] 
            text-[#29375F] font-[600] uppercase 
            text-[1rem] tracking-widest'
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
          <div
            className='hidden sm:flex bg-[#6F91F4] 
            sm:w-[9.375rem] sm:h-[2.75rem]  
            lg:w-[13.75rem] lg:h-[2.75rem] rounded-full 
            border-[1px] border-[#3157C9] text-white 
            text-[1rem] text-[600] justify-center 
            items-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            <Link href='/'>
              <button className='uppercase'>Sign up</button>
            </Link>
          </div>
          <div
            className='hidden sm:flex bg-white 
            sm:w-[9.375rem] sm:h-[2.75rem] 
            lg:w-[13.75rem] lg:h-[2.75rem] rounded-full 
            border-[1px] border-[#3157C9] text-[1rem] 
            text-[600] text-[#6F91F4] mr-[0.5rem] 
            justify-center items-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]'
          >
            <Link href='/'>
              <button className='uppercase'>Login</button>
            </Link>
          </div>
          <div className='flex md:hidden'>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
