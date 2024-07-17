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
        <div className="grid md:grid-cols-2  py-12 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
          <div className="max-w-2xl p-8 mx-auto transition-all duration-150 ease-in-out shadow-md cursor-pointer  hover:scale-95 hover:shadow-2xl bg-purple-50 rounded-2xl">
            <h2 className="text-3xl text-center font-semibold leading-7 text-indigo-900 font-display">
              What to Expect?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <ul className="list-disc">
                <li>
                  <strong>Pitch Presentation</strong>: Selected startups will
                  present their pitch decks live in Singapore, with 10 minutes
                  to captivate the judges.
                </li>
                <li>
                  <strong>Prizes and Grants</strong>: Up to 5 startups will be
                  awarded grants and prizes totaling up to $50,000 USD,
                  including cash, consulting services, and other valuable
                  products from our esteemed sponsors.
                </li>
                <li>
                  <strong>Networking Opportunities</strong>: Connect with
                  industry leaders, investors, and potential partners who can
                  accelerate your startup’s growth and success.
                </li>
                <li>
                  <strong>Exposure</strong>: Gain visibility among a global
                  audience of Web3 enthusiasts, investors, and media attendees
                  at Degen Summit 2024.
                </li>
              </ul>
            </p>
          </div>
          <div className="max-w-2xl p-8 mx-auto transition-all duration-150 ease-in-out shadow-md cursor-pointer lg:text-center hover:scale-95 hover:shadow-2xl bg-purple-50 rounded-2xl ">
            <h2 className="text-3xl font-semibold leading-7 text-indigo-900 font-display">
            Why Choose Degen Summit
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            <ul className="text-gray-600 text-left list-disc">
            <li >
              <strong>Expert Judging Panel</strong>: Gain insights and feedback
              from seasoned investors and industry experts.
            </li>
            <li>
              <strong>Valuable Prizes</strong>: Win funding and resources that
              can accelerate your startup’s growth trajectory.
            </li>
            <li>
              <strong>Global Stage</strong>: Showcase your innovation on an
              international platform known for pioneering ideas in Web3 and
              crypto technologies.
            </li>
            </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-purple-950">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl p-8 mx-auto text-center">
            <p className="mt-2 text-3xl font-bold text-primary font-display sm:text-4xl">
              How it works?
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-4 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col p-8 transition-all duration-150 ease-in-out bg-purple-900 shadow-md cursor-pointer hover:scale-95 hover:shadow-2xl rounded-2xl"
                >
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
