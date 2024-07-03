import Image from "next/image";

import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";

import Marquee from "react-fast-marquee";
import { useRef } from 'react';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center bg-cover">
        <video  src="/degen.mp4 " autoPlay  muted></video>
      </div>
      <div id="why" className="mt-1 overflow-hidden sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Why Sinagapore?
              </h2>
              <p className="mt-6 text-xl leading-8 text-white">
              Singapore stands as a beacon of progress and innovation, 
              making it the perfect setting for the DeGen Summit. 
              With its crypto-friendly regulatory environment, 
              vibrant tech scene, and diverse population, Singapore 
              attracts over 25,000 crypto enthusiasts to network, innovate,
               and capitalize on bullish opportunities in the Web3 space.
                This global gathering underscores Singapore's role as a leading hub for blockchain technology and its readiness 
                to embrace the future of decentralized finance.
                It’s the perfect setting for the DeGen Summit for several
                compelling reasons:
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="/singapore1.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Marquee className=" py-2 mt-8 bg-indigo-800">
        <p className="text-base px-4 text-purple-100">#DegenCode Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#DegenCode Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
      </Marquee> */}
      
      <div>
        <Highlights />
      </div>
      <div className="mt-1 overflow-hidden sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                About us
              </h2>
              <p className="mt-6 text-xl leading-8 text-white">
                Welcome to DeGEN Summit, the top event for Web3 fans globally.
                Join us as top company founders and executives discuss their
                views and perspectives on the blockchain market.
                <br />
                <br />
                At DeGEN, we bring together entrepreneurs, investors,
                developers, and worldwide media to explore the tremendous
                prospects in the blockchain ecosystem while also providing
                unrivaled networking opportunities. Be a member of the community
                that determines what&apos;s next in blockchain. Join us at DeGen
                to help define the future of blockchain.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  src="/singapore.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Tickets/> */}
      <Sponsors />
      <Speakers />
    </main>
  );
}
