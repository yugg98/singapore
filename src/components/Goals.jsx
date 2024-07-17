import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
  } from "@heroicons/react/20/solid";
  import GoalsIcon from "@/images/demonight/goals.svg";
  import { Image } from 'next/image';
  
  
  const features = [
    {
      name: "Global Impact",
      description:
        "Showcase projects that have made a positive impact on industries, communities, and society as a whole, setting new standards for Web3 solutions.",
      href: "#",
      icon: GoalsIcon,
    },
    {
      name: "Recognition for Efforts",
      description:
        "Acknowledge the hard work, dedication, and ingenuity of individuals and teams who have dedicated themselves to advancing the Web3 space.",
      href: "#",
      icon: GoalsIcon,
    },
    {
      name: "Amplifying Voices",
      description:
        "Offer a stage for visionary speakers to share insights, experiences, and visions that inspire collective action and drive Web3 transformation.",
      href: "#",
      icon: GoalsIcon,
    },
    {
      name: "Inspire Future Leaders",
      description:
        "Inspire the next generation of Web3 pioneers by highlighting remarkable success stories and breakthroughs that motivate others to drive change.",
      href: "#",
      icon: GoalsIcon,
    },
    {
      name: "Innovators",
      description:
        "Whether you're a developer, entrepreneur, or industry enthusiast, Demo Night is the place to witness the forefront of Web3 innovation.",
      href: "#",
      icon: GoalsIcon,
    },
  ];
  
  export default function How() {
    return (
      <div className="py-16 ">
        <div className="max-w-6xl px-4 mx-auto lg:px-8">
          <div className="max-w-2xl mx-auto lg:text-center">
            <p className="mt-2 text-3xl font-bold text-primary font-display sm:text-4xl">
              Awards Goals
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-16 sm:mt-10 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 mt-6 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col p-10 transition-all duration-150 ease-in-out bg-white shadow cursor-pointer hover:scale-95 rounded-2xl hover:bg-purple-100 hover:shadow-lg">
                  <dt className="flex items-center text-2xl font-semibold leading-7 text-purple-900">
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
    );
  }