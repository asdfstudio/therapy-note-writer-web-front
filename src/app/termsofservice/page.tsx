import React from 'react';
import data from '../../../public/data.json';

const TermsOfServicePage = () => {
    return (
        <div className='flex justify-center my-[1rem] mx-[2rem] text-justify'>
            <div>
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

                        <div className=' '>
                            <p
                                className='text-[1rem] text-[rgba(41,55,95,0.70)] font-[400]
                                 font-iBM_Plex_Sans '
                            >
                                {data[0].tos}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
