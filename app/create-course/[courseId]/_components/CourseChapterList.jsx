import React from 'react'
import { FaClock } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import EditChapters from './EditChapters';
function CourseChapterList({course,refreshData,edit=true}) {
  return (
    <div className='mt-3'>
   <h2 className='text-xl font-bold'>Chapters</h2>
   <div className='mt-2'>
    {course?.courseOutput?.course?.chapters.map((chapter,index)=>(

<div className='border p-5 rounde-lg mb-2 flex items-center justify-between'>
<div className='flex gap-5 items-center' >
<h2 className=  ' flex-none bg-primary h-10 w-10 text-white rounded-full text-center p-2'>{index+1}</h2>
<div>
<h2 className='font-medium text-lg'>{chapter?.name}

{edit && <EditChapters refreshData={()=>{
  refreshData(true);
}} course={course} index={index}></EditChapters>}</h2>
<p className='text-sm text-gray-500'>{chapter?.about}</p>
<p className='flex gap-2 text-primary items-center'> <FaClock /> {chapter?.duration}</p>
</div>

</div>
<FaCheck className='text-4xl text-gray-300 flex-none' />
</div>
    ))}
   </div>
    </div>
  )
}

export default CourseChapterList
