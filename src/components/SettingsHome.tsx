'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Context } from '@/context/Context';
import axios from 'axios';
import SubscriptionPop from './subscriptionPop';

const SettingsHome = () => {
    const [nextBill, setNextBill] = useState('');
    const [subPackage, setSubPackage] = useState('');
    const { user } = useContext<any>(Context);
    const [username, setUsername] = useState(null);
    const [showSubscriptionTable, setShowSubscriptionTable] = useState(false);
    const [disabledIndex, setDisabledIndex] = useState(4);
    const [clicksUsed, setClicksUsed] = useState(0);
    const [totalClick, setTotalClick] = useState(0);
    const subscriptionTitle = 'Upgrade Your Plan';
    const subscriptionSubTitle = `You have reached the maximum number of notes this month based on your current subscription. Upgrade to create more notes now or wait until next month's reset on December 8, 2023.`;

    // 2 reasons, first one is default one and 2nd one is for upgrade
    const subscriptinCallReason = 'upgrade';

    const stripePriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    let userID = user && user.user._id;
    let email = '';

    let userLocal: any;
    if (typeof window !== 'undefined') {
        userLocal = JSON.parse(localStorage.getItem('user')!) || null;

        if (user) {
            email = userLocal.user.email;
        }
    }

    // Set username
    useEffect(() => {
        return () => {
            setUsername(user && user.user.username);
        };
    });

    useEffect(() => {
        const checkSubscription = async () => {
            const headers = {
                'Content-Type': 'application/json',
            };
            const data = {
                id: userID,
            };
            const subscriptionData = await axios.get(
                `${baseURL}/api/auth/check-subscription/${userID}`
            );
            setNextBill(subscriptionData.data.nextBill);
            setSubPackage(subscriptionData.data.subPackage);
        };
        checkSubscription();
    }, [baseURL, nextBill, subPackage, userID]);

    // Get click data
    useEffect(() => {
        const checkClickCount = async () => {
            // setTotalClick(user && user.user.clickLimit);
            const clickData = await axios.get(
                `${baseURL}/api/auth/clickDataofCurrentMonth/${email}`
            );

            // set click data
            if (clickData.data.data) {
                setTotalClick(clickData.data.data.clickLimit);
                if (clickData.data.data.clickLimit === 5) {
                    setDisabledIndex(0);
                } else if (clickData.data.data.clickLimit === 100) {
                    setDisabledIndex(1);
                } else if (clickData.data.data.clickLimit === 500) {
                    setDisabledIndex(2);
                }
            }
            if (clickData.data.data.clicks !== null) {
                setClicksUsed(clickData.data.data.clicks.ClickCount);
            } else {
                setClicksUsed(0);
            }
        };
        checkClickCount();
    }, [baseURL, email, user]);

    const handleClick = () => {
        setShowSubscriptionTable(true);
    };

    return (
        <div
            className='flex min-h-screen bg-[url("/bg-home-1.svg")] 
      w-screen flex-col items-center
      bg-no-repeat bg-contain xlc:flex-row
      xlc:justify-center '
        >
            {/* Subscription pop-up */}
            {showSubscriptionTable ? (
                <SubscriptionPop
                    setShowSubscriptionTable={setShowSubscriptionTable}
                    disabledIndex={disabledIndex}
                    username={username}
                    title={subscriptionTitle}
                    subTitle={subscriptionSubTitle}
                    subReason={subscriptinCallReason}
                />
            ) : (
                ''
            )}
            {/* Account */}

            <form className='flex flex-col'>
                <h1
                    className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[2.75rem] mt-[2.98rem]
              mb-[1.31rem] text-[#29375F]'
                >
                    Account
                </h1>

                <label
                    className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
           mb-[0.5rem]'
                >
                    Your Name
                </label>
                <input
                    type='text'
                    name='username'
                    defaultValue={user && user.user.username}
                    // placeholder='Amanda Groel'
                    className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                />

                <label
                    className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
          mt-[1.5rem] mb-[0.5rem]'
                >
                    Email Address
                </label>
                <input
                    type='email'
                    name='email'
                    defaultValue={user && user.user.email}
                    // placeholder='yourname@domain.com'
                    className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                />

                <label
                    className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400]
            mt-[1.5rem] mb-[0.5rem]'
                >
                    Password
                </label>
                <input
                    type='password'
                    name='password'
                    defaultValue='*** *** *** *** ***'
                    disabled
                    // placeholder='****  ****  ****'
                    className='w-[21.25rem] h-[2.75rem] rounded-full
                  bg-[#fff] border-[1px] border-[#6f91f480]
                    pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
                    font-iBM_Plex_Sans font-[400] text-[1rem] 
                    text-[#969595] '
                />
                {/* <div className='flex gap-2 mt-1 items-center'>
                    <input
                        className='flex self-start ml-[1rem] mt-[0.5rem] '
                        type='checkbox'
                        onClick={() => {
                            showPassword();
                        }}
                    />
                    <label className='flex mt-[0.1rem]'>Show Password</label>
                </div> */}

                <Link
                    href='/dashboard/changepassword'
                    className='w-[21.25rem] h-[2.75rem] mt-[1.5rem]
            md:w-[25rem] md:mt-[1.25rem] md:mb-[2.37rem]
            xlc:w-[25rem]'
                >
                    <button
                        className='flex bg-white h-full 
            w-full items-center rounded-full border-[1px] 
            border-[#3157C9] uppercase text-[#3052B5] 
            font-iBM_Plex_Sans tracking-[0.1rem]
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            hover:border-[#4771ED] hover:bg-[#FAFAFA]
            active:border-[#4063C7] active:bg-[#FAFAFA]'
                    >
                        change password
                    </button>
                </Link>
            </form>
            <div
                className='hidden xlc:flex bg-[rgba(111,145,244,0.40)] w-[1px] h-[40rem]
        mx-[5rem]'
            ></div>

            <hr
                className='w-[21.25rem] h-[2px] 
            bg-[rgba(111,145,244,0.40)] mt-[2.5rem]
            mb-[2.5rem] xlc:hidden'
            />

            <div className='flex flex-col mb-[5rem] xlc:mb-0'>
                <h1
                    className='text-[3.125rem] 
              font-poynter_Oldstyle_Display 
              font-[400] leading-[3.4375rem] 
              mb-[2rem] text-[#29375F]'
                >
                    Manage <br /> Subscription
                </h1>
                <h3
                    className='font-iBM_Plex_Sans
            text-[#29375F] font-[400] text-[1rem]
            mb-[1.5rem]'
                >
                    Modify your subscription and billing cycle.
                </h3>

                <label
                    className='font-iBM_Plex_Sans
          text-[#29375F] text-[1rem] font-[400] 
           mb-[0.5rem]'
                >
                    Current Plan
                </label>
                <input
                    type='text'
                    name='plan'
                    // placeholder='FREE'
                    defaultValue={subPackage}
                    disabled
                    className='w-[21.25rem] h-[2.75rem] rounded-full
            bg-[#fff] border-[1px] border-[#6f91f480]
              pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
              font-iBM_Plex_Sans font-[400] text-[1rem]
              hover:border-[#6F91F4] 
              active:border-[#4771ED] active:bg-[#FAFAFA]'
                />

                {nextBill === '' ? (
                    <></>
                ) : (
                    <>
                        <label
                            className='font-iBM_Plex_Sans
text-[#29375F] text-[1rem] font-[400] 
mt-[1.5rem] mb-[0.5rem]'
                        >
                            Next Billing Cycle
                        </label>
                        <input
                            type='text'
                            name='date'
                            defaultValue={nextBill}
                            // placeholder='June 10, 2024'
                            disabled
                            className='w-[21.25rem] h-[2.75rem] rounded-full
                            bg-[#fff] border-[1px] border-[#6f91f480]
                            pl-[1.06rem] md:w-[25rem] xlc:w-[25rem]
                            font-iBM_Plex_Sans font-[400] text-[1rem]
                            hover:border-[#6F91F4] 
                            active:border-[#4771ED] active:bg-[#FAFAFA]'
                        />
                    </>
                )}

                {/* <form action={`${baseURL}/api/stripe/checkout`} method='POST'> */}
                <form>
                    {/* Hidden field with Stripe PriceID */}
                    <input type='hidden' name='priceId' value={stripePriceId} />
                    <input
                        type='hidden'
                        name='userID'
                        value={user && user.user._id}
                    />
                    <input type='hidden' name='sub' value='BASIC' />
                    <input type='hidden' name='clickLimit' value={100} />
                    <div
                        onClick={handleClick}
                        className='w-[21.25rem] h-[2.75rem] mt-4
                        mb-[0.94rem]
                        md:w-[25rem] md:mt-[1.25rem] 
                        xlc:w-[25rem]'
                    >
                        <button
                            // type='submit'
                            type='button'
                            className='flex bg-[#3052B5] h-full 
            w-full items-center rounded-full border-[1px] 
            border-[#3157C9] uppercase text-white 
            font-iBM_Plex_Sans tracking-[0.1rem]
            text-[1rem] font-[600] justify-center
            drop-shadow-[0_7px_10px_rgba(59,96,203,0.25)]
            hover:bg-[#4771ED] active:bg-[#4063C7]'
                        >
                            update subscription
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsHome;
