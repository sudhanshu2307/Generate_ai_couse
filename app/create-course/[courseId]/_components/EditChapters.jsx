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
  import { db } from '@/configs/db';
  import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { eq } from 'drizzle-orm';
import { CourseList } from '@/configs/schema';
function EditChapters({course,index,refreshData}) {
  const Chapters=course?.courseOutput?.course?.chapters;
const [name,Setname]=useState();
const [about,setAbout]=useState();;

  
  useEffect(()=>{
Setname(course?.courseOutput?.course?.chapters?.name)
setAbout(course?.courseOutput?.course?.chapters?.about)
  },[course])
  const update=async()=>{
    course.courseOutput.course.chapters[index].name=name
    course.courseOutput.course.chapters[index].about=about;
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
        <DialogTitle>Edit Chapter</DialogTitle>
        <DialogDescription>
        <div className='mt-3'>
        <label>
            Couse Title
        </label>
   <Input onChange={(e)=>{
    Setname(e.target.value)
   }} defaultValue={Chapters[index].name}></Input>
        <div>
            <label>description</label>
            <Textarea onChange={(e)=>{
    setAbout(e.target.value)
   }} className="h-40" defaultValue={Chapters[index].about}></Textarea>
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

export default EditChapters
