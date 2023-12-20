'use client';

import DashboardHome from '@/components/DashboardHome';
import DashboardNavMenu from '@/components/DashboardNavMenu';
import Menubody from '@/components/Menubody';
import SendFeedback from '@/components/sendFeedback';
import SubscriptionPop from '@/components/subscriptionPop';
import TermsOfService from '@/components/termsOfService';
import { Context } from '@/context/Context';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

const DashboardPage = () => {
    const { user } = useContext<any>(Context);
    const [showMenu, setShowMenu] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [mainSummary, setMainSummary] = useState('');
    const [showSubscriptionTable, setShowSubscriptionTable] = useState(false);
    // const [termsOfServiceAccepted, setTermsOfServiceAccepted] = useState(false);
    const [showTermsOfServicePop, setShowTermsOfServicePop] = useState(false);
    const [generateLoading, setGenerateLoading] = useState(false);
    const [showSendFeedbackPop, setShowSendFeedbackPop] = useState(false);
    const [clicksUsed, setClicksUsed] = useState(0);
    const [totalClick, setTotalClick] = useState(0);
    const [username, setUsername] = useState(null);
    const [disabledIndex, setDisabledIndex] = useState(null);
    const [trackButtonCLick, setTrackButtonCLick] = useState(0);
    const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(true);
    const [subscriptionTitle, setSubscriptionTitle] = useState(
        'Welcome to TherapyNoteWriter'
    );
    const [subscriptionSubTitle, setSubscriptionSubTitle] = useState(
        `Select the plan that’s right for you`
    );
    // 2 reasons, first one is default one and 2nd one is for upgrade
    const [subscriptinCallReason, setSubscriptinCallReason] =
        useState('default');

    const [userSubType, setUserSubType] = useState(null);

    const stripePriceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    let userID = user && user.user._id;
    let email = user && user.user.email;

    // Set username
    useEffect(() => {
        return () => {
            setUsername(user && user.user.username);
            setUserSubType(user && user.user.subPackage);
        };
    });

    // Get subscription data
    useEffect(() => {
        const checkSubscription = async () => {
            if (userID !== null) {
                const subscriptionData = await axios.get(
                    `${baseURL}/api/auth/check-subscription/${userID}`
                );

                if (
                    subscriptionData.data.nextBill <
                        Date.now().toLocaleString() ||
                    subscriptionData.data.nextBill === ''
                ) {
                    setShowSubscriptionTable(true);
                } else {
                    setShowSubscriptionTable(false);
                }
            }
        };
        checkSubscription();
    }, [baseURL, userID]);

    const updateTrackButtonCLick = () => {
        setTrackButtonCLick(trackButtonCLick + 1);
    };

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
    }, [baseURL, email, user, trackButtonCLick]);

    const contents = [
        {
            title: 'Free',
            amount: '$0',
            desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
            point_1: '5 notes generated per month, completely free',
            point_2: 'Simple and easy-to-use interface',
            subTitle: 'PhD in Mental Health',
        },
        {
            title: 'Basic',
            amount: '$10',
            desc: 'Everything is just better with this tool. Highly suggested. I wish I had known about this earlier.',
            point_1: '100 notes generated per month',
            point_2: 'Suitable for therapists with a moderate caseload',
            subTitle: 'PhD in Mental Health',
        },
        {
            title: 'Premium',
            amount: '$20',
            desc: 'Saved 10 hours on week 1. No more busy work for me. Only patient care. Just love the service. Easy, fast and very convenient.',
            point_1: '500 notes generated per month',
            point_2: 'Perfect for therapists with a large caseload',
            subTitle: 'PhD in Mental Health',
        },
    ];

    const handleShowMenu = () => {
        setShowMenu(true);
    };

    const handleSubscription = () => {
        setShowSubscriptionTable(false);
    };

    // Get terms of service check
    useEffect(() => {
        const getTermsOfService = async () => {
            const result = await axios.post(
                `${baseURL}/api/auth/getTermsOfService`,
                {
                    email: email,
                }
            );

            if (result.data.success === true) {
                const checkResult = result.data.privacyPolicyAccepted;
                setPrivacyPolicyAccepted(checkResult);
            }
        };
        getTermsOfService();
    }, [baseURL, email, privacyPolicyAccepted]);

    const acceptTermsOfService = async () => {
        const result = await axios.post(`${baseURL}/api/auth/termsOfService`, {
            email: email,
        });

        if (result.data.success === true) {
            setPrivacyPolicyAccepted(result.data.privacyPolicyAccepted);
        }
    };

    const cancelTermsOfService = () => {
        setPrivacyPolicyAccepted(true);
    };

    const handleUpgradeSubscriptionTable = () => {
        setSubscriptionTitle('Upgrade Your Plan');
        setSubscriptionSubTitle(
            `You have reached the maximum number of notes this month based on your current subscription. Upgrade to create more notes now or wait until next month's reset on December 8, 2023.`
        );
        setSubscriptinCallReason('upgrade');
        setShowSubscriptionTable(true);
    };

    return (
        <div className='flex md:justify-between'>
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

            {/* Terms of Service page pop-up */}
            {!privacyPolicyAccepted ? (
                <TermsOfService
                    // setShowTermsOfServicePop={setShowTermsOfServicePop}
                    setConfirm={acceptTermsOfService}
                    setCancel={cancelTermsOfService}
                />
            ) : (
                ''
            )}

            {/* Send Feedback page pop-up */}
            {showSendFeedbackPop ? (
                <SendFeedback setShowSendFeedbackPop={setShowSendFeedbackPop} />
            ) : (
                ''
            )}

            {/* Logo and Menu */}
            <div
                className='fixed h-[4.75rem] w-screen bg-[#12192E] 
        font-iBM_Plex_Sans
        text-[#fff] flex justify-between
        md:w-[23.75rem] z-[2] border-b-[1px]
        border-[rgba(111,145,244,0.40)]'
            >
                {/* Menu Bar Items */}
                {/* Logo and menu bar */}
                <div
                    className='flex justify-start items-center
          ml-[1.25rem]'
                >
                    <Link href='/dashboard'>
                        <div
                            className='w-[2.36475rem] h-[2.36475rem] 
              bg-[#6F91F4] flex items-center justify-center
              rounded-[0.5715rem] mr-[0.75rem]'
                        >
                            <Image
                                src={'/dashboard-logo-1.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-[1.6945rem] h-[1.15038rem] '
                            />
                        </div>
                    </Link>
                    <Link href='/dashboard'>
                        <Image
                            src={'/dashboard-logo-2.svg'}
                            alt=''
                            width={1200}
                            height={550}
                            draggable={false}
                            className='w-[4.625rem] h-[2.45rem] '
                        />
                    </Link>
                </div>

                {/* Right side items */}
                <div
                    className='flex justify-end items-center
          mr-[1.25rem]'
                >
                    {/* Pen icon */}
                    <div
                        className={`w-[2.75rem] h-[2.75rem] 
                        border-[#6F91F4] border-[1px] flex items-center justify-center
                        rounded-[6.25rem] mr-[0.5rem] md:hidden cursor-pointer 
                        ${showMenu ? 'bg-[#6F91F4]' : ''}`}
                        onClick={() => {
                            !showMenu ? setShowMenu(true) : setShowMenu(false);
                        }}
                    >
                        {!showMenu ? (
                            <div>
                                <Image
                                    src={'/dashboard-icon-pen.svg'}
                                    alt=''
                                    width={1200}
                                    height={550}
                                    draggable={false}
                                    className='w-5'
                                />
                            </div>
                        ) : (
                            <Image
                                src={'/dashboard-icon-pen-white.svg'}
                                alt=''
                                width={1200}
                                height={550}
                                draggable={false}
                                className='w-5'
                            />
                        )}
                    </div>
                    <p
                        className='mr-2 font-iBM_Plex_Sans text-[0.9375rem] font-[500]
                        text-[#6989E8]'
                    >
                        Hello, <br />
                        <span className='font-[600]'>{username}</span>
                    </p>
                    <div
                        className='w-[2.75rem] h-[2.75rem] 
          border-[#6F91F4] border-[1px] flex items-center justify-center
          rounded-[6.25rem] cursor-pointer'
                        onClick={() => {
                            !showNavMenu
                                ? setShowNavMenu(true)
                                : setShowNavMenu(false);
                        }}
                    >
                        <Image
                            src={'/dashboard-icon-user.svg'}
                            alt=''
                            width={1200}
                            height={550}
                            draggable={false}
                            className='w-5'
                        />
                    </div>
                </div>
            </div>

            {/* Menu body */}
            <div className={!showMenu ? 'hidden md:flex' : ''}>
                <Menubody
                    setMainSummary={setMainSummary}
                    // setShowSubscriptionTable={setShowSubscriptionTable}
                    handleUpgradeSubscriptionTable={
                        handleUpgradeSubscriptionTable
                    }
                    clicksUsed={clicksUsed}
                    totalClick={totalClick}
                    setGenerateLoading={setGenerateLoading}
                    // setShowTermsOfServicePop={setShowTermsOfServicePop}
                    setShowSendFeedbackPop={setShowSendFeedbackPop}
                    updateTrackButtonCLick={updateTrackButtonCLick}
                />
            </div>

            <div
                className={
                    !showNavMenu
                        ? 'hidden'
                        : `flex fixed w-full z-20 md:w-[24.75rem] justify-end `
                }
            >
                <DashboardNavMenu />
            </div>

            {/* Body */}
            <div className='pt-[4.5rem] w-full md:pt-0 md:w-[calc(100vw-23.75rem)]'>
                <DashboardHome
                    handleShowMenu={handleShowMenu}
                    mainSummary={mainSummary}
                    clicksUsed={clicksUsed}
                    totalClick={totalClick}
                    setShowSubscriptionTable={setShowSubscriptionTable}
                    handleUpgradeSubscriptionTable={
                        handleUpgradeSubscriptionTable
                    }
                    generateLoading={generateLoading}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
