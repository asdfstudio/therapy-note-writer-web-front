import React from 'react';
import Image from 'next/image';

const Menu = () => {
  return (
    <div
      className='flex justify-center items-center bg-[#6F91F4] border-[#3157C9] border-[0.833px] 
        shadow-[#3b60cb40] shadow-md w-8 h-8 rounded-full mr-1'
    >
      <Image src='/nav-open.svg' alt='' width={20} height={20} />
    </div>
  );
};

export default Menu;
