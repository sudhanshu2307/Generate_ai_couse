import { Input } from '@/components/ui/input'
import { useContext } from 'react'
import { UserInputContext } from '@/app/_context/UserInputContext'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TopicDescription() {
  const {userInput,setUserInput}=useContext(UserInputContext)
  const handleInputChange=(fieldName,value)=>{
    setUserInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }
  return (
    <div className='mx-20 lg:mx-44'>
    <div className='mt-5'>
        <label>Write The Topic for which You want to Generate Course (eg python,sql ,c++)</label>
        <Input placeholder={"Topic"} className="h-14 text-xl"
        defaultValue={userInput?.topic}
        onChange={(e)=>handleInputChange('topic',e.target.value)}


        
        ></Input>
    </div>
    <div className='
    mt-5'>
        <label>Tell us more about what you want to include in course (options) </label>
        <Textarea     defaultValue={userInput?.description}
        placeholder="Course Description"  onChange={(e)=>handleInputChange('description',e.target.value)}></Textarea>
    </div>
    </div>
  )
}

export default TopicDescription
