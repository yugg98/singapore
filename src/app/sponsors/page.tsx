import React from 'react'
import Sponsors from '@/components/Sponsors'
const page = () => {
  return (
    <div>
    <div className="relative isolate overflow-hidden mt-10 bg-cover ">
    <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
      <div className="px-6 lg:px-0 lg:pt-4">
        <div className="mx-auto max-w-2xl">
          <div className="max-w-lg ">
            <h1 className=" text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Supercharge your web applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-900">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
              qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
              occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="bg-purple-900 px-6 py-3 text-white rounded-full">
               Nominate Yourself
              </button>
              <button className="bg-purple-900 px-6 py-3 text-white rounded-full">
               Nominate Others
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
        <div className=" md:rounded-3xl">
          <div>
            <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
              <div className="mx-auto max-w-xl md:mx-0 md:max-w-md">
                <img src="/hero.jpg" className="rounded-2xl" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
  </div>
  <Sponsors/>
  </div>
  )
}

export default page