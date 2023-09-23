import React from 'react';

const Menubody = () => {
  return (
    <div className='bg-[#12192E] w-screen h-screen text-[#fff] font-iBM_Plex_Sans translate-x-full'>
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
  );
};

export default Menubody;
