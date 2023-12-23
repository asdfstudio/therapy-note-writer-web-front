'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import data from '../../public/data.json';

const TermsOfService = ({
    // setShowTermsOfServicePop,
    setCancel,
    setConfirm,
}: {
    // setShowTermsOfServicePop: any;
    setCancel: any;
    setConfirm: any;
}) => {
    const handleClick = () => {
        // setShowTermsOfServicePop(false);
        setConfirm();
    };

    const handleCancel = () => {
        setCancel();
    };

    return (
        <div
            className='absolute z-[70] bg-[rgba(0,0,0,0.50)] w-screen h-screen flex 
                items-center justify-center'
        >
            <div
                className=' flex flex-col items-start
                    w-[67.125rem] p-[2.5rem]
                    drop-shadow-lg bg-gradient-to-b
                    from-[#f6f7f8] to-[rgba(240,244,255,1)]
                    rounded-[0.75rem]'
            >
                {/* Title */}
                <p
                    className='font-poynter_Oldstyle_Display font-[400]
                        text-[3.5rem] text-[#29375F] leading-[3.85rem]
                        mb-[0.75rem]'
                >
                    Terms of Service
                </p>
                {/* paragraph */}
                <p
                    className='font-iBM_Plex_Sans font-[500]
                        text-[1rem] text-[#6F91F4] leading-[1.75rem]
                        mb-[1.5rem]'
                >
                    Last updated October 16, 2023 12:34 PM
                </p>

                {/* Terms of Service Card */}
                <div className='flex'>
                    <div
                        className={` h-auto bg-[#fff] border-[rgba(111,145,244,0.50)] border-[1px]  
                            rounded-[0.75rem] py-[0.75rem] px-[1.12rem]`}
                    >
                        {/* Title */}
                        <p
                            className='text-[1rem] text-[rgba(41,55,95,0.70)] font-[700]
                            font-iBM_Plex_Sans mb-[1rem]'
                        >
                            AGREEMENT TO TERMS
                        </p>

                        <div className=' overflow-y-auto h-[20rem]'>
                            <p
                                className='text-[1rem] text-[rgba(41,55,95,0.70)] font-[400]
                                 font-iBM_Plex_Sans '
                            >
                                {data[0].tos}
                            </p>
                        </div>
                        <div className='mt-[1rem] text-[#29375F] font-iBM_Plex_Sans'>
                            <label>
                                <input
                                    type='checkbox'
                                    name='tos'
                                    className='mr-[1rem]'
                                />
                                I agree to the terms and conditions
                            </label>
                        </div>
                        <div className='flex gap-[1rem] mb-[2rem]'>
                            <div
                                className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                onClick={handleCancel}
                            >
                                <button
                                    className='flex bg-white h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#3052B5] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA]
                                            active:border-[#4063C7] active:bg-[#FAFAFA]'
                                >
                                    Cancel
                                </button>
                            </div>

                            <div
                                className='w-[16.68rem] h-[2.62rem] mb-[1.5rem]
                                                self-center'
                                onClick={handleClick}
                            >
                                <button
                                    className='flex bg-[#3052B5] h-[2.75rem] 
                                            mt-[2rem] 
                                            w-full items-center rounded-full border-[1px] 
                                            border-[#3157C9] uppercase text-[#fff] 
                                            font-iBM_Plex_Sans tracking-[0.1rem]
                                            text-[1rem] font-[600] justify-center
                                            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                            hover:border-[#4771ED] hover:bg-[#FAFAFA] hover:text-[#3052B5]
                                            active:border-[#4063C7] active:bg-[#FAFAFA] active:text-[#3052B5]'
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
