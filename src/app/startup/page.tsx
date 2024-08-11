import Cta from "@/components/demonight/Cta";
import Hero from "@/components/demonight/Hero";
import Who from "@/components/demonight/Who";
import How from "@/components/demonight/How";
import React from "react";

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

    { src: "/logo8.jpg", name: "Image 3" },
    { src: "/m1.jpeg", name: "Image 4" },

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

export default page;
