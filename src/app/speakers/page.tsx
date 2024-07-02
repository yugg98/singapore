import React from 'react'
import Speaker from '@/components/Speakers'
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
                  At DeGen Summit, we present exclusive sponsorship packages
                  designed to align with your brand&apos;s vision, budget, and
                  marketing aspirations.
                  <br />
                  <br />
                  From prime exhibition spaces to impactful branding suites,
                  DeGen Summit brings you a range of tailored opportunities for
                  maximum visibility and meaningful connections.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                <button className="bg-purple-900 px-6 py-3 text-white rounded-full">Become A Speaker</button>

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