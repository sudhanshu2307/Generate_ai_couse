import { Button } from '@/components/ui/button';
import React from 'react'
import { FaRegClock } from "react-icons/fa6";
function ChapterListCard({chapter,index}) {
  return (
    <div>
    <div className='grid grid-cols-5 p-3 items-center border-b'>
      <div>
<h2 className=' text-center w-8 h-8 p-2 bg-primary text-white rounded-full'>
    {index}
</h2>
      </div>
      <div className='col-span-4'>
<h2 className='font-medium '>
{chapter?.name}
</h2>
<h2 className='flex items-center gap-2 text-sm text-primary'>
<FaRegClock /> {chapter?.duration}   
</h2>
      </div>
    
    </div>
   
    </div>
    
  )
}

export default ChapterListCard
