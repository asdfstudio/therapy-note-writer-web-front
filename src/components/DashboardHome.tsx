import './dashboardHome.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import penLoadingAnimation from '../../public/lottie-Pen-Loading-Red.json';

const DashboardHome = ({
    handleShowMenu,
    mainSummary,
    clicksUsed,
    totalClick,
    setShowSubscriptionTable,
    generateLoading,
}: {
    handleShowMenu: any;
    mainSummary: any;
    clicksUsed: number;
    totalClick: number;
    setShowSubscriptionTable: any;
    generateLoading: any;
}) => {
    const [clickAreaCovered, setClickAreaCovered] = useState(0);

    const styles = () => ({
        width: `${clickAreaCovered}%`,
    });

    useEffect(() => {
        const area = (clicksUsed / totalClick) * 100;
        setClickAreaCovered(area);
    }, [clicksUsed, totalClick]);

    const pictureSerial = Math.floor(Math.random() * 10);

    return (
        <div className='font-iBM_Plex_Sans'>
            <div
                className='bg-[url("/bg-home-2.svg")] h-[calc(screen-15%)] md:h-screen w-full
                    bg-repeat-x bg-cover flex flex-col xlc:bg-contain '
            >
                {/* Note Counter */}
                <div className='mt-[1.5rem] ml-[2rem]'>
                    <p
                        className=' font-iBM_Plex_Sans font-[400] text-[1rem] 
                        text-[#29375F] mb-[0.31rem]'
                    >
                        <span className='font-[700]'>
                            {clicksUsed}/{totalClick}
                        </span>{' '}
                        notes generated.
                        <span
                            className='font-[600] text-[#3157C9] cursor-pointer'
                            onClick={() => {
                                setShowSubscriptionTable(true);
                            }}
                        >
                            {' '}
                            Upgrade for more
                        </span>
                    </p>
                    <div
                        className='w-[17.87rem] h-[0.5rem] bg-[#FCD7D4] 
                        rounded-[20rem]'
                    >
                        <div
                            style={styles()}
                            className={`bg-[#F4776F] rounded-[20rem] h-full `}
                        ></div>
                    </div>
                </div>

                {/* Main body */}

                {generateLoading ? (
                    <div className='flex flex-col items-center justify-center mt-[15%]'>
                        <Lottie
                            animationData={penLoadingAnimation}
                            loop={true}
                            className=' absolute z-[5] w-[9rem] '
                        />
                        <Image
                            src={`/loading-img-${pictureSerial}.jpg`}
                            alt=''
                            width={1200}
                            height={550}
                            className='w-[33rem] h-auto rounded-[1.125rem] colorChangeAnimation'
                        />
                        <p
                            className='text-[#29375F] font-iBM_Plex_Sans 
                            tetx-[0.9375rem] font-[400] mt-[1.5rem] italic'
                        >
                            TherapyNoteWriter is generating your note...
                        </p>
                        {/* <div className='top-[50%] w-10 h-10  bg-slate-500'></div> */}
                    </div>
                ) : (
                    <div>
                        {mainSummary && mainSummary !== '' ? (
                            <div
                                className=' h-[80vh] md:h-full flex flex-col mx-[2rem] my-[2rem] 
                        md:mx-[4rem] md:my-[4rem] justify-between '
                            >
                                <p
                                    className='text-[#29375F] 
                        text-[0.9375rem] font-[400] leading-[1.3125rem] 
                        text-left '
                                >
                                    {mainSummary}
                                </p>
                                <div className='flex place-self-end '>
                                    <button
                                        className='w-[9rem] 
                                flex bg-[#fff] py-[12px] 
                                rounded-full border-[1px] 
                                border-[#3157C9] uppercase text-[#6F91F4] 
                                text-[1rem] font-[600] justify-center
                                drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                                font-iBM_Plex_Sans tracking-[0.1rem]
                                hover:bg-[#FAFAFA] active:bg-[#f2f1f1]'
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                mainSummary
                                            );
                                        }}
                                    >
                                        Copy
                                        <Image
                                            src={'/dashboard-icon-copy.svg'}
                                            alt=''
                                            width={1200}
                                            height={550}
                                            draggable={false}
                                            className=' ml-1 w-[1rem]'
                                        />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div
                                className=' flex flex-col items-center 
                    justify-center 
                    pt-[4rem] md:pt-[10%] mb-[5rem] xlc:mb-0 xlc:pt-[10%]'
                            >
                                <h1 className='text-[3.4375rem] text-[#29375F] '>
                                    <span className='font-poynter_Oldstyle_Display'>
                                        How it{' '}
                                        <span
                                            className='italic font-[400] 
          bg-[url("/login-underline-1.svg")] 
          bg-contain bg-no-repeat bg-bottom'
                                        >
                                            works
                                        </span>
                                    </span>
                                </h1>

                                {/* Icon wrapper  */}
                                <div
                                    className='flex flex-col items-center mt-5 
      xlc:flex-row xlc:items-baseline xlc:justify-evenly 
      xlc:w-[70vw]'
                                >
                                    {/* Single Item */}
                                    <div
                                        className='flex items-center 
        justify-center w-full sm:flex-row xlc:flex-col 
        xlc:w-full'
                                    >
                                        {/* Icon */}
                                        <div
                                            className='flex w-[4.54594rem] 
          h-[3.90006rem]'
                                        >
                                            <Image
                                                src='/second-icon-1.svg'
                                                alt=''
                                                width={1200}
                                                height={550}
                                                draggable={false}
                                            />
                                        </div>
                                        {/* Text Contents */}
                                        <div
                                            className='flex flex-col items-start ml-[1.5rem]
          justify-center mt-3 sm:items-start 
          w-[15rem] xlc:items-center
          xlc:ml-0 xlc:w-full'
                                        >
                                            <p
                                                className='text-[#29375F] text-[1.375rem] 
            font-[500] leading-[1.75rem]'
                                            >
                                                Input session info
                                            </p>
                                            <p
                                                className='text-[#29375F] 
            text-[1.125rem] font-[400] leading-[1.75rem] 
            opacity-[0.7] text-left xlc:text-center 
            xlc:w-[15.8125rem]'
                                            >
                                                Easily enter relevant details
                                                about the therapy session.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Arrow */}
                                    <div
                                        className='flex w-[0.9205rem] h-[1.5625rem] 
        mt-6 mb-6 -ml-[15rem] 
        xlc:hidden'
                                    >
                                        <Image
                                            src='/icon-arrow-down.svg'
                                            alt=''
                                            width={200}
                                            height={100}
                                            draggable={false}
                                        />
                                    </div>
                                    <div className='hidden xlc:flex'>
                                        <Image
                                            src='/icon-arrow-right.svg'
                                            alt=''
                                            width={130}
                                            height={10}
                                            draggable={false}
                                        />
                                    </div>

                                    {/* Single Item */}
                                    <div
                                        className='flex items-center 
        justify-center w-full sm:flex-row xlc:flex-col 
        xlc:w-full'
                                    >
                                        {/* Icon */}
                                        <div
                                            className='flex w-[4.54594rem] 
          h-[3.90006rem]'
                                        >
                                            <Image
                                                src='/second-icon-2.svg'
                                                alt=''
                                                width={1200}
                                                height={550}
                                                draggable={false}
                                            />
                                        </div>
                                        {/* Text Contents */}
                                        <div
                                            className='flex flex-col items-start ml-[1.5rem]
          justify-center mt-3 sm:items-start 
          w-[15rem] xlc:items-center
          xlc:ml-0 xlc:w-full'
                                        >
                                            <p
                                                className='text-[#29375F] text-[1.375rem] 
            font-[500] leading-[1.75rem]'
                                            >
                                                Click generate
                                            </p>
                                            <p
                                                className='text-[#29375F] 
                                    text-[1.125rem] font-[400] leading-[1.75rem] 
                                    opacity-[0.7] text-left xlc:text-center 
                                    xlc:w-[15.8125rem]'
                                            >
                                                Our Al-powered system creates a
                                                professional progress note in
                                                DAP format.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Arrow */}
                                    <div
                                        className='flex w-[0.9205rem] h-[1.5625rem] 
                            mt-6 mb-6 -ml-[15rem] 
                            xlc:hidden'
                                    >
                                        <Image
                                            src='/icon-arrow-down.svg'
                                            alt=''
                                            width={200}
                                            height={100}
                                            draggable={false}
                                        />
                                    </div>

                                    <div className='hidden xlc:flex'>
                                        <Image
                                            src='/icon-arrow-right.svg'
                                            alt=''
                                            width={130}
                                            height={10}
                                            draggable={false}
                                        />
                                    </div>

                                    {/* Single Item */}
                                    <div
                                        className='flex items-center 
                            justify-center w-full sm:flex-row xlc:flex-col 
                            xlc:w-full'
                                    >
                                        {/* Icon */}
                                        <div
                                            className='flex w-[4.54594rem] 
                                h-[3.90006rem]'
                                        >
                                            <Image
                                                src='/second-icon-3.svg'
                                                alt=''
                                                width={1200}
                                                height={550}
                                                draggable={false}
                                            />
                                        </div>
                                        {/* Text Contents */}
                                        <div
                                            className='flex flex-col items-start ml-[1.5rem]
                                justify-center mt-3 sm:items-start 
                                w-[15rem] xlc:items-center
                                xlc:ml-0 xlc:w-full'
                                        >
                                            <p
                                                className='text-[#29375F] text-[1.375rem] 
                                    font-[500] leading-[1.75rem]'
                                            >
                                                Note complete
                                            </p>
                                            <p
                                                className='text-[#29375F] 
                                    text-[1.125rem] font-[400] leading-[1.75rem] 
                                    opacity-[0.7] text-left xlc:text-center 
                                    xlc:w-[15.8125rem]'
                                            >
                                                Review, edit, and copy your
                                                progress note, freeing up time
                                                for patient care.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className='w-[17rem] mt-10 
                        mb-10 flex bg-[#6F91F4] py-[12px] 
                         rounded-full border-[1px] 
                        border-[#3157C9] uppercase text-white 
                        text-[1rem] font-[600] justify-center
                        drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
                        font-iBM_Plex_Sans tracking-[0.1rem]
                        hover:bg-[#4771ED] active:bg-[#4063C7]
                        md:hidden'
                                    onClick={handleShowMenu}
                                >
                                    write session info
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardHome;
