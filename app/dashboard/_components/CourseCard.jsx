import Image from 'next/image'
import React from 'react'
import { IoEllipsisVertical } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import DropDownOption from './DropDownOption';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';


import { db } from '@/configs/db';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
function CourseCard({course,refreshData,displayUser=false}) {
  const handleOnDelete=async ()=>{
    const resp = await db.delete(CourseList)
    .where(eq(CourseList.id, course.id))
    .returning({ id: CourseList.id });
    if(resp){
      refreshData()
    }
  }
  return (
    <div className='shadow-sm rounded-lg border p-2 hover:scale-105 transition-all cursor-pointer mt-4  '>
      
      <Link href={'/course/'+course?.courseId}>
      
      <Image src={course?.courseBanner} width={300} height={200} 
      
     className='w-full h-[200px] object-cover rounded-lg' 
      ></Image></Link>
      <div className='p-2 '>
        <h2 className='font-medium text-lg flex justify-between items-center'>
{course?.courseOutput?.course?.name}        

 {!displayUser && <DropDownOption
handleOnDelete={()=>{
  handleOnDelete();
}}

><IoEllipsisVertical /> </DropDownOption>}
        </h2>
<p className='text-sm text-gray-500 my-1'>{course?.category}</p>
        <div className='flex items-center justify-between'>

            <h2 className='flex  gap-2 items-center p-1 bg-purple-50 text-primary text-sm rounded-sm'><FaBook />

                {course?.courseOutput?.course?.noOfChapters} Chapters
            </h2>
            
            <h2 className='text-sm bg-purple-50 text-primary rounded-sm'>
                {course?.level} Chapters
            </h2>
        </div>
      {displayUser&& <div className='flex gap-2 items-center mt-2'>
          <Image className='rounded-full' src={course?.userProfileImage} width={20} height={20}></Image>
        
        <h2 className='text-sm'>{course?.userName}</h2>
        </div>}
      </div>
   
    </div>
  )
}

export default CourseCard
