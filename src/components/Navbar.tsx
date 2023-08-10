import Link from 'next/link';
import React from 'react';
import Menu from '@/components/Menu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex h-10  mx-6 my-6 justify-between items-center drop-shadow-xl rounded-full  bg-slate-50'>
      <div className='flex justify-start items-center'>
        <div className='bg-[#29375F] w-10 h-10 flex justify-center items-center rounded-full z-0'>
          <Image src='/logo-1.svg' alt='' width={30} height={30} />
        </div>
        <Link className='ml-2' href='/'>
          <Image src='/TherapyNoteWriter.svg' alt='' width={160} height={20} />
        </Link>
      </div>
      <div className='flex justify-end items-center'>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
