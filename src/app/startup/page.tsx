import Cta from "@/components/demonight/Cta";
import Hero from "@/components/demonight/Hero";
import Who from "@/components/demonight/Who";
import How from "@/components/demonight/How";
import React from "react";
import Image from "next/image";

const page = () => {
  const items = [
    {
      name: "3",
      src: "v3.jpg",
    },
    {
      name: "1",
      src: "v1.jpg",
    },
    {
      name: "2",
      src: "v2.png",
    },

    {
      name: "4",
      src: "v4.png",
    },
    {
      name: "5",
      src: "v5.png",
    },
    {
      name: "5",
      src: "p1.jpeg",
    },
    
    {
      name: "5",
      src: "p2.png",
    },
    {
      name: "5",
      src: "p3.jpg",
    },
    {
      name: "6",
      src: "v6.jpeg",
    },
    {
      name: "6",
      src: "pf1.jpeg",
    },
    {
      name: "6",
      src: "ven.jpeg",
    },
    { src: "/logo8.jpg", name: "Image 3" },
    { src: "/m1.jpeg", name: "Image 4" },
    { src: "/brinc.png", name: "Image 4" },
    { src: "/out.webp", name: "Image 4" },
    { src: "/umas.jpeg", name: "Image 4" },
    { src: "/bl.jpeg", name: "Image 4" },

    { src: "/gr.png", name: "Image 4" },

  ];
  return (
    <div>
      <Hero />
      <How />
      <HowToParticipate />
      <div className="pt-8 pb-4 ">
        <div className="max-w-6xl px-6 mx-auto lg:px-8">
          <h2 className="text-3xl text-center capitalize font-bold tracking-tight text-primary sm:text-4xl">
            Our Partcipating Investors
          </h2>
          <div className="-mx-6 mt-6 grid grid-cols-2 md:grid-cols-4 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl">
            {items.map((item) => (
              <a
                target="_blank"
                key={item.name}
                href="https://cointelegraph.com/"
                className="p-8 bg-gray-50 sm:p-10 hover:bg-gray-100"
              >
                <img
                  className="object-contain w-full max-h-12 transform transition-transform duration-500 hover:scale-110"
                  src={item.src}
                  alt="cointelegraph"
                />
              </a>
            ))}

            {/* media partners ends */}
          </div>
        </div>
      </div>
      <Who />
      <Speaker/>
      <Cta />
    </div>
  );
};

const HowToParticipate = () => {
  return (
    <section className="p-6 bg-gray-100 hover:scale-95 rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-3xl mb-4 text-center font-bold text-gray-800">
        How to Participate
      </h2>
      <ul className="list-none p-0">
        <li className="mb-3 text-lg text-gray-700">
          <strong>Submit Your Pitch Deck</strong>: Send your pitch deck to our
          email{" "}
          <span className="text-black font-semibold">
            {" "}
            contact@degensummit.com{" "}
          </span>{" "}
          on our website before the event date.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Selection Process</strong>: Our panel of judges will review
          submissions and select finalists based on innovation, market
          potential, and scalability.
        </li>
        <li className="mb-3 text-lg text-gray-700">
          <strong>Live Presentation</strong>: Finalists will be invited to
          present their pitches live at Degen Summit in Singapore.
        </li>
      </ul>
    </section>
  );
};

import pf1 from '@/images/pf1.jpeg'
import pf2 from '@/images/pf2.jpeg'
import pf3 from '@/images/pf3.jpeg'
import pf4 from '@/images/pf4.jpeg'
import pf5 from '@/images/pf5.jpeg'

const first15People = [
  {
    name: "Donna Elizabeth Baines",
    role: " CEO ~ TruestoryXR ",
    imageUrl: pf1,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/donna-elizabeth-baines/",
  },
  {
    name: "Navodaya Singh Rajpurohit",
    role: "Legal Partner CoinQue Consulting",
    imageUrl: pf2,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/navodaya/",
  },
  {
    name: "Blockchain Sensei",
    role: "  ",
    imageUrl: pf3,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/company/blockchain-sensei/",
  },
  {
    name: "Tanishk Nigam",
    role: "Chief Executive Officer - Dodas",
    imageUrl: pf4,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/tanishknigam/",
  },
  {
    name: "Hemilly Rodrigues",
    role: " Founder & CEO RXCO ",
    imageUrl: pf5,
    location: "India",
    twitterUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/hemilly-rodrigues-4aa65a11b/",
  },
]
 function Speaker() {
  return (
    <div className=" py-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl capitalize font-bold tracking-tight text-primary sm:text-4xl">
            Pitch Fest Round - 1 Jury
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

export default page;
