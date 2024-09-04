"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import { HiHome, HiBeaker, HiOutlineLogout, HiOutlineShieldCheck } from "react-icons/hi";
import { Progress } from '@/components/ui/progress';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';

function SideBar() {
  const path = usePathname();
  const context = useContext(UserCourseListContext);

  // Ensure userCourseList is initialized as an empty array if undefined
  const userCourseList = context?.userCourseList || [];

  const Menu = [
    {
      id: 1,
      name: 'Home',
      icon: <HiHome />,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Explore',
      icon: <HiBeaker />,
      path: '/dashboard/explore'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: <HiOutlineShieldCheck />,
      path: '/dashboard/upgrade'
    },
    {
      id: 4,
      name: 'Logout',
      icon: <HiOutlineLogout />,
      path: '/dashboard/logout'
    }
  ];

  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image src={'/logo.webp'} width={160} height={100} alt="Logo" />
      <hr className='my-5' />
      <ul>
        {Menu.map(item => (
          <Link key={item.id} href={item.path}>
            <div className={`flex mb-3 items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg ${item.path === path ? 'bg-gray-100 text-black' : ''}`}>
              <div className='text-3xl'>{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>
      <div className='absolute bottom-10 w-[80%]'> 
        <Progress value={(userCourseList?.length)%10}></Progress>
        <h2 className='text-sm my-2'>{userCourseList.length} Out of 10 Courses</h2>
        <h2 className='text-xs my-2 text-gray-500'>Upgrade Your plan to access Unlimited course creation</h2>
      </div>
    </div>
  );
}

export default SideBar;
