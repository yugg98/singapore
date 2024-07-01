import { ChevronRightIcon } from "@heroicons/react/20/solid";
import awards from "@/images/awards.svg";
import Image from "next/image";


export default function Hero() {
  return (
    <div>
      <div className="relative isolate overflow-hidden  bg-cover ">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg ">
                <h1 className=" text-4xl font-bold tracking-tight text-black sm:text-6xl">
                  Supercharge your web applications
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-900">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button className="bg-purple-900 px-6 py-3 text-white rounded-full">
                   Nominate Yourself
                  </button>
                  <button className="bg-purple-900 px-6 py-3 text-white rounded-full">
                   Nominate Others
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className=" md:rounded-3xl">
              <div>
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-xl md:mx-0 md:max-w-md">
                    <img src="/hero.jpg" className="rounded-2xl" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      <div className="bg-purple-50">
      <div className="px-4 py-20 mx-auto max-w-7xl lg:px-8">
        <p className="text-4xl font-bold text-center font-display text-purple-950">Award Categories</p>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Oracle Excellence Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Bridging Real-World Data to Blockchain
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Interoperability Pioneer Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Bridging Blockchains Seamlessly
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Metaverse Maestro Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Leading Innovation in Blockchain VR
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Web3 Education Evangelist Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Fostering Global Understanding
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Social Impact Soldier Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Transforming Lives Through Blockchain
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Security Sentinel Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Safeguarding the Decentralized Frontier
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Gaming Guru Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Redefining Fun in Web3
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Community Catalyst Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Fostering Vibrant Web3 Communities
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Layer-2 Luminary Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Elevating Blockchain Efficiency
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Whisperers of Web3 Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Excellence in Web3 Journalism
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              UX/UI Unicorn Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Streamlined Web3 Adoption
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Staking Star Award 
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Excellence in Staking Solutions
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Best DWeb Pioneer Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Advancing Decentralized Privacy
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              ZKP Zenith Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Innovating Web3 Privacy with ZKPs
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Web3 Wallet Wizard Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Mastering Wallet Versatility
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Collaboration Catalyst Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Transforming Web3 Interaction
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Decentralized Identity Innovator Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Empowering User Privacy
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Frontier Financier Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Leading DeFi Excellence
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Governance Guru Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Empowering DAO Excellence
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              DeFi Derivative Dynamo Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Pioneering Innovation
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Yield Farming Phenom Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Innovating Rewards
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              P2P Powerhouse Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Upholding Decentralization Ideals
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md hover:shadow-purple-950 duration-150 ease-in-out bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Web3 Analytics Ace Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Unveiling Insights
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}