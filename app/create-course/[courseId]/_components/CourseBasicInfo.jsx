import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { getDownloadURL, ref } from 'firebase/storage';
import { useState } from 'react';
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCouseBasicInfo from './EditCouseBasicInfo';
import { eq, placeholder } from 'drizzle-orm';
import { uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/fireBaseConfig';
import { Download } from 'lucide-react';
import { CourseList } from '@/configs/schema';
import { db } from '@/configs/db';
import Link from 'next/link';

function CourseBasicInfo({course,refreshData,edit=true}) {
const [selectedFile,setSelectedFile]=useState()

useEffect(()=>{
if(course){
  setSelectedFile(course?.courseBanner)
}
},[course])

  const onFileSelected=async(event)=>
  {
    const file=event.target.files[0];
  setSelectedFile(URL.createObjectURL(file))
  const fileName=Date.now()+'.jpg'
  const storageRef=ref(storage,'ai-course/'+fileName)
  await uploadBytes(storageRef,file).then((snapshot)=>{
    console.log("File uploaded")
  }).then(resp=>{ 
    getDownloadURL(storageRef).then(async(downloadUrl)=>{
      console.log(downloadUrl)
      await db.update(CourseList).set({
        courseBanner:downloadUrl
      }).where(eq(CourseList.id,course?.id))
    })
  })
  }
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
  
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
    
    <div>
        <h2 className='font-bold text-3xl'>{course?.courseOutput?.course?.name}
         {edit &&<EditCouseBasicInfo refreshData={()=>{

          refreshData(true)
        }} course={course}></EditCouseBasicInfo>
        }</h2>
        <p className='text-sm text-gray-400 mt-3'> {course?.courseOutput?.course?.description}</p>
      <h2 className='font-medium mt-2 flex gap-2  items-center text-primary'> <HiOutlinePuzzle />{course?.category}</h2>
  {!edit && <Link href={'/course/'+course?.courseId+'/start'}  > <Button className="w-full mt-5">Start</Button></Link>}
    </div>
    <div>
<label htmlFor="upload-image"><Image src={selectedFile?selectedFile:"/image.webp"} className=' cursor-pointer w-full rounded-xl h-[250px] object-cover' width={300} height={300}></Image>
</label>



{edit && <input type="file" className='opacity-0' id="upload-image" onChange={onFileSelected}></input>
}</div>
  </div>

    </div>
  )
}

export default CourseBasicInfo
