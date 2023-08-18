'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      shadow-[#3b60cb40] shadow-md w-8 h-8 rounded-full 
      mr-1'
    >
      {!open ? (
        <Image
          src='/nav-open.svg'
          alt=''
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <>
          <Image
            src='/nav-close.svg'
            alt=''
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
          <div
            className='bg-white text-[#29375F] font-[600] 
            uppercase absolute left-0 top-[3rem] py-6 flex 
            flex-col w-full rounded-[20px] gap-4 items-center 
            justify-center z-10 border-[1px] 
            border-[#29375f33] sm:flex-row lg:hidden'
          >
            {links.map((item) => (
              <Link key={item.id} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
