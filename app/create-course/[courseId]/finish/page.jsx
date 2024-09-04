"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import { FaRegCopy } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
function finsihScreen({params}) {
  const {user}=useUser();
  const [course,SetCourse]=useState([]);

  const router=useRouter();
useEffect(()=>{
params && GetCourse();
  console.log(params)
}

,[params,user])
const GetCourse = async () => {
  const courseId = params?.courseId;
  const email = user?.primaryEmailAddress?.emailAddress;

  if (!courseId || !email) {
    console.error("Missing courseId or user email.");
    return;
  }

  try {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, courseId),
          eq(CourseList.createdBy, email)
        )
      );

    SetCourse(result[0]);
    console.log(result);
  } catch (error) {
    console.error("Error fetching course:", error);
  }
 
};
  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
    <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats Your Course Have Been Generated</h2>
    
   <CourseBasicInfo course={course} refreshData={()=>{
    console.log()
   }}></CourseBasicInfo>
   <h2 className='mt-3 text-bold text-2xl'>Course Url</h2>
   <h2 className='flex gap-5 text-center border p-2 rounded text-gray-500'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId} <FaRegCopy
   className='h-5 w-5 cursor-pointer'
   onClick={async()=>{
    await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+'/course/view/'+course?.courseId)
   }}
   
    /></h2>
    <div className='flex justify-between '><h2 className='text-primary text-bold mt-4'>To access The course Press the Button </h2>
    <Link href='/dashboard'><Button className="mt-4 mr-6">Go to Dashboard</Button>
    </Link></div>
    </div>
  )
}

export default finsihScreen
