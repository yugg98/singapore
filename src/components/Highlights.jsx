import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features =  [
  {
    "name": "25K+ Web3 Crowd!",
    "image":"/f6.jpeg",

    "description": "Attracting a massive gathering of 25,000+ crypto enthusiasts, Singapore becomes a vibrant hub for networking and innovation in the Web3 space."
  },
  {
    "name": "Crypto Friendly!",
    "image":"/f5.jpeg",

    "description": "Known for its progressive regulatory environment, it fosters a crypto-friendly atmosphere, encouraging the growth and adoption of blockchain technologies."
  },
  {
    "name": "Innovation at its Core!",
  "image":"/f10.jpeg",

    "description": "Singapore is synonymous with cutting-edge technology and ambitious projects, mirroring the pioneering spirit of the Web3 community."
  },
  {
    "name": "Bull Market!",
    "image":"/f7.jpeg",

    "description": "With the market in an upward trend, it is the  perfect time for investors and entrepreneurs to capitalize on bullish opportunities in the crypto world."
  },
  
]
export default function Example() {
  return (
    <div className="my-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <img src="/gr2.png" alt="" />
    
        <div className="mx-auto  max-w-2xl   lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (

             <div key={feature.name} className="flex flex-col p-5 px-6 transition-all   hover:shadow-xl  duration-150 ease-in-out bg-black from-slate-900 via-[#6B21A8] to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <img src={feature.image} className="rounded-sm" />
             <dt className="flex flex-col mt-4 text-lg font-semibold leading-7 text-white md:items-center md:flex-row md:text-2xl font-display gap-x-4">
               {feature.name}
             </dt>
             <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-white/80">
               <p className="flex-auto">{feature.description}</p>
             </dd>
           </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
