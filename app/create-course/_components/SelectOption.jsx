import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { useContext } from 'react'
  import { UserInputContext } from '@/app/_context/UserInputContext'
function SelectOption() {

  const {userInput,setUserInput}=useContext(UserInputContext)
  const handleInputChange=(fieldName,value)=>{
    setUserInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }
  return (
    <div className='px-10 md:px-20 lg:px-44'>
<div className='flex justify-between items-center gap-10'>

<div>
<label className='text-sm'> ✅ Difficulty level</label><Select 

defaultValue={userInput?.level}

onValueChange={(value)=>handleInputChange('level',value)}


>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Beginner">Beginner</SelectItem>
    <SelectItem value="Intermediate">Intermediate</SelectItem>
    <SelectItem value="Advance">Advance</SelectItem>
  </SelectContent>
</Select></div>

<div>
<label className='text-sm'>⌚ Course Duration</label><Select
defaultValue={userInput?.duration}

 onValueChange={(value)=>handleInputChange('duration',value)}>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1 hour">1 hour</SelectItem>
    <SelectItem value="2 hour">2 hour</SelectItem>
    <SelectItem value="More Than 3 hours">More Than 3 hours</SelectItem>
  </SelectContent>
</Select></div>

<div>
<label className='text-sm'> 🎥 Disply Video</label><Select 
defaultValue={userInput?.displayVideo}

onValueChange={(value)=>handleInputChange('displayVideo',value)}>
  <SelectTrigger className="">
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Yes">Yes</SelectItem>
    <SelectItem value="No">No</SelectItem>
    
  </SelectContent>
</Select></div>

<div>
<label className='text-sm'>#️⃣ No of chapter</label>
 <Input type="number"  
 defaultValue={userInput?.Noofchapters}
 onChange={(e)=>handleInputChange('Noofchapters',e.target.value)}></Input>
 
 
  </div>


</div>

    </div>
  )
}

export default SelectOption
