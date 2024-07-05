import { useState } from "react";
import { Tab } from "@headlessui/react";
import data from "./scheduledata.json";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  return (
    <div className="w-full max-w-6xl px-4 pb-10 mx-auto lg:px-8">
      <Tab.Group>
       
        <Tab.Panels className="">
         
          {data.map((categories) => (
            <Tab.Panel
              key={categories.Day}
            >
               
                 
              {categories.Agenda.map((data) => (
                 <div key={data.Topics}>
                
                 <div className="flex mt-6">
                   <div className="flex flex-col w-full space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                     <div className="max-w-[100px] w-full">
                       <div className="w-full px-2 py-1 text-center text-white bg-purple-600 rounded">
                         {data.Time.slice('','5')} 
                       </div>
                     </div>
                     <div className="w-full p-6 duration-150 ease-in-out border border-gray-200 rounded shadow-inner cursor-pointer bg-gray-50 hover:shadow-md hover:bg-purple-100 hover:border-purple-200 hover:scale-95 transistion-all">
                       <div className="flex flex-wrap px-2 py-1 text-sm font-medium text-gray-900 md:text-base">
                         <span>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="w-6 h-6 mb-2 mr-2 text-gray-400 sm:mb-0"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                             />
                           </svg>
                         </span>
                        {data.Time} | Duration {data.Duration}
                       </div>
                       {/* <div className="flex flex-wrap px-2 py-1 text-sm font-medium text-gray-900 md:text-base">
                         <span>
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth={1.5}
                             stroke="currentColor"
                             className="w-6 h-6 mb-2 mr-2 text-gray-400 sm:mb-0"
                           >
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                             />
                             <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                             />
                           </svg>
                         </span>
                         Location: TBA
                       </div> */}
                       <div className="px-2 py-1 my-6 text-xl font-bold text-gray-900 md:text-2xl font-display">
                       {data.Topics ? data.Topics : "Lunch"}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}