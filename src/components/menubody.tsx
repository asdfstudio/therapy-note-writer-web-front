import React from 'react';

const Menubody = () => {
  return (
    <div
      className='bg-[#12192E] w-screen h-screen 
     text-[#fff] font-iBM_Plex_Sans
      fixed flex flex-col top-[4.75rem] pt-[1.25rem] z-20
      overflow-auto'
    >
      <div
        className='ml-[1.25rem] w-[20.75rem]
        flex flex-col justify-center mb-[10rem]'
      >
        <p
          className='font-[700]
          text-[0.9375rem] mb-[1.25rem]'
        >
          Session Description
        </p>

        {/* Options Start */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Pronouns
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='radio'
            value='She/Her/Hers'
            id='option_1'
            name='pronouns'
            className='appearance-none w-[0.9375rem] h-[0.9375rem] 
             bg-[#F4776F] rounded-full'
          />
          <label
            htmlFor='option_1'
            className='text-[0.9375rem] ml-[0.5rem] 
            mr-[1.5rem]'
          >
            She/Her/Hers
          </label>
          <input
            type='radio'
            value='He/Him/His'
            id='option_2'
            name='pronouns'
            className=''
          />
          {/* <div
            className={`h-[0.9375rem] w-[0.9375rem] 
            bg-[#12192E] rounded-full border-[1.5px] 
            border-[#F4776F] checked:border-[4px]`}
          ></div> */}
          <label
            htmlFor='option_1'
            className=' ml-[0.5rem] 
            mr-[1.5rem]'
          >
            He/Him/His
          </label>
          <br />
          <input
            type='radio'
            value='They/Them/Theirs'
            id='option_3'
            name='pronouns'
          />
          <label
            htmlFor='option_1'
            className=' ml-[0.5rem] 
            mr-[1.5rem]'
          >
            They/Them/Theirs
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Appointment Location
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='radio'
            value='He/Him/His'
            id='option_2'
            name='pronouns'
            className=''
          />
          <label
            htmlFor='option_1'
            className='text-[0.9375rem] ml-[0.5rem] 
            mr-[1.5rem]'
          >
            In person
          </label>
          <input
            type='radio'
            value='He/Him/His'
            id='option_2'
            name='pronouns'
            className=''
          />
          <label
            htmlFor='option_1'
            className='text-[0.9375rem] ml-[0.5rem] 
            mr-[1.5rem]'
          >
            Telehealth
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Diagnosis
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='text'
            placeholder='Write diagnosis...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Current Symptoms
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='text'
            placeholder='Write symptoms...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          What was discussed in session
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='text'
            placeholder='Write discussion...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Interventions used
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='text'
            placeholder='Write interventions...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent'
          />
        </div>

        <p
          className='font-[700]
          text-[0.9375rem] mb-[1.25rem]'
        >
          Mental Status Exam
        </p>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Appearance
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]'
        >
          <input
            type='text'
            placeholder='Write interventions...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent'
          />
        </div>
      </div>
    </div>
  );
};

export default Menubody;
