
export default function Hero() {
  return (
    <div className="bg-cover bg-img">
      <div className="px-6 py-24 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary font-display sm:leading-normal sm:text-6xl">
          Introducing DeGen Summit Event
          </h1>
          <p className="max-w-3xl mt-6 text-lg leading-8 text-white/80">
          An extraordinary event that brings together visionary startups and enthusiastic investors, all under one roof with one agenda: To push through the limits of the Web3 arena.
          </p>
          <p className="mt-6 text-sm font-medium text-white/60">
          Register Now As
          </p>
          <div className="flex flex-col items-center w-full mt-3 space-y-4 lg:flex-row lg:space-y-0 gap-x-6">
            <a
              // href="https://tally.so/r/nP1r4b"
              className="w-full px-6 py-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm "
            >
               Web3 Startup
            </a>
            <a
            //  href="https://tally.so/r/n994xY"
             className="w-full px-6 py-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm ">
           Investor
            </a>
            <a 
            // href="https://tally.so/r/wkezgM" 
            className="w-full px-6 py-4 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm ">
             Incubators & Accelerators
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
