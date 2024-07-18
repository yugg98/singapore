import TallyPopupButton from '@/components/TallyPopupButton'
import React from 'react'

const page = () => {
  return (
    <div>
    <div className="mx-auto max-w-7xl pb-14 pt-10 s lg:grid lg:grid-cols-2 lg:gap-x-8  lg:px-8 ">
    <div className="px-6 lg:px-0 lg:pt-4">
      <div className="mx-auto max-w-2xl mt-20">
        <div className="max-w-lg ">
          <h1 className=" text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Discover HUONE: Your Premier Venue for Degen Summit 2024
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
          Immerse yourself in the vibrant heartbeat of Singapore at HUONE, our exquisite venue nestled along the scenic riverfront of Clarke Quay. 

          <br/><br/>
          Centrally located amidst the bustling cityscape, HUONE offers a serene retreat where the energy of Singapore&apos;s urban pulse meets the tranquility of waterfront views.
           
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
    <HUONEExperience/>
    </div>
  )
}

export default page

import { ChatBubbleBottomCenterIcon, UsersIcon } from '@heroicons/react/20/solid';

const HUONEExperience = () => {
  return (
    <section className="p-6  rounded-lg shadow-md max-w-6xl mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-indigo-200 p-6 rounded-lg shadow-lg ">
          <ChatBubbleBottomCenterIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div>
            <h3 className="text-xl  text-black mt-4 font-semibold mb-2">A Unique Setting for Dynamic Discussions</h3>
            <p className="text-gray-700">
              At HUONE, each of our 11 meticulously designed rooms offers a distinct ambiance and aesthetic, stimulating creativity and fostering lively discussions. Whether you seek a sleek modern space or a cozy, intimate setting, each room is crafted to inspire and expand your senses, providing the perfect backdrop for engaging panel discussions and spirited debates.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-indigo-200 p-6 rounded-lg shadow-lg ">
          <UsersIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div>
            <h3 className="text-xl mt-4 text-black font-semibold mb-2">Embrace the Spirit of Collaboration</h3>
            <p className="text-gray-700">
              Gather alongside the picturesque riverfront, where the gentle flow of the water complements the buzz of Singapore's dynamic atmosphere. HUONE’s versatile spaces are ideal for forging new connections, sparking innovative ideas, and nurturing meaningful relationships among industry leaders and visionaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

