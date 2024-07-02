"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigationItems = [
  
    // { href: "/agenda", label: "Agenda" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/speakers", label: "Speakers" },
    // { href: "/startup", label: "Startup" },
    // { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];
  const getinvolved = [
    { name: "Media", href: "https://tally.so/r/mY09gd" },
    { name: "Community", href: "https://tally.so/r/mVQNdv" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Speakers", href: "/speakers" },
    { name: "Volunteer", href: "https://tally.so/r/w2aoZV" },
  ];
export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed z-[10] backdrop-blur-2xl   w-full color-indigo-400">
      {({ open,close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 py-4   lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex  items-center">
                <img
                  className="w-20 rounded-xl h-auto"
                  src="/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div>
              <div className="hidden  shadow-nav py-3 px-10 rounded-full items-center justify-center lg:flex lg:space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-lg font-bold text-white hover:text-purple-600">
                {item.label}
              </Link>
            ))}
            <Popover className="relative">
            <Popover.Button className="flex items-center p-2 text-lg font-semibold leading-6 text-white rounded hover:font-semibold  decoration-2 gap-x-1 focus:outline-none">
              Get Involved
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-purple-100"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-50 w-56 p-2 mt-3 bg-gray-900 shadow-lg -left-8 top-full rounded-xl ring-1 ring-gray-900/5">
                {getinvolved.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="block p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
          </div>
              </div>

              <div className="md:flex hidden items-center gap-x-1">
                {/* <Link href="/#tickets" className="bg-purple-800 hover:bg-purple-600 hover:scale-95 px-6 py-2 text-white rounded-full">
                  Book Tickets
                </Link> */}
                <Link href="https://calendly.com/degensummit" className="bg-purple-800 hover:bg-purple-600 hover:scale-95 px-6 py-2 text-white rounded-full">
                 Enquire
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Disclosure.Button>
                  <Bars3Icon className="w-8 text-gray-800 h-8" />
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 -translate-y-full scale-50" // starts from the top and invisible
            enterTo="opacity-100 translate-y-0 scale-100" // ends at its original position and fully visible
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 translate-y-0 scale-100" // starts from its original position and fully visible
            leaveTo="opacity-0 translate-y-full scale-95" // ends at the top and slightly scaled down
          >
            <Disclosure.Panel className="lg:hidden absolute w-full z-20 bg-white rounded-lg">
              <div className="space-y-1 pb-3 pt-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    onClick={close} 
                    href={item.href}
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}