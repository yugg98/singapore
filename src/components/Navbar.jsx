"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import TallyPopupButton from "./TallyPopupButton.jsx";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigationItems = [
  { href: "/sponsors", label: "Sponsors" },
  { href: "/speakers", label: "Speakers" },
  { href: "/contact", label: "Contact" },
  { href: "/awards", label: "Awards" },

];
const getinvolved = [
  { name: "Sponsors", href: "n0P7Ky" },
  { name: "Speakers", href: "wv2GMA" },
  { name: "Media", href: "3xZjGr" },
  { name: "Community", href: "wbO9aL" },
];
export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="absolute z-[10] backdrop-blur-2xl px-4  color-indigo-400  w-full color-indigo-400"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 py-4   lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex  items-center">
                <a href="/">
                  <img
                    className="w-16  h-auto"
                    src="/logo.png"
                    alt="Your Company"
                  />
                </a>
              </div>
              <div>
                <div className="hidden  shadow-nav py-3 px-10 rounded-full items-center justify-center lg:flex lg:space-x-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-bold text-white hover:text-purple-600"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Popover className="relative">
                    <Popover.Button className="flex items-center p-2 text-lg font-semibold leading-6 text-white hover:text-purple-600 rounded hover:font-semibold decoration-2 gap-x-1 focus:outline-none">
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
                      <Popover.Panel className="absolute flex flex-col justify-left z-50 w-56 p-2 mt-3 bg-gray-900 shadow-lg left-0 top-full rounded-xl ring-1 ring-gray-900/5">
                        {getinvolved.map((item) => (
                          <TallyPopupButton
                            key={item.name}
                            href={item.href}
                            label={item.name}
                            className="block w-full text-left justify-items-start p-2 px-3 py-2 text-sm font-semibold leading-6 text-white rounded-lg hover:font-semibold hover:bg-white/10 hover:underline hover:underline-offset-4 decoration-2 hover:bg-gray-800"
                          />
                        ))}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </div>
              </div>

              <div className="md:flex hidden items-center gap-x-1 mx-4">
                {/* <Link href="/#tickets" className="bg-purple-800 hover:bg-purple-600 hover:scale-95 px-6 py-2 text-white rounded-full">
                  Book Tickets
                </Link> */}
                <Link
                  href="https://calendly.com/degensummit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-700 bg-blue-900 hover:scale-95 px-6 py-2 text-white rounded-full"
                >
                  Enquire
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <Disclosure.Button>
                  <Bars3Icon className="w-8 text-gray-200 h-8" />
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
