"use client"
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { and,eq } from 'drizzle-orm';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import CourseChapterList from './_components/CourseChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';
export default function courseLayout({params}) {
  const {user}=useUser();
  const [course,SetCourse]=useState([]);
  const [loading,setLoading]=useState(false);
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
const GenerateChapterContent=()=>{

  setLoading(true)
  const chapters=course?.courseOutput?.course?.chapters;
  chapters.forEach(async(chapter,index)=>{
    const PROMPT='Explain the concept in Detail on Topic : '+course?.name+', Chapter:'+ chapter?.name+', in JSON Format with list of array with  field as title, description  in detail , Code Example(Code field in <precode> format) if applicable';
    console.log("PROMPT:"+PROMPT)

  try{

let videoId="";
service.getVideos(course?.name+":"+chapter?.name).then(resp=>{
  console.log(resp);
  videoId=resp[0]?.id.videoId;
})
   const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
  console.log("herre"+result?.response?.text())
  const content=JSON.parse(result?.response?.text())
 
  await db.insert(Chapters).values({
chapterId:index,
courseId:course?.courseId,
content:content,
videoId:videoId
  })
    setLoading(false)
  }catch(e){
    setLoading(false)
    console.log(e)
  }
  await db.update(CourseList).set({
    publish:true,
  })
  router.replace('/create-course/'+course?.courseId+"/finish")


  })
}

  return (
    <div className='mt-10 py-7 md:px-20 lg:px-44'>
  <h2 className='font-bold text-center text-2xl'> Course Layout</h2>
<LoadingDialog loading={loading}></LoadingDialog>

<CourseBasicInfo  refreshData={()=>{
  GetCourse();
}}
course={course}></CourseBasicInfo>
<CourseDetail course={course}></CourseDetail>
<CourseChapterList refreshData={()=>{
  GetCourse();
}} course={course}></CourseChapterList>

<Button onClick={GenerateChapterContent} className="my-10">Generate Course Content</Button>

    </div>
  )
}
