import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
function Hero() {
  return (
    <div className="relative overflow-hidden bg-cover bg-img isolate">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#6F113E] to-[#090F20]"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="py-2 mt-20 bg-purple-700">
        <Marquee>
          <div className="flex items-center space-x-6">
            <p className="pl-6 text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">ABCconclave.com</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>

            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">ABCconclave.com</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">ABCconclave.com</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">ABCconclave.com</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
            <p className="text-2xl font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </p>
            <p className="text-2xl font-bold text-white">#FOMO Bird Offer</p>
          </div>
        </Marquee>
      </div>
      <div className="px-6 py-24 lg:px-8 lg:pb-40">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white font-display sm:leading-normal sm:text-6xl">
            Elevate Your Experience!
          </h1>
          <p className="max-w-3xl mt-6 text-lg leading-8 text-white/80">
            Step right into the future of innovation and blockchain technology
            with our exciting ticket options. Whether you&apos;re a curious
            community member, an industry enthusiast, or a true blockchain
            whale, we have the perfect package for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-4 mx-auto my-12 max-w-7xl sm:grid-cols-3 lg:px-8 sm:px-6">
        <div>
            <div className="border border-white/20 rounded-3xl">
              {/* <Image src={community} alt="map" className="w-full h-auto" /> */}
              <div className="flex items-center justify-between p-4">
                <div className="text-4xl font-bold tracking-wide text-white">
                  FREE
                </div>
               
              </div>
              <div className="flex flex-col px-4 pb-8 space-y-3">
                <a
                  href="https://docs.google.com/forms/d/1MB3C0ovpdWjz9Xt0A7EWRX38K8873Yhng8tkIDvIiJA"
                  title="Buy with Crypto"
                  className="bg-purple-400 text-center py-2 inline-block rounded-lg"
                >Buy Now</a>
               
                <ul
                  role="list"
                  className="pt-4 space-y-3 text-sm leading-6 text-left text-white/90"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    $1500 worth value
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Conference Hall
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Insightfull Sessions{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Gaming Zone{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Esports Arena{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Welcome Goodie{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-white/20 rounded-3xl">
              {/* <Image src={community} alt="map" className="w-full h-auto" /> */}
              <div className="flex items-center justify-between p-4">
                <div className="text-4xl font-bold tracking-wide text-white">
                  $199
                </div>
               
              </div>
              <div className="flex flex-col px-4 pb-8 space-y-3">
                <a
                  href="https://docs.google.com/forms/d/1MB3C0ovpdWjz9Xt0A7EWRX38K8873Yhng8tkIDvIiJA"
                  title="Buy with Crypto"
                />
                <a
                  href="https://in.explara.com/e/web3-carnival--2023-community-delight"
                  title="Buy with UPI"
                />
                <a
                  href="https://insider.in/web3-carnival-2023-dec4-2023/event"
                  title="Buy with EMI"
                />
                <ul
                  role="list"
                  className="pt-4 space-y-3 text-sm leading-6 text-left text-white/90"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    $1500 worth value
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Conference Hall
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Insightfull Sessions{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Gaming Zone{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Esports Arena{" "}
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                    Welcome Goodie{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-white/20 rounded-3xl">
              {/* <Image src={community} alt="map" className="w-full h-auto" /> */}
              <div className="flex items-center justify-between p-4">
                <div className="text-4xl font-bold tracking-wide text-white">
                  $399
                </div>
                <div className="flex flex-col justify-center">
                
                </div>
              </div>
              <div className="flex flex-col px-4 pb-8 space-y-3">
                <a
                  href="https://docs.google.com/forms/d/1MB3C0ovpdWjz9Xt0A7EWRX38K8873Yhng8tkIDvIiJA"
                  title="Buy with Crypto"
                />
                <a
                  href="https://in.explara.com/e/web3-carnival--2023-community-delight"
                  title="Buy with UPI"
                />
                <a
                  href="https://insider.in/web3-carnival-2023-dec4-2023/event"
                  title="Buy with EMI"
                />
                <ul
                  role="list"
                  className="pt-4 space-y-3 text-sm leading-6 text-left text-white/90"
                >
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                   Business +
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                  $4500 worth value
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                  $4500 worth value
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                 Vip Seat
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                  Elite Experience
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                 International Buffet Luncheon
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                 Gala Networking Dinner
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                Exclusive After Party
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                Networking Lounge
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="flex-none w-5 h-6 text-amber-500"
                      aria-hidden="true"
                    />
                 Speaker Lounge
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const page = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default page;
