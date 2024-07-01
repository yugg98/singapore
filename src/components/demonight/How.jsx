import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Explore",
    description:
      "Engage with startups showcasing their products, technologies, and visions.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Connect",
    description:
      "Network with founders, exchange insights, and evaluate investment prospects.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Invest",
    description:
      "Identify the projects that align with your investment goals and contribute to shaping the Web3 landscape.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function How() {
  return (
      <div className="">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col items-start justify-between py-12 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
            <div className="max-w-2xl p-8 mx-auto transition-all duration-150 ease-in-out shadow-md cursor-pointer lg:text-center hover:scale-95 hover:shadow-2xl bg-purple-50 rounded-2xl">
              <h2 className="text-3xl font-semibold leading-7 text-purple-900 font-display">
                What to Expect?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                repare to be amazed as the brightest minds in the Web3 space
                showcase their cutting-edge innovations. Demo Night is your
                chance to get an exclusive first look at the technologies and
                solutions that are shaping the future of industries.
              </p>
            </div>
            <div className="max-w-2xl p-8 mx-auto transition-all duration-150 ease-in-out shadow-md cursor-pointer lg:text-center hover:scale-95 hover:shadow-2xl bg-purple-50 rounded-2xl ">
              <h2 className="text-3xl font-semibold leading-7 text-purple-900 font-display">
                Why Fundraise Here?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience the electric atmosphere as passionate founders
                present their ideas and seek the support they need to transform
                industries. Be part of the momentum driving Web3 innovation
                forward.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-purple-950">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl p-8 mx-auto text-center">
              <p className="mt-2 text-3xl font-bold text-white font-display sm:text-4xl">
                How it works?
              </p>
            </div>
            <div className="max-w-2xl mx-auto mt-4 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col p-8 transition-all duration-150 ease-in-out bg-purple-900 shadow-md cursor-pointer hover:scale-95 hover:shadow-2xl rounded-2xl">
                    <dt className="flex items-center text-base font-semibold text-white">
                      {feature.name}
                      <div className="w-full h-[0.5px] bg-white"></div>
                    </dt>
                    <dd className="flex flex-col flex-auto mt-4 text-base text-white/80">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
  );
}
