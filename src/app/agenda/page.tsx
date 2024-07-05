"use client";
import { useState } from "react";
import Tabs from '../../components/Tabs'

const stats = [
  { id: 1, name: "Speakers", value: "100+" },
  { id: 2, name: "Attendees", value: "5000+" },
  { id: 3, name: "Panels", value: "10+" },
  { id: 4, name: "Partners", value: "750+" },
  { id: 4, name: "Sponsors", value: "200+" },
];

export default function Page() {
  return (
    <div>
     <div className="relative isolate overflow-hidden  bg-cover ">
        <div className="mx-auto max-w-7xl pt-36 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg ">
                <h1 className=" text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                  DeGen Summit 2024 India Agenda 
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-100">
               16th September 2024 <br/>
                Huone, 3D River Valley Rd, #03-01 Block D, Singapore 179023
                </p>
                
              </div>
            </div>
          </div>
          <div className=" md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className=" md:rounded-3xl">
              <div>
                <div className="relative px-6   md:pr-0">
                  <div className="mx-auto max-w-xl md:mx-0 md:max-w-md">
                    <img src="/hero.jpg" className="rounded-2xl" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 mx-auto max-w-7xl ">
        <h1 className="pt-6 text-xl font-bold tracking-tight text-center text-primary md:text-4xl sm:text-6xl">
          Exploring the Event&apos;s Blueprint: Tentative Agenda
        </h1>
        <Tabs />
      </div>
    </div>
  );
}