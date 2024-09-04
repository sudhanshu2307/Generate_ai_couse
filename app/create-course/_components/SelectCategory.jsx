import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
  const {userInput,setUserInput}=useContext(UserInputContext)

const handleCategoryChange=(category)=>{
setUserInput(prev=>({
  ...prev,
  category:category
}))
}

  return (
    <div className='px-10 md:px-20'>
    <h2 className='my-5'> Select  Course Category </h2>
    <div className='flex flex-col-3 gap-10  justify-between
     items-center'>
   
    {CategoryList.map((item,index)=>(
      <div className={`flex flex-col p-5 border items-center rounded-xl
      hover:border-primary hover:bg-blue-50 cursor-pointer
      
  ${userInput?.category==item.name && 'border-primary bg-blue-50' }     `}onClick={()=>handleCategoryChange(item.name)} >


<Image src={item.icon} width={80} height={50}></Image>
<h2>{item.name}</h2>


      </div>
    ))}
    </div></div>
  )
}

export default SelectCategory
