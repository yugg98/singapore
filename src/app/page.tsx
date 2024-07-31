import Speakers, { Speaker } from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import Tickets from "@/components/Tickets";
import Sponsors from "@/components/Sponsors";
import Stats from "@/components/Stats";
import Clock from "@/components/Clock";

import WhySingapore from "@/components/WhySingapore";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Marquee className=" py-2  bg-indigo-800 top-20  z-[10] ">
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

      <div className="h-[90vh]">
        <div className="relative isolate pt-14">
          <video
            src="/degen.mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-[110vh] object-cover z-[-1]"
          />

          <div className="py-12 sm:py-1">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-7xl mt-60 text-center">
                <h1 className="text-4xl uppercase mt-0 font-bold tracking-tight text-white sm:text-8xl">
                  DeGen Summit <br />{" "}
                  <span className="text-yellow-400"> Web3 </span> Conclave
                </h1>

                <div className="mt-10 flex items-center  hover:pb-20 justify-center gap-x-6">
                  <Link
                    href="/tickets"
                    className="rounded-md uppercase transition-all ease-in-out hover:scale-105   hover:bg-white bg-[#670B56] hover:text-purple-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Book Tickets
                  </Link>
                  {/* <Link
                    href="/contact"
                    className="rounded-md bg-[#670B56] hover:bg-purple-800 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Become A Sponsor
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Clock/> */}

      <Stats />

      <WhySingapore />
      <Marquee className=" py-2 mt-8 bg-indigo-800">
        <p className="text-base px-4 text-purple-100">#DeGen Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#DeGen Summit</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#Largest Web3 Event</p>
        <p className="text-base px-4 text-purple-100">#Web3 Event Singapore</p>
        <p className="text-base px-4 text-purple-100">#Web3 Summit</p>
        <p className="text-base px-4 text-purple-100">#16th SEP</p>
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
              Welcome to DeGEN Summit, after the success in London, Dubai, India
              and Hong Kong DeGen Summit is back in Singapore, <br />
              <br /> Join us as top company founders and executives discuss
              their views and perspectives on the blockchain market.
              <br />
              <br />
              This year, DeGen Summit also brings together web3.0 startups and
              VC&apos;s together in our demo eve where startups can get a chance
              to win thousands of dollars in grants, cash, services and various
              products!
              <br />
              <br />
              {/* We will also be organizing a KOL's night awards to felicitate the best in the crypto industry, the fun is just getting started, see you all in Singapore super soon! */}
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="/singapore.jpg"
                alt=""
                className="max-w-xs mx-auto  md:max-w-xl rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Tickets/> */}
      <Sponsors />
      <Speaker />
      <div className="mb-12 flex justify-center items-center">
        <button className=" flex justify-center items-center">
          <Link
            href="speakers"
            className="text-xl px-4 py-2 rounded-2xl bg-white text-center text-purple-800 "
          >
            View Our Previous Speaker
          </Link>
        </button>
      </div>
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
