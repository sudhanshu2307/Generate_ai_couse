import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-md'>
      <Image src={'/part3.webp'} width ={120} height={100}></Image>
   <Link href="/dashboard">  <Button>Get Started</Button></Link> 
    </div>
  )
}

export default Header
