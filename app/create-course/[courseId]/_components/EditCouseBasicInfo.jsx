import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
   
  } from "@/components/ui/dialog"
  import { FaRegEdit } from "react-icons/fa";

import { Textarea } from '@/components/ui/textarea';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CourseList } from '@/configs/schema';
import { eq } from 'drizzle-orm';
import { Imprima } from 'next/font/google';
import { db } from '@/configs/db';
function EditCouseBasicInfo({course,refreshData}) {
    const [names,setNames]=useState();
    const[desc,setDesc]=useState();
    useEffect(()=>{
setNames(course?.courseOutput?.course?.name);
setDesc(course?.courseOutput?.course?.description)
    },[course])
    const update=async ()=>{
        course.courseOutput.course.name=names;
        course.courseOutput.course.description=desc;
      const result=await db.update(CourseList).set({
        courseOutput:course?.courseOutput
      }).where(eq(CourseList?.id,course?.id)).returning({id:CourseList.id});
console.log(result)
refreshData(true);
    }
  return (
   
      <Dialog>
  <DialogTrigger><FaRegEdit /></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course Title & description</DialogTitle>
      <DialogDescription>
    <div className='mt-3'>
        <label>
            Couse Title
        </label>
   <Input onChange={(e)=>{
    setNames(e.target.value)
   }} defaultValue={course?.courseOutput?.course?.name}></Input>
        <div>
            <label>description</label>
            <Textarea onChange={(e)=>{
    setDesc(e.target.value)
   }} className="h-40" defaultValue={course?.courseOutput?.course?.description}></Textarea>
        </div>
    </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <DialogClose>
            <Button onClick={update}>Update</Button>
        </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

   
  )
}

export default EditCouseBasicInfo
