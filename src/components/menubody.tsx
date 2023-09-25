import React from 'react';

const Menubody = () => {
  return (
    <div
      className='bg-[#12192E] w-screen h-screen 
     text-[#fff] font-iBM_Plex_Sans
      fixed flex flex-col top-[4.75rem] pt-[1.25rem] z-20
      overflow-y-scroll'
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
          w-full mb-[1.25rem] flex flex-wrap'
        >
          <label
            htmlFor='option_1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='She/Her/Hers'
              id='option_1'
              name='pronouns'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            She/Her/Hers
          </label>

          <label
            htmlFor='option_1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='He/Him/His'
              id='option_2'
              name='pronouns'
              className='checkbox appearance-none 
              ring-[#F4776F] ring-[1.5px] 
              checked:ring-[4px] checked:ring-[#F4776F]
              focus:ring-4 focus:ring-[#F4776F]
              rounded-full cursor-pointer 
              w-[0.9375rem] h-[0.9375rem] transition
              duration-300 mr-[0.5rem]'
            />
            He/Him/His
          </label>

          <label
            htmlFor='option_1'
            className='text-[0.9375rem] 
            mr-[1.5rem]'
          >
            <input
              type='radio'
              value='He/Him/His'
              id='option_2'
              name='pronouns'
              className='checkbox appearance-none 
              ring-[#F4776F] ring-[1.5px] 
              checked:ring-[4px] checked:ring-[#F4776F]
              focus:ring-4 focus:ring-[#F4776F]
              rounded-full cursor-pointer 
              w-[0.9375rem] h-[0.9375rem] transition
              duration-300 mr-[0.5rem]'
            />
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
          w-full mb-[1.25rem] flex flex-wrap'
        >
          <label
            htmlFor='Appointment'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Appointment'
              id='Appointment1'
              name='Appointment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            In person
          </label>
          <label
            htmlFor='Appointment'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Telehealth'
              id='Appointment2'
              name='Appointment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
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
