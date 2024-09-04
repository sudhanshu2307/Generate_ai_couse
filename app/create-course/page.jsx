"use client"
import uuid4 from "uuid4";
import { useContext } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext'
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { HiAcademicCap } from "react-icons/hi"; // Example icon
import { HiLightBulb } from "react-icons/hi";   // Example icon
import { HiClipboardList } from "react-icons/hi"; // Example icon
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserRoundIcon } from 'lucide-react';
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './_components/LoadingDialog';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const {userInput,setUserInput}=useContext(UserInputContext)

  const Stepper = [
    {
      id: 1,
      name: 'Category',
      icon: <HiAcademicCap /> // Assuming HiAcademicCap exists in your icon pack
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />  // Assuming HiLightBulb exists in your icon pack
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardList /> // Assuming HiClipboardList exists in your icon pack
    }
  ];
const [activeIndex,setActiveIndex]=useState(0);
const {user}=useUser()
const [no,setno]=useState(0);

const router=useRouter();


useEffect(()=>{
console.log(userInput

)
},[userInput])
const  checkStatus=()=>{
  if(userInput?.length==0
  ){
    return true;
  }
  if(activeIndex==0 && (userInput?.category?.length==0 ||userInput?.category==undefined )){
    return true;
  }
  if(activeIndex==1 &&(userInput?.topic?.length==0 || userInput?.topic==undefined)){
    return true;
  }
else if(activeIndex==2 &&(userInput?.level==undefined || userInput?.duration==undefined || userInput?.displayVideo==undefined || userInput?.Noofchapters==undefined))
{
  return true;
}
  return false;
}
const [loading ,setLoading]=useState(false)
const GenerateCourseLayout= async ()=>{
  setLoading(true)
const BASIC_PROMPT='Generate  a course Tutorial on Following Detail with field as course name, Description ,along with chapter Name ,about,  Duration'
const USER_INPUT_PROMPT='Category: '+userInput?.category+', Topic: '+userInput?.topic+', Level:'+userInput?.level +', Duration:'+userInput?.duration +', • NoOf Chapters:'+userInput?.Noofchapters +',in JSON format'
const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT
console.log(FINAL_PROMPT)

const result=await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT)
console.log(result.response?.text())
console.log(JSON.parse(result.response?.text()))
console.log(user?.primaryEmailAddress?.emailAddress)
setLoading(false)

SaveCourseLayoutInDb(JSON.parse(result.response?.text()));





}


const SaveCourseLayoutInDb= async (courseLayout )=>{
  var id = uuid4();
  setLoading(true)
  const result=await db.insert(CourseList).values({
courseId:id,
name:userInput?.topic,
level:userInput?.level,
category:userInput?.category,
courseOutput:courseLayout,
createdBy:user?.primaryEmailAddress?.emailAddress,
userName:user?.fullName,
userProfileImage:user?.imageUrl
  })
console.log("finish")




  setLoading(false)
  router.replace('/create-course/'+id)
}

  return (
    <>
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-primary text-4xl font-medium'>Create Course</h2> {/* Ensure text-primary is defined in your CSS */}
      </div>
      <div className='flex justify-center mt-10'>
        {Stepper.map((item,index) => (
          <div className='flex items-center' key={item.id}>
            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
              <div className={`bg-black p-3 rounded-full text-white
              ${activeIndex===index &&'bg-purple-500'}
              `
              
              
              }>{item.icon}</div>
              <h2 className=' md:block md:text-sm'>{item.name}</h2>
            </div>
           {index!=Stepper.length-1 && <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
           ${activeIndex-1>=index && 'bg-purple-500'}
           
           `}>

            </div>}
           
          </div>
        ))}
      </div>
    </div>
    <div className='px-10 md:px-20 lg:px-44 mt-10 '>
    {activeIndex==0?<SelectCategory></SelectCategory>:activeIndex==1?<TopicDescription></TopicDescription>:<SelectOption></SelectOption>}
  <div  className='flex mt-10 justify-between'>
  <Button   variant ='outline' disabled={activeIndex==0} onClick={()=>{
   setActiveIndex(activeIndex-1) 
  }}>
Previous
  </Button>
  {activeIndex<2 &&<Button disabled={checkStatus()} onClick={()=>{
    setActiveIndex(activeIndex+1)
setno(no+1)
  }}>Next</Button>}
  {activeIndex==2 && <Button  disabled={checkStatus()}    onClick={()=>{
   GenerateCourseLayout()

  }}>Generte New Course</Button>}
  </div> 

  <LoadingDialog loading={loading}></LoadingDialog>
  </div>
 
  </>
  );
}

export default CreateCourse;

