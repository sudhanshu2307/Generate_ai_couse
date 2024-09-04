import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Image src={'/th.jpeg'} width={40} height={40}></Image>
      <UserButton></UserButton>
    </div>
  )
}

export default Header
