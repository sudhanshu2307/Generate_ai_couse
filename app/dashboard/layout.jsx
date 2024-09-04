"use client"
import React from 'react'
import { useState } from 'react'
import SideBar from './_components/SideBar'
import Header from "../dashboard/_components/Header"
import { UserCourseListContext} from '../_context/UserCourseListContext'

export default function DashboardLayout({children}){
const [userCourseList,setUserCourseList]=useState([])

{
  return (
    <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
    <div>
  <div className='md:w-64 hidden md:block'><SideBar></SideBar></div>  
     <div className='md:ml-64 '>
<Header></Header>
     
   <div className='p-10'>{children}</div>  </div> 
    </div></UserCourseListContext.Provider>
  )
}}
