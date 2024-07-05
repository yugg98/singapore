"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { name: "Global Attendees", value: 5000 },
  { name: "Renowned Speakers", value: 75 },
  { name: "Illuminating Seminars", value: 25 },
  { name: "Blockchain Developers", value: 1000 },
  { name: "Web3 Founders", value: 500 },
  { name: "Media Partners", value: 100 },
  { name: "Respected KOLs", value: 150 },
  { name: "Active Investors", value: 100 },
];
export default function Example() {
  return (
    <div className="relative top-[-180px]">
      <div className="mx-auto max-w-6xl relative z-[20]">
        <div className="grid gap-4 md:px-10 px-4 overflow-hidden rounded-2xl md:grid-cols-4 grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.name}
              className={`px-4 py-6 ${
             "sm:px-6 lg:px-8  flex flex-col transition-all  hover:shadow-xl  duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] bg-black to-slate-900 rounded-2xl cursor-pointer hover:scale-95  "
              }`}
              
            >
              <p className="mt-2 flex items-baseline gap-x-2 ">
                <span className="md:text-4xl text-md font-semibold tracking-tight text-white">
                  <CountUp start={0} end={stat.value} duration={2} />+
                </span>
              </p>
              <p className=" text-sm leading-6 text-white mt-4">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
