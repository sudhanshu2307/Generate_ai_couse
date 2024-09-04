"use client";
import React, { useContext } from 'react'
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
function AddCourse() {
  const {user}=useUser();
  const {userCourseList,setUserCourseList}=useContext(UserCourseListContext)
  return (
    <div className='flex justify-between items-center'>
   
   <div>
    <h2 className='text-3xl'>Hello,<span className='
    font-bold'>{user?.fullName}</span></h2>
    <p className='text-sm text-gray-500'>Create New Course With AI,Share with friends and earn from it</p>
   </div>
   <Link href={userCourseList>=10?'/dasboard/upgrade': '/create-course'}>
   <Button>+Create AI Course</Button></Link>
    </div>
  )
}

export default AddCourse
