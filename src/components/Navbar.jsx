"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigationItems = [
    { href: "/#about", label: "Hero" },
    { href: "/#about", label: "Why Singapore" },
    { href: "/", label: "Agenda" },
    { href: "/#getinvolved", label: "Get Involved" },
    { href: "/#sponsors", label: "Sponsors" },
    { href: "/#speakers", label: "Speakers" },
    { href: "/#startup", label: "Startup" },
    { href: "/#awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];
  
export default function Navbar() {
  return (
    <Disclosure as="nav" className="  w-full ">
      {({ open,close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4  lg:px-8 my-2">
            <div className="flex h-16 justify-between">
              <div className="flex  items-center">
                <img
                  className="w-18 h-auto"
                  src="/logo.svg"
                  alt="Your Company"
                />
              </div>
              <div>
              <div className="hidden  shadow-nav py-6 px-10 rounded-full items-center justify-center lg:flex lg:space-x-6">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm hover:text-purple-600">
                {item.label}
              </Link>
            ))}
          </div>
              </div>

              <div className="md:flex hidden items-center gap-x-1">
                <button className="bg-purple-800 hover:bg-purple-600 hover:scale-95 px-6 py-2 text-white rounded-full">
                  Book Tickets
                </button>
                <Link href="https://calendly.com/abc_2024/30min" className="bg-purple-800 hover:bg-purple-600 hover:scale-95 px-6 py-2 text-white rounded-full">
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