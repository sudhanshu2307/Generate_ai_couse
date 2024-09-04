import React from 'react'
import { CiEdit } from "react-icons/ci";
function Hero() {
  return (
    <div>
   <section className=" text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl text-primary"
      >
      Ai Course Generator

        <span className=" text-black sm:block"> Custom Learning. </span>
      </h1>

      <p className=" text-black mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      Unlock the Ai driven Coourse Creating Platform.Tailor Your Journey to fit your unique goals and pace
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/dashboard"
        >
          Get Started creating
        </a>

     
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Hero
