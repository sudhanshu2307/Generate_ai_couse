import React from 'react'
import { LuBarChart } from "react-icons/lu";
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'> 
    
    <div className='flex gap-2'>
    <LuBarChart className='text-4xl text-primary' />
<div>
    <h2 className='text-xs text-gray-500 '>Skill Level</h2>
    <h2 className='font-medium tex-lg'>{course?.level}</h2>
</div>

    </div>
    
    <div className='flex gap-2'>
    <FaClock className='text-4xl text-primary' />
<div>
    <h2 className='text-xs text-gray-500 '>Duration</h2>
    <h2 className='font-medium tex-lg'>{course?.courseOutput?.course?.duration}</h2>
</div>

    </div>
    <div className='flex gap-2'>
    <FaBook className='text-4xl text-primary' />
<div>
    <h2 className='text-xs text-gray-500 '>No of Chapters</h2>
    <h2 className='font-medium tex-lg'>{course?.courseOutput?.course?.noOfChapters}</h2>
</div>

    </div>
    <div className='flex gap-2'>
    <IoIosVideocam className='text-4xl text-primary' />
<div>
    <h2 className='text-xs text-gray-500 '>Video Included</h2>
    <h2 className='font-medium tex-lg'>{course?.includeVideo}</h2>
</div>
</div>
    </div>
    </div>
  )
}

export default CourseDetail
