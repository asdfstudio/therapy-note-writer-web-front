'use client';
import React, { useContext, useEffect } from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { Context } from '@/context/Context';
import { useRouter } from 'next/navigation';

const links = [
    {
        id: 1,
        title: 'Settings',
        url: '/dashboard/settings',
        icon: '/dashoboard-icon-gear.svg',
    },
    {
        id: 2,
        title: 'Log out',
        url: '/logout',
        icon: '/dashoboard-icon-logout.svg',
    },
];

const DashboardNavMenu = () => {
    const { user, dispatch } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        user ? '' : router.push('/login');
    }, [user, router]);

    const handleClick = (url: any) => {
        if (url === '/dashboard/settings') {
            router.push('/dashboard/settings');
        }
        if (url === '/logout') {
            dispatch({ type: 'LOGOUT' });
            router.push('/login');
        }
    };
    return (
        <div
            className='absolute flex flex-col items-center
      drop-shadow-[0_8.33px_16.66px_rgba(53,61,82,0.15)]
      border-[1px] bg-[#E9EFFD] border-[#29375f33] 
      rounded-[5px] top-[4.3rem] z-20'
        >
            {links.map((item) => (
                <div
                    key={item.id}
                    className='bg-[#E9EFFD] 
                    flex h-[2.5rem] w-[11.9375rem] 
                    border-[1px] rounded-[5px] border-transparent
                    items-center hover:bg-[#e1e7f4] cursor-pointer '
                    onClick={() => handleClick(item.url)}
                >
                    {/* <Link
                        className='font-iBM_Plex_Sans ml-[20%] flex items-center '
                        href={item.url}
                    > */}
                    <div className='font-iBM_Plex_Sans ml-[20%] flex items-center '>
                        <Image
                            src={item.icon}
                            alt=''
                            width={1200}
                            height={550}
                            className='h-[0.75rem] w-[0.75rem] mr-[0.5rem]'
                        />
                        <h3
                            className='text-[1rem] tracking-widest uppercase
                          text-[#29375F] font-[600] '
                        >
                            {item.title}
                        </h3>
                    </div>
                    {/* </Link> */}
                </div>
            ))}
        </div>
    );
};

export default DashboardNavMenu;
