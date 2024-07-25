import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";

export default function Cta() {
  return (
    <div className="">
      <div className="max-w-6xl py-16 mx-auto lg:px-8">
        <div className="relative px-6 py-8 overflow-hidden shadow-2xl bg-purple-950 isolate sm:rounded-2xl">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="w-full max-w-3xl mx-auto text-left lg:text-center lg:flex-auto lg:py-16">
            <h2 className="text-3xl font-bold text-white font-display sm:leading-normal sm:text-4xl">
            Join Us at Degen Summit 2024

            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Don&apos;t miss your chance to be part of the future of innovation. Submit your pitch deck today and prepare to make your mark at Degen Summit 2024. Together, let’s shape the future of Web3 and crypto technologies.
            </p>

            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center">
                <CalendarIcon className="w-8 h-8 mr-4 text-white" />
                <p className="text-white">
                 Monday, 16th September
                </p>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-8 h-8 mr-4 text-white" />
                <p className="text-white">Singapore</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 space-y-4 lg:space-y-0 gap-x-6 lg:justify-start">
              <p className="mb-2 text-lg font-semibold mb-6 text-white/80">
                Register Now As
              </p>
              <div className="flex gap-x-8">
              <a
              href="https://tally.so/r/n9l5qE"
             className="w-full px-6 py-4 flex items-center justify-center  font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100"
            >
               Web3 Startup 
            </a>
            <a 
            href="https://tally.so/r/nP0Qyx" 
           className="w-full px-6 py-4  font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100">
             Incubators, Investors & Accelerators
            </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
