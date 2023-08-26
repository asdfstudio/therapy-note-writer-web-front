'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className='flex justify-center items-center 
      bg-[#6F91F4] border-[#3157C9] border-[0.833px] 
      shadow-[#3b60cb40] shadow-md w-[2.75rem] 
      h-[2.75rem] px-[0.72rem] rounded-full mr-[0.5rem]'
    >
      {!open ? (
        <div className='flex  justify-center'>
          <Image
            src='/nav-open.svg'
            alt=''
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        </div>
      ) : (
        <div>
          <div className='flex justify-center'>
            <Image
              src='/nav-close.svg'
              alt=''
              width={20}
              height={20}
              onClick={() => setOpen(false)}
            />
          </div>
          <div
            className='bg-white text-[#29375F] font-[600] 
            uppercase absolute left-0 top-[4.3rem] 
            h-[11.125rem] sm:h-[5.0625rem] flex 
            flex-col w-full rounded-[20px] 
            gap-[1.88rem] sm:gap-[5rem] items-center 
            justify-center z-10 border-[1px] text-[1rem]
            tracking-widest	
            border-[#29375f33] sm:flex-row lg:hidden'
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
      )}
    </div>
  );
};

export default Menu;
