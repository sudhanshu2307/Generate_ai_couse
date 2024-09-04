"use client"
import React, { useEffect, useState } from 'react'
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema';
import { and, eq } from 'drizzle-orm';
import ChapterListCard from './_component/ChapterListCard';
import ChapterContent from './_component/ChapterContent';
import Course from '../page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CourseStart({ params }) {
    const [selectedChapter,setSelectedChapter]=useState()
const [course,setCourse]=useState()
const [chapterContent,setChapterContent]=useState([])
  // Destructure courseId from params
  const { courseId } = params;

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    try {
      // Ensure correct usage of the eq function
      const result = await db.select().from(CourseList).where(eq(CourseList.courseId, courseId));
      console.log(result);
      setCourse(result[0])
      GetSelectedChapterContent(0)
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }
const GetSelectedChapterContent=async(chapterId)=>{
const result=await db.select().from(Chapters).where(and(eq(Chapters.chapterId,chapterId),
eq(Chapters.courseId,course?.courseId)));
setChapterContent(result[0])
console.log( "hello" +result[0])
console.log("hello here")
}
  return (
    <div>
     <div className=' fixed md:w-64 hidden md:block h-screen border-r shadow-sm ' >
<h2 className='font-medium text-lg bg-primary p-4 text-white'>
{course?.courseOutput?.course?.name}

</h2>
<div>
{course?.courseOutput?.course?.chapters.map((chapter,index)=>(
    <div onClick ={()=>{
        setSelectedChapter(chapter )
    GetSelectedChapterContent(index);
  
    }} className={` hover:bg-purple-50 cursor-pointer ${selectedChapter?.name==chapter?.name &&'bg-purple-100'}`} key={index}>
        <ChapterListCard chapter={chapter} index={index}> </ChapterListCard>
    </div>
  
))} <Link href="/dashboard"><Button className="mr-5 mt-5 rounded-lg hover:bg-emerald-500">Dashboard</Button></Link> 
</div>
     </div>
     <div className='md:ml-64'>
      <ChapterContent content={chapterContent} chapter={selectedChapter}></ChapterContent>
    
     </div>
    </div>
  )
}
