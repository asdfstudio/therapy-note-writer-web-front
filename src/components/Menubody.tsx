import './custom.css';
import Link from 'next/link';
import React from 'react';
import TagsInputCustom from './TagsInputCustom';

const Speech = [
  'Clear',
  'Soft',
  'Loud',
  'Pressured',
  'Slow',
  'Rapid',
  'Slurred',
];

const Mood = [
  'Happy',
  'Sad',
  'Angry',
  'Irritable',
  'Euphoric',
  'Anxious',
  'Depressed',
];

const Behavior = [
  'Cooperative',
  'Uncooperative',
  'Agitated',
  'Calm',
  'Disruptive',
];

const delusions = [
  'None',
  'Persecutory',
  'Grandiose',
  'Somatic',
  'Erotomanic',
  'Nihilistic',
];

const Self_Injuring_Behavior = [
  'None',
  'Scratching',
  'Cutting',
  'Burning',
  'Biting',
  'Other',
];

const Menubody = () => {
  return (
    <div
      className='bg-[#12192E] w-screen h-screen 
      md:w-[23.75rem]
     text-[#fff] font-iBM_Plex_Sans
      fixed flex flex-col top-[4.75rem] pt-[1.25rem] z-20
      overflow-y-scroll'
    >
      <div
        className='ml-[1.25rem] w-[20.75rem]
        flex flex-col justify-center md:mb-[3rem] 
        xlc:mb-[7rem]
        md:w-[20.75rem]'
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
          w-full mb-[1.25rem] flex flex-wrap
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
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
            ring-inset
            focus:ring-[4px] focus:ring-[#F4776F]
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
              ring-inset
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
              ring-inset
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
          w-full mb-[1.25rem] flex flex-wrap
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Appointment'
            className='text-[0.9375rem] 
            mr-[1.5rem] '
          >
            <input
              type='radio'
              value='Appointment'
              id='Appointment1'
              name='Appointment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            In person
          </label>
          <label
            htmlFor='Appointment'
            className='text-[0.9375rem] 
            mr-[1.5rem] '
          >
            <input
              type='radio'
              value='Telehealth'
              id='Appointment2'
              name='Appointment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
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
        {/* <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <input
            type='text'
            placeholder='Write diagnosis...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent w-full'
          />
        </div> */}
        <div
          className='bg-[rgba(53,61,82,0.60)]
        rounded-[0.25888rem] p-[0.62rem]
        w-full mb-[1.25rem]
        border-[0.518px] 
        border-[rgba(111,145,244,0.50)] flex flex-wrap'
        >
          <TagsInputCustom
            tag_background='bg-[#f4776f]'
            close_background='bg-[#ffb9b5]'
            close_icon_color='text-[#f4776f]'
            placeholder_text='Write diagnosis...'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Current Symptoms
        </p>
        {/* <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <input
            type='text'
            placeholder='Write symptoms...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent w-full'
          />
        </div> */}
        <div
          className='bg-[rgba(53,61,82,0.60)]
        rounded-[0.25888rem] p-[0.62rem]
        w-full mb-[1.25rem]
        border-[0.518px] 
        border-[rgba(111,145,244,0.50)] flex flex-wrap'
        >
          <TagsInputCustom
            tag_background='bg-[#6F91F4]'
            close_background='bg-[#2048BE]'
            close_icon_color='text-[#6F91F4]'
            placeholder_text='Write symptoms...'
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
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <input
            type='text'
            placeholder='Write discussion...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent w-full'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Interventions used
        </p>
        {/* <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <input
            type='text'
            placeholder='Write interventions...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent w-full'
          />
        </div> */}
        <div
          className='bg-[rgba(53,61,82,0.60)]
        rounded-[0.25888rem] p-[0.62rem]
        w-full mb-[1.25rem]
        border-[0.518px] 
        border-[rgba(111,145,244,0.50)] flex flex-wrap'
        >
          <TagsInputCustom
            tag_background='bg-[#6F91F4]'
            close_background='bg-[#2048BE]'
            close_icon_color='text-[#6F91F4]'
            placeholder_text='Write interventions...'
          />
        </div>

        {/* Mental Status Exam */}

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
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Appearance1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Well-groomed'
              id='Appearance1'
              name='Appearance'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Well-groomed
          </label>
          <label
            htmlFor='Appearance2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Disheveled'
              id='Appearance2'
              name='Appearance'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Disheveled
          </label>
          <label
            htmlFor='Appearance3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Appropriate'
              id='Appearance3'
              name='Appearance'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Appropriate
          </label>
          <label
            htmlFor='Appearance4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Inappropriate'
              id='Appearance4'
              name='Appearance'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset
            focus:ring-4 focus:ring-[#F4776F]
            rounded-full cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Inappropriate
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Speech
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          {Speech.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={`${item}${index}`}
                className='container'
              >
                <input
                  value={item}
                  id={`${item}${index}`}
                  name='Delusions'
                  type='checkbox'
                />
                <span className='checkmark'></span>
                {item}
              </label>
            );
          })}
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Affect
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Affect1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Appropriate'
              id='Affect1'
              name='Affect'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Appropriate
          </label>
          <label
            htmlFor='Affect2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Blunted'
              id='Affect2'
              name='Affect'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Blunted
          </label>
          <label
            htmlFor='Affect3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Flat'
              id='Affect3'
              name='Affect'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Flat
          </label>
          <label
            htmlFor='Affect4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Labile'
              id='Affect4'
              name='Affect'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Labile
          </label>
          <label
            htmlFor='Affect5'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Restricted'
              id='Affect5'
              name='Affect'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Restricted
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Mood
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          {Mood.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={`${item}${index}`}
                className='container'
              >
                <input
                  value={item}
                  id={`${item}${index}`}
                  name='Delusions'
                  type='checkbox'
                />
                <span className='checkmark'></span>
                {item}
              </label>
            );
          })}
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Behavior
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          {Behavior.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={`${item}${index}`}
                className='container'
              >
                <input
                  value={item}
                  id={`${item}${index}`}
                  name='Delusions'
                  type='checkbox'
                />
                <span className='checkmark'></span>
                {item}
              </label>
            );
          })}
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Delusions
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          {delusions.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={`${item}${index}`}
                className='container'
              >
                <input
                  value={item}
                  id={`${item}${index}`}
                  name='Delusions'
                  type='checkbox'
                />
                <span className='checkmark'></span>
                {item}
              </label>
            );
          })}
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Suicidal Ideation
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-3
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Suicidal_Ideation1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='None'
              id='Suicidal_Ideation1'
              name='Suicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            None
          </label>
          <label
            htmlFor='Suicidal_Ideation2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Passive'
              id='Suicidal_Ideation2'
              name='Suicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Passive
          </label>
          <label
            htmlFor='Suicidal_Ideation3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Active'
              id='Suicidal_Ideation3'
              name='Suicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Active
          </label>
          <label
            htmlFor='Suicidal_Ideation4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Plan'
              id='Suicidal_Ideation4'
              name='Suicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Plan
          </label>
          <label
            htmlFor='Suicidal_Ideation5'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Intent'
              id='Suicidal_Ideation5'
              name='Suicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Intent
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Homicidal Ideation
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-3
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Homicidal_Ideation1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='None'
              id='Homicidal_Ideation1'
              name='Homicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            None
          </label>
          <label
            htmlFor='Homicidal_Ideation2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Passive'
              id='Homicidal_Ideation2'
              name='Homicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Passive
          </label>
          <label
            htmlFor='Homicidal_Ideation3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Active'
              id='Homicidal_Ideation3'
              name='Homicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Active
          </label>
          <label
            htmlFor='Homicidal_Ideation4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Plan'
              id='Homicidal_Ideation4'
              name='Homicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Plan
          </label>
          <label
            htmlFor='Homicidal_Ideation5'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Intent'
              id='Homicidal_Ideation5'
              name='Homicidal_Ideation'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Intent
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Self-Injuring Behavior
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          {Self_Injuring_Behavior.map((item, index) => {
            return (
              <label
                key={index}
                htmlFor={`${item}${index}`}
                className='container'
              >
                <input
                  value={item}
                  id={`${item}${index}`}
                  name='Delusions'
                  type='checkbox'
                />
                <span className='checkmark'></span>
                {item}
              </label>
            );
          })}
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Insight
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Insight1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Good'
              id='Insight1'
              name='Insight'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Good
          </label>
          <label
            htmlFor='Insight2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Fair'
              id='Insight2'
              name='Insight'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Fair
          </label>
          <label
            htmlFor='Insight3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Poor'
              id='Insight3'
              name='Insight'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Poor
          </label>
          <label
            htmlFor='Insight4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='None'
              id='Insight4'
              name='Insight'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            None
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Judgment
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Judgment1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Good'
              id='Judgment1'
              name='Judgment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Good
          </label>
          <label
            htmlFor='Judgment2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Fair'
              id='Judgment2'
              name='Judgment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Fair
          </label>
          <label
            htmlFor='Judgment3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Poor'
              id='Judgment3'
              name='Judgment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Poor
          </label>
          <label
            htmlFor='Judgment4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='None'
              id='Judgment4'
              name='Judgment'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            None
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Oriented
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Oriented1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Oriented x3'
              id='Oriented1'
              name='Oriented'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Oriented x3
          </label>
          <label
            htmlFor='Oriented2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Confused'
              id='Oriented2'
              name='Oriented'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Confused
          </label>
          <label
            htmlFor='Oriented3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Disoriented'
              id='Oriented3'
              name='Oriented'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Disoriented
          </label>
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Eye Contact
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem] grid grid-cols-2
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <label
            htmlFor='Eye_Contact1'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Good'
              id='Eye_Contact1'
              name='Eye_Contact'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Good
          </label>
          <label
            htmlFor='Eye_Contact2'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Fair'
              id='Eye_Contact2'
              name='Eye_Contact'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Fair
          </label>
          <label
            htmlFor='Eye_Contact3'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='Poor'
              id='Eye_Contact3'
              name='Eye_Contact'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            Poor
          </label>
          <label
            htmlFor='Eye_Contact4'
            className='text-[0.9375rem] 
            mr-[1.5rem] mb-[0.5rem]'
          >
            <input
              type='radio'
              value='None'
              id='Eye_Contact4'
              name='Eye_Contact'
              className='checkbox appearance-none 
            ring-[#F4776F] ring-[1.5px] 
            checked:ring-[4px] checked:ring-[#F4776F]
            ring-inset rounded-full
            cursor-pointer 
            w-[0.9375rem] h-[0.9375rem] mr-[0.5rem]'
            />
            None
          </label>
        </div>

        {/* Plan */}

        <p
          className='font-[700]
          text-[0.9375rem] mb-[1.25rem]'
        >
          Plan
        </p>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Homework
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <textarea
            placeholder='Write homework...'
            id='Homework'
            name='Homework'
            className='bg-transparent h-[9rem] w-full'
          />
        </div>

        {/* Options */}
        <p
          className=' opacity-[0.6] font-[400]
          text-[0.75rem] mb-[0.5rem]'
        >
          Next appointment date
        </p>
        <div
          className='bg-[rgba(53,61,82,0.60)]
          rounded-[0.25888rem] p-[0.62rem]
          w-full mb-[1.25rem]
          border-[0.518px] border-[rgba(111,145,244,0.50)]'
        >
          <input
            type='text'
            placeholder='Write date...'
            id='option_1'
            name='pronouns'
            className=' bg-transparent w-full'
          />
        </div>
        <div>
          <Link
            href='/dashboard'
            className='w-[17rem] mt-10 
          xlc:mb-10'
          >
            <button
              className='flex bg-[#6F91F4] py-[12px] 
            w-full rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            font-iBM_Plex_Sans tracking-[0.1rem]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
            >
              Generate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menubody;
