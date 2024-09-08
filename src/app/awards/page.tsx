import { ChevronRightIcon } from "@heroicons/react/20/solid";
import awards from "@/images/awards.svg";
import Image from "next/image";
import How from "@/components/How";
import Goals from "@/components/Goals";

// Dummy data for award categories
const awardCategories = [
  {
    title: "Web3 Influencer of the Year",
    description: "Celebrating the most influential voice in the Web3 community."
  },
  {
    title: "Crypto KOL of the Year",
    description: "Recognizing a key opinion leader driving the crypto conversation."
  },
  {
    title: "Most Influential Web3 KOL",
    description: "Honoring a KOL whose impact on the Web3 space is significant and far-reaching."
  },
  {
    title: "Web3 Woman KOL of the Year",
    description: "Recognizing a female KOL making waves in the Web3 industry."
  },
  {
    title: "Crypto Analyst of the Year",
    description: "Awarding excellence in cryptocurrency analysis and insights."
  },
  {
    title: "Favorite Blockchain Influencer",
    description: "Celebrating a popular influencer known for deep blockchain knowledge."
  },
  {
    title: "Most Informative Telegram Channel",
    description: "Recognizing the Telegram channel providing the best and most reliable crypto information."
  },
  {
    title: "Best Memecoin Influencer",
    description: "Honoring the most influential voice in the memecoin community."
  },
  {
    title: "Most Influential Memecoin Community",
    description: "Celebrating the memecoin community that has shown the greatest influence and engagement."
  },
  {
    title: "Best NFT KOL",
    description: "Honoring the most innovative and impactful KOL in the NFT space."
  },
  {
    title: "Best Educational Resource",
    description: "Recognizing the best platform or individual for crypto and Web3 education."
  },
  {
    title: "PR and Marketing Agency of the Year",
    description: "Awarding excellence in PR and marketing services for the crypto industry."
  },
  {
    title: "Top Crypto Podcaster of the Year",
    description: "Recognizing the most engaging and informative crypto podcaster."
  },
  {
    title: "Best YouTube Crypto Content Creator",
    description: "Celebrating the top content creator on YouTube for crypto-related content."
  },
  {
    title: "Lifetime Achievement Award",
    description: "Recognizing a pioneer who has made significant contributions to the development of Web3."
  },
  {
    title: "Rising Star Award",
    description: "Honoring a young individual with exceptional potential to shape the future of Web3."
  },
  {
    title: "Most Engaging Web3 Twitter Personality",
    description: "Recognizing the most engaging and influential Web3 personality on Twitter."
  },
  {
    title: "Best Web3 Podcast Host",
    description: "Celebrating the best host of a Web3-focused podcast."
  },
  {
    title: "Most Innovative Web3 KOL",
    description: "Recognizing a KOL whose innovative ideas are shaping the future of Web3."
  },
  {
    title: "Youngest Crypto Influencer of the Year (Under 18)",
    description: "Honoring the youngest influencer making significant contributions to the crypto space."
  },
  {
    title: "Most Engaging Crypto Twitter Account",
    description: "Recognizing the most engaging and influential crypto Twitter account."
  },
  {
    title: "Crypto Trendsetter of the Year",
    description: "Celebrating an individual setting trends and leading the way in the crypto industry."
  },
  {
    title: "Most Influential Crypto Blogger",
    description: "Honoring the blogger whose insights and influence have made a significant impact in the crypto world."
  },
  {
    title: "Best Crypto Discord Community Leader",
    description: "Recognizing the best leader of a crypto community on Discord."
  },
  {
    title: "Top Crypto TikTok Creator",
    description: "Celebrating the most engaging and informative crypto content creator on TikTok."
  }
];



export default function Hero() {
  return (
    <div>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-awards md:bg-cover md:bg-awards-mobile flex flex-col justify-end items-center">
        <div className="items-center max-w-6xl px-4 pt-32 pb-10 mx-auto lg:flex lg:px-8 ">
          <div className="flex-shrink-0 max-w-7xl mx-auto lg:mx-0 lg:max-w-5xl">
            <h1 className="text-4xl font-bold text-primary font-display sm:text-6xl text-center">DeGen Summit 2024 KOL Awards Night: Celebrating Trailblazers in Web3
            </h1>
            <p className="mt-6 text-lg text-center font-sato  text-gray-300">
            Get ready to applaud and celebrate the influencers who are shaping the future of Web3! Join us at the DeGen Summit 2024 KOL Awards Night for an unforgettable evening of recognition, excitement, and community spirit.
            </p>
            
          </div>
        
        </div>
        <div className="flex flex-col items-center w-[60%]   space-y-4 lg:flex-row lg:space-y-0 gap-x-6 ">
          <a
            href="https://tally.so/r/w4jV4k"
            className="w-full px-6 py-4 text-sm font-sato font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 text-center"
          >
            Nominate Yourself
          </a>
          <a
            href="https://tally.so/r/wkZxdr"
            className="w-full px-6 py-4 text-sm font-sato font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 text-center"
          >
            Nominate Others
          </a>
        </div>
        <div className="mt-10 flex mb-20 items-center gap-x-6 mx-auto">
                <a target="_blank" href="https://lu.ma/event/evt-k4z7L9tHl39kNVN" className="bg-green-600 px-5 py-3 rounded-lg">
                  Register Now
                </a>
              </div>
      </div>
      <div className="bg-grey-900">
    <div className="px-4 py-20 mx-auto max-w-7xl lg:px-8">
      <div className="">
        <div className="px-4 mx-auto max-w-7xl lg:px-8">
          <p className="text-4xl font-bold text-center font-display text-primary">
            Award Categories
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
              {awardCategories.map((award, index) => (
                <div
                  key={index}
                  className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-purple-800 rounded-2xl cursor-pointer hover:scale-95"
                >
                  <p className="text-lg font-semibold text-center text-white font-display">
                    {award.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-center text-white/80">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <How/>
      <DegenSummit/>
      <Goals/>
      <HowToParticipate/>
<Speaker/>
    </div>
  );
}

import React from 'react';

const HowToParticipate = () => {
  return (
    <section className="p-6 hover:scale-95 bg-white  rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-3xl mb-4 text-center font-bold text-purple-700">How to Participate?</h2>
      <ul className="list-none p-0">
        <li className="mb-3 text-lg text-gray-700">
          <strong>Vote</strong>: Visit our website and cast your votes for the KOLs who have inspired you the most in the Web3 category.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Attend</strong>: Secure your spot at the DeGen Summit 2024 KOL Awards Night and witness the excitement firsthand.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Connect</strong>: Network with influencers, investors, and fellow attendees in an atmosphere buzzing with energy and enthusiasm.
        </li>
      </ul>
    </section>
  );
}

import { AcademicCapIcon, SparklesIcon } from '@heroicons/react/20/solid';

const DegenSummit = () => {
  return (
      <div className="grid  grid-cols-1 max-w-5xl mx-auto md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg ">
          <AcademicCapIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-black mb-2">Honoring Web3&apos;s Finest</h3>
            <p className="text-gray-700">
              The Degen Summit KOL Awards Night is where we shine a spotlight on the visionaries, innovators, and influencers who have made a significant impact in the Web3 ecosystem. From thought leaders in decentralized finance to trailblazers in NFTs and beyond, we honor their contributions to shaping the digital landscape.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
          <SparklesIcon className="h-12 w-12 text-yellow-500 mr-4" />
          <div className="mt-4">
            <h3 className="text-xl text-black font-semibold mb-2">An Evening of Fun and Festivities</h3>
            <p className="text-gray-700">
              Join us for a night filled with entertainment, live performances, and networking opportunities with industry leaders and fellow enthusiasts. Celebrate alongside your favorite influencers as they receive their awards and share their visions for the future of Web3.
            </p>
          </div>
        </div>
      </div>
  );
}


import pf1 from '@/images/momin.jpeg'
import pf2 from '@/images/key.jpeg'
import pf3 from '@/images/eu.jpeg'
import pf4 from '@/images/ca.jpeg'

const first15People = [
  {
    name: "Momin Saqib",
    role: " Educationalist | Influencer & Actor ",
    imageUrl: pf1,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/donna-elizabeth-baines/",
  },
  {
    name: "Keyur Rohit",
    role: "Crypto Influencer | Computer Scientist",
    imageUrl: pf2,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/navodaya/",
  },
  {
    name: "Eunice D. Wong",
    role: " Crypto Trader, Advising Web3 projects on growth and marketing strategies ",
    imageUrl: pf3,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/company/blockchain-sensei/",
  },
  {
    name: "Carl Runefelt",
    role: "Entrepreneur | Investor | Speaker",
    imageUrl: pf4,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/tanishknigam/",
  },
  // {
  //   name: "Carl Runefelt",
  //   role: "Entrepreneur | Investor | Speaker",
  //   imageUrl: pf4,
  //   location: "India",
  //   twitterUrl: "",
  //   linkedinUrl: "https://www.linkedin.com/in/tanishknigam/",
  // },
]
 function Speaker() {
  return (
    <div className=" py-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl capitalize font-bold tracking-tight text-primary sm:text-4xl">
            KOL's Attending
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl gap-6 grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-8"
        >
          {first15People.map((person) => (
            <li
              key={person.name}
              className="p-4 transition-all card  duration-150 ease-in-out bg-indigo-900 hover:scale-105 rounded-xl hover:bg-orange-900 hover:shadow-md flex flex-col justify-between"
            >
              <Image
                className="mx-auto h-36 w-36 rounded-lg  md:h-40 md:w-40"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-white">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                {/* <li>
                  <a
                    href={person.xUrl}
                    className="text-white hover:text-grey-200"
                  >
                    <span className="sr-only">X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a
                    href={person.linkedinUrl}
                    className="text-white hover:text-grey-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
       
      </div>
    </div>
  );
}