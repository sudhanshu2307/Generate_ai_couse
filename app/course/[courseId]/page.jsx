"use client"
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo';
import CourseChapterList from '@/app/create-course/[courseId]/_components/CourseChapterList';
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail';
import Header from '@/app/dashboard/_components/Header';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import React, { useState,useEffect } from 'react'

function Course({params}) {
const [course,setCourse]=useState()

useEffect(()=>{
params&&GetCourse();
},[params])
const GetCourse=async()=>{
const result=await db.select().from(CourseList).where(eq(CourseList?.courseId,params?.courseId))
setCourse(result[0])
console.log(result)

}

  return (
    <div>
    <Header></Header>
    <div className='px-10 p-10 md:px-20 lg:px-44'>
    <CourseBasicInfo edit={false} course={course}></CourseBasicInfo>
    <CourseDetail course={course}></CourseDetail>
    <CourseChapterList edit={false} course={course}></CourseChapterList>
    </div>
   
    </div>
  )
}

export default Course
