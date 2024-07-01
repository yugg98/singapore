import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import startups from '@/images/demonight/startups.svg'
import investors from '@/images/demonight/investors.svg'
import innovators from '@/images/demonight/innovators.svg'
import Image from 'next/image'


const features = [
  {
    name: 'Startups',
    description:
      "If you're a Web3 startup looking to gain exposure, attract investors, and make your mark, Demo Night is the platform you need.",
    href: '#',
    icon: startups,
  },
  {
    name: 'Investors',
    description:
      "Discover the next big thing in Web3 and explore investment opportunities in a diverse range of industries.",
    href: '#',
    icon: investors,
  },
  {
    name: 'Innovators',
    description:
      "Whether you're a developer, entrepreneur, or industry enthusiast, Demo Night is the place to witness the forefront of Web3 innovation.",
    href: '#',
    icon: innovators,
  },
]

export default function Who() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl px-4 mx-auto lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <p className="mt-2 text-3xl font-bold text-purple-900 font-display sm:text-4xl">
          Who Should Attend?
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col p-8 transition-all duration-150 ease-in-out bg-purple-100 shadow-md cursor-pointer hover:scale-95 hover:shadow-2xl rounded-2xl">
                <dt className="flex items-center text-2xl font-semibold font-display text-purple-900 gap-x-3">
                  <Image alt={feature.name} src={feature.icon} />
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-4 text-base leading-7 text-gray-600">
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
