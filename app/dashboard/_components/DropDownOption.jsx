import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { db } from "@/configs/db";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
function DropDownOption({children,handleOnDelete}) {
const [openalert,setOpenAlert]=useState(false);



  return (
    
    <div> 
<DropdownMenu>
  <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <div className="flex items-center gap-1">
    <DropdownMenuItem onClick={()=>{setOpenAlert(true)}}> <MdDelete /> Delete</DropdownMenuItem>
   
    </div>
    
  </DropdownMenuContent>
</DropdownMenu>
<AlertDialog open={openalert}>
 
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>{
        setOpenAlert(false)
      }}>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={()=>{
     handleOnDelete();
     setOpenAlert(false)
      }}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

</div> 
  
  )
}

export default DropDownOption
