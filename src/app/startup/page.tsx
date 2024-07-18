import Cta from '@/components/demonight/Cta'
import Hero from '@/components/demonight/Hero'
import Who from '@/components/demonight/Who'
import How from '@/components/demonight/How'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <How />
        <HowToParticipate/>
        <Who/>
        <Cta/>
    </div>
  )
}

const HowToParticipate = () => {
  return (
    <section className="p-6 bg-gray-100 hover:scale-95 rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-3xl mb-4 text-center font-bold text-gray-800">How to Participate</h2>
      <ul className="list-none p-0">
        <li className="mb-3 text-lg text-gray-700">
          <strong>Submit Your Pitch Deck</strong>: Send your pitch deck to our email <span className='text-black font-semibold'> info@degensummit.com </span> on our website before the event date.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Selection Process</strong>: Our panel of judges will review submissions and select finalists based on innovation, market potential, and scalability.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Live Presentation</strong>: Finalists will be invited to present their pitches live at Degen Summit in Singapore.
        </li>
      </ul>
    </section>
  );
}


export default page