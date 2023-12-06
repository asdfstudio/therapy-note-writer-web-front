'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const SendFeedback = ({
    setShowSendFeedbackPop,
}: {
    setShowSendFeedbackPop: any;
}) => {
    const [showFirstStep, setShowFirstStep] = useState(true);

    const handleClickFirstStep = () => {
        setShowFirstStep(false);
    };

    const handleClickSecondStep = () => {
        setShowSendFeedbackPop(false);
    };

    return (
        <div
            className='absolute z-[70] bg-[rgba(0,0,0,0.50)] w-screen h-screen flex 
            items-center justify-center'
        >
            <div className='flex w-[54.25rem] drop-shadow-lg bg-[#fff]'>
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
                    <div className='flex'>
                        <div
                            className={`flex flex-col w-[27.125rem] h-[30rem] p-[2.37rem] justify-center  `}
                        >
                            <Image
                                src={'/feedback-icon-1.png'}
                                alt=''
                                width={1200}
                                height={550}
                                className='w-[9.51675rem] h-auto mb-[1.27rem]'
                            />
                            <p
                                className='font-poynter_Oldstyle_Display text-[3.5rem] font-[400] 
                            leading-[3.85rem] text-[#29375F] w-[22.25rem] mb-[0.45rem]'
                            >
                                We’d love your feedback!
                            </p>
                            <p
                                className='font-iBM_Plex_Sans text-[1rem] font-[400] 
                        text-[rgba(41,55,95,0.70)] w-[20.546rem]'
                            >
                                Do you have a suggestion or found some bug? Let
                                us know by sending as a feedback
                            </p>
                        </div>
                        <div
                            className={`flex flex-col w-[27.125rem] bg-gradient-to-b
                    from-[#f6f7f8] to-[rgba(240,244,255,1)] 
                    p-[2.37rem] pt-[4rem]`}
                        >
                            <p
                                className='font-iBM_Plex_Sans text-[1.25rem] font-[600] 
                        text-[#29375F] w-[22.25rem]'
                            >
                                How was your experience?
                            </p>

                            {/* Stars Design */}
                            <div className='flex mt-[1rem] mb-[1.5rem]'>
                                {[...Array(5)].map((item) => {
                                    return (
                                        <div
                                            className='flex mr-[2rem]'
                                            key={item}
                                        >
                                            {/* <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='16'
                                        width='18'
                                        viewBox='0 0 576 512'
                                        className={`fill-[rgba(41,55,95,0.70)]  hover:fill-[rgba(111,145,244,0.50)]`}
                                    >
                                        <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
                                    </svg> */}

                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                height='40'
                                                width='auto'
                                                viewBox='0 0 576 512'
                                                className={`fill-[rgba(196,197,199,0.7)] hover:fill-[rgba(111,145,244,0.50)]`}
                                            >
                                                <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                                            </svg>
                                        </div>
                                    );
                                })}
                            </div>

                            <textarea
                                className='w-[22.125rem] h-[21.5rem] p-[1rem] mb-[1.5rem]'
                                placeholder='Please tell us your reason for giving the score'
                            />

                            <div
                                className='w-full mt-2 
                        xlc:mb-0 '
                            >
                                <button
                                    onClick={handleClickFirstStep}
                                    // disabled={isGenerateButtonDisabled}
                                    className='flex bg-[#6F91F4]  h-[2.75rem]
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
                            className='w-[9.51675rem] h-auto mb-[1.27rem]'
                        />
                        <p
                            className='font-poynter_Oldstyle_Display text-[3.5rem] font-[400] 
                            leading-[3.85rem] text-[#29375F] w-[34.3125rem] mb-[0.45rem]
                            text-center'
                        >
                            Thank you for sending us your feedback!
                        </p>
                        <p
                            className='font-iBM_Plex_Sans text-[1rem] font-[400] 
                        text-[rgba(41,55,95,0.70)] w-[28.1875rem] text-center'
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
                                className='flex bg-[#6F91F4] h-[2.62438rem]
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
