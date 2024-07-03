import Link from "next/link";
import React from "react";

const Whydubai = () => {
  return (
    <div className="mt-16 overflow-hidden border-0 ">

      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 border-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 border-0 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <img src="/glowgr.svg"  className="absolute left-0 w-[1000px] z-[-1]" alt="" srcset="" />

            <h2 className="text-3xl font-bold tracking-tight text-purple-700 sm:text-5xl">
            Why Sinagapore?

            </h2>
            <p className="mt-6 text-lg font-sato  text-gray-100">
            Singapore stands as a beacon of progress and innovation, making it the perfect setting for the DeGen Summit. With its crypto-friendly regulatory environment, vibrant tech scene, and diverse population, Singapore attracts over 25,000 crypto enthusiasts to network, innovate, and capitalize on bullish opportunities in the Web3 space. 


            </p>
            <p className="mt-6 text-base mb-6 font-sato  text-gray-100">
            This global gathering underscores Singapore&apos;s role as a leading hub for blockchain technology and its readiness to embrace the future of decentralized finance. It’s the perfect setting for the DeGen Summit for several compelling reasons:
            </p>
            <Link
              href="https://calendly.com/degensummit"
              className="rounded-md bg-indigo-600  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm mt-10 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Learn More
            </Link>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/f1.jpeg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="/f2.jpeg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="/f3.jpeg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="/f4.jpeg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whydubai;
