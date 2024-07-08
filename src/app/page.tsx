import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";
import Clock from "@/components/Clock";

import WhySingapore from "@/components/WhySingapore";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main>
     <Marquee className=" py-2  bg-indigo-800 top-20  z-[10]">
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>

      </Marquee>

      <div className="h-screen">
        <div className="flex justify-center items-center absolute bg-cover">
          <video
            src="/degen.mp4 "
            className=" md:block hidden mx-auto  w-screen"
            autoPlay
            loop
            muted
            // controls
          ></video>
          <video
            src="/mobile.mp4 "
            className="h-screen block md:hidden w-full"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      {/* <Clock/> */}

      <Stats />

      <WhySingapore />
      <Marquee className=" py-2 mt-8 bg-indigo-800">
        <p className="text-base px-4 text-purple-100">#DeGen Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#DeGen Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
      </Marquee>

      <div>
        <Highlights />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              About us
            </h2>
            <p className="mt-6 md:text-xl text-md  text-white">
              Welcome to DeGEN Summit, the top event for Web3 fans globally.
              Join us as top company founders and executives discuss their views
              and perspectives on the blockchain market.
              <br />
              <br />
              At DeGEN, we bring together entrepreneurs, investors, developers,
              and worldwide media to explore the tremendous prospects in the
              blockchain ecosystem while also providing unrivaled networking
              opportunities. Be a member of the community that determines
              what&apos;s next in blockchain. Join us at DeGen to help define
              the future of blockchain.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/singapore.jpg"
                alt=""
                className="max-w-xs  md:max-w-xl rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Tickets/> */}
      <Sponsors />
      <Speakers />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8073578615144!2d103.8456123!3d1.2898457000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a01099b3eb%3A0x3e01c38ff3d2709!2sHUONE%20Singapore%20%7C%20Meeting%20and%20Event%20Venue!5e0!3m2!1sen!2sin!4v1720027375513!5m2!1sen!2sin"
        width="600"
        height="450"
        className="w-full"
        loading="lazy"
      ></iframe>
    </main>
  );
}
