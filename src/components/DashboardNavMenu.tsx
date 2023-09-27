'use client';
import React from 'react';
import Link from 'next/link';

const links = [
  { id: 1, title: 'Settings', url: '/dashboard/settings' },
  { id: 2, title: 'Log out', url: '/dashboard' },
];

const DashboardNavMenu = () => {
  return (
    <div
      className='bg-[#E9EFFD] text-[#29375F] font-[600] 
            uppercase absolute top-[4.3rem] 
            flex flex-col 
            drop-shadow-[0_8.33px_16.66px_rgba(53,61,82,0.15)]
            h-[5rem] w-[11.9375rem] rounded-[5px] 
            gap-[0.7rem] items-start justify-center 
            z-20 border-[1px] text-[1rem]
            tracking-widest	border-[#29375f33]
            '
    >
      {links.map((item) => (
        <Link
          className='font-iBM_Plex_Sans ml-[1rem]'
          key={item.id}
          href={item.url}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DashboardNavMenu;
