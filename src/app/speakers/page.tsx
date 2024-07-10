import React from 'react'
import Speaker from '@/components/Speakers'
import TallyPopupButton from '@/components/TallyPopupButton'
const page = () => {
  return (
    <div>
      
     <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8  lg:px-8 ">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl mt-20">
              <div className="max-w-lg ">
                <h1 className=" text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                  Become a Speaker
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                Are you a pioneer in blockchain, a Web3 enthusiast, or a real degen with a story that inspires? Whether you&apos;re an individual innovator or a brand making waves, we want you at our event. 
                <br/><br/>
                If you’re eager to share your insights, lead a workshop, or simply tell your story, we invite you to become part of our speaker lineup.
                 
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button className='bg-indigo-600 px-5 py-3 rounded-full'>
              <TallyPopupButton label={"Become A Speaker"} href="wv2GMA"/></button>

                </div>
              </div>
            </div>
          </div>
          <div className=" md:mx-auto md:max-w-3xl lg:mx-0 lg:mt-20 lg:w-screen">
            <div className=" md:rounded-3xl">
              <div>
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-xl md:mx-0 md:max-w-xl">
                    <img src="/speaker.jpeg" className="rounded-2xl" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  <Speaker/>
  </div>
  )
}

export default page