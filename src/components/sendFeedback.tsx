'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const stars = [1, 2, 3, 4, 5];

const SendFeedback = ({
    setShowSendFeedbackPop,
}: {
    setShowSendFeedbackPop: any;
}) => {
    const [showFirstStep, setShowFirstStep] = useState(true);
    const [starsCount, setStarsCount] = useState(0);

    const handleClickFirstStep = () => {
        setShowFirstStep(false);
    };

    const handleClickSecondStep = () => {
        setShowSendFeedbackPop(false);
    };

    return (
        <div
            className='absolute z-[70] bg-[rgba(0,0,0,0.50)] w-screen h-[1000px] md:h-screen flex 
            items-center justify-center'
        >
            <div
                className='flex w-[22.75rem] md:w-[54.25rem] h-[800px] md:h-[90vh] 
                drop-shadow-lg bg-[#fff] rounded-[0.75rem]'
            >
                <Image
                    onClick={() => {
                        setShowSendFeedbackPop(false);
                    }}
                    src={'/dashboard-icon-close.svg'}
                    alt=''
                    width={1200}
                    height={550}
                    className='absolute w-[1.25rem] h-[1.25rem] z-[10] 
                    right-[2.31rem] top-[1.87rem] cursor-pointer'
                />
                {showFirstStep ? (
                    <div className='flex flex-col md:flex-row'>
                        {/* Left side */}
                        <div
                            className='flex flex-col w-[22.75rem] md:w-[27.125rem] h-auto 
                            md:h-[30rem] px-[2.37rem]
                            pb-[0rem] justify-center'
                        >
                            <Image
                                src={'/feedback-icon-1.png'}
                                alt=''
                                width={1200}
                                height={550}
                                className='w-[5.4rem] md:w-[9.51675rem] h-auto mb-[1.27rem] '
                            />
                            <p
                                className='font-poynter_Oldstyle_Display text-[2.5rem] 
                                md:text-[3.5rem] font-[400] 
                                leading-[3.85rem] text-[#29375F] 
                                w-[19.75rem] md:w-[22.25rem] mb-[0.45rem]'
                            >
                                We’d love your feedback!
                            </p>
                            <p
                                className='font-iBM_Plex_Sans text-[1rem] font-[400] 
                        text-[rgba(41,55,95,0.70)] w-[19.75rem] md:w-[20.546rem]'
                            >
                                Do you have a suggestion or found some bug? Let
                                us know by sending as a feedback
                            </p>
                        </div>

                        {/* Right side */}
                        <div
                            className={`flex flex-col w-[22.75rem] md:w-[27.125rem] bg-gradient-to-b
                            from-[#f6f7f8] to-[rgba(240,244,255,1)] 
                            px-[1.5rem] md:px-[2.37rem] pt-[1.5rem] md:pt-[4rem] rounded-r-[0.75rem]`}
                        >
                            <p
                                className='font-iBM_Plex_Sans text-[1.25rem] font-[600] 
                        text-[#29375F] w-[22.25rem]'
                            >
                                How was your experience?
                            </p>

                            {/* Stars Design */}
                            <div className='flex mt-[1rem] mb-[1.5rem]'>
                                {stars.map((item: any) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setStarsCount(item);
                                            }}
                                            className='flex mr-[1rem] md:mr-[2rem]'
                                            key={item}
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                height='40'
                                                width='auto'
                                                viewBox='0 0 576 512'
                                                className={` hover:fill-[#6F91F4] w-[2.81rem]
                                                ${
                                                    item <= starsCount
                                                        ? 'fill-[#6F91F4]'
                                                        : 'fill-[rgba(196,197,199,0.7)]'
                                                }`}
                                            >
                                                <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                                            </svg>
                                        </div>
                                    );
                                })}
                            </div>

                            <textarea
                                className='w-[19.75rem] md:w-[22.125rem] h-[18.8rem] md:h-[21.5rem] 
                                p-[1rem] mb-[1.5rem]'
                                placeholder='Please tell us your reason for giving the score'
                            />

                            <div
                                className='w-full mt-2 
                        xlc:mb-0 '
                            >
                                <button
                                    onClick={handleClickFirstStep}
                                    // disabled={isGenerateButtonDisabled}
                                    className='flex bg-[#3052B5]  h-[2.75rem]
                            w-full rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            text-[1rem] font-[600] justify-center items-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                                >
                                    send feedback
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className={`flex flex-col w-full p-[2.37rem] items-center justify-center`}
                    >
                        <Image
                            src={'/feedback-icon-1.png'}
                            alt=''
                            width={1200}
                            height={550}
                            className='w-[5.4rem] md:w-[9.51675rem] h-auto mb-[1.27rem]'
                        />
                        <p
                            className='font-poynter_Oldstyle_Display text-[2.25rem] md:text-[3.5rem] font-[400] 
                            leading-[2.475rem] md:leading-[3.85rem] text-[#29375F] w-[19.75rem] md:w-[34.3125rem] 
                            mb-[0.45rem] text-center'
                        >
                            Thank you for sending us your feedback!
                        </p>
                        <p
                            className='font-iBM_Plex_Sans text-[1rem] font-[400] 
                        text-[rgba(41,55,95,0.70)] w-[19.75rem] md:w-[28.1875rem] text-center'
                        >
                            We appreciate the time you took to help us improve.
                            Your feedback will help us give you a better
                            experience with TherapyNoteWriter.
                        </p>

                        <div
                            className='w-[22.125rem] mt-[2rem] 
                        xlc:mb-[3rem] '
                        >
                            <button
                                onClick={handleClickSecondStep}
                                // disabled={isGenerateButtonDisabled}
                                className='flex bg-[#3052B5] h-[2.62438rem]
                            w-full rounded-full border-[1px] 
                            border-[#3157C9] uppercase text-white 
                            text-[1rem] font-[600] justify-center items-center
                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                            font-iBM_Plex_Sans tracking-[0.1rem]
                            hover:bg-[#4771ED] active:bg-[#4063C7]'
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SendFeedback;
