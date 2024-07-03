"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function SponsorSection() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e:any) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
      <div className="px-6 lg:px-0 lg:pt-4">
        <div className="mx-auto max-w-2xl mt-20">
          <div className="max-w-lg ">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Become a Sponsor
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              At DeGen Summit, we present exclusive sponsorship packages
              designed to align with your brand&apos;s vision, budget, and
              marketing aspirations.
              <br />
              <br />
              From prime exhibition spaces to impactful branding suites,
              DeGen Summit brings you a range of tailored opportunities for
              maximum visibility and meaningful connections.
            </p>
            <div className="mt-10 flex md:flex-nowrap flex-wrap items-center gap-x-6">
              <input
                required
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                id="email"
                className="block md:w-1/2 w-full px-6 py-4 text-white bg-transparent border-0 rounded-md shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              {isValidEmail ? (
                <Link
                  href="DeGENSummitDeck.pdf"
                  className="md:w-1/2 w-full px-6 text-center py-4 mt-4 text-md font-semibold text-purple-100 bg-indigo-600 rounded-md shadow-sm md:mt-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Request Sponsorship Deck
                </Link>
              ) : (
                <button
                  disabled
                  className="md:w-1/2 w-full px-6 text-center py-4 mt-4 text-md font-semibold text-purple-300 bg-indigo-400 rounded-md shadow-sm md:mt-0 cursor-not-allowed"
                >
                  Enter valid email
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-auto md:max-w-4xl lg:mx-0 lg:mt-20 lg:w-screen">
        <div className="md:rounded-3xl">
          <div>
            <div className="relative px-6 pt-8 md:pr-0">
              <div className="mx-auto max-w-xl md:mx-0 md:max-w-xl">
                <img src="/s.jpeg" className="rounded-2xl" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}