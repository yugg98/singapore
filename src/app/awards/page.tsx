import { ChevronRightIcon } from "@heroicons/react/20/solid";
import awards from "@/images/awards.svg";
import Image from "next/image";
import How from "@/components/How";
import Goals from "@/components/Goals";

// Dummy data for award categories
const awardCategories = [
  {
    title: "Web3 Influencer of the Year",
    description: "Celebrating the most influential voice in the Web3 community."
  },
  {
    title: "Crypto KOL of the Year",
    description: "Recognizing a key opinion leader driving the crypto conversation."
  },
  {
    title: "Most Influential Web3 KOL",
    description: "Honoring a KOL whose impact on the Web3 space is significant and far-reaching."
  },
  {
    title: "Web3 Woman KOL of the Year",
    description: "Recognizing a female KOL making waves in the Web3 industry."
  },
  {
    title: "Crypto Analyst of the Year",
    description: "Awarding excellence in cryptocurrency analysis and insights."
  },
  {
    title: "Favorite Blockchain Influencer",
    description: "Celebrating a popular influencer known for deep blockchain knowledge."
  },
  {
    title: "Most Informative Telegram Channel",
    description: "Recognizing the Telegram channel providing the best and most reliable crypto information."
  },
  {
    title: "Best Memecoin Influencer",
    description: "Honoring the most influential voice in the memecoin community."
  },
  {
    title: "Most Influential Memecoin Community",
    description: "Celebrating the memecoin community that has shown the greatest influence and engagement."
  },
  {
    title: "Best NFT KOL",
    description: "Honoring the most innovative and impactful KOL in the NFT space."
  },
  {
    title: "Best Educational Resource",
    description: "Recognizing the best platform or individual for crypto and Web3 education."
  },
  {
    title: "PR and Marketing Agency of the Year",
    description: "Awarding excellence in PR and marketing services for the crypto industry."
  },
  {
    title: "Top Crypto Podcaster of the Year",
    description: "Recognizing the most engaging and informative crypto podcaster."
  },
  {
    title: "Best YouTube Crypto Content Creator",
    description: "Celebrating the top content creator on YouTube for crypto-related content."
  },
  {
    title: "Lifetime Achievement Award",
    description: "Recognizing a pioneer who has made significant contributions to the development of Web3."
  },
  {
    title: "Rising Star Award",
    description: "Honoring a young individual with exceptional potential to shape the future of Web3."
  },
  {
    title: "Most Engaging Web3 Twitter Personality",
    description: "Recognizing the most engaging and influential Web3 personality on Twitter."
  },
  {
    title: "Best Web3 Podcast Host",
    description: "Celebrating the best host of a Web3-focused podcast."
  },
  {
    title: "Most Innovative Web3 KOL",
    description: "Recognizing a KOL whose innovative ideas are shaping the future of Web3."
  },
  {
    title: "Youngest Crypto Influencer of the Year (Under 18)",
    description: "Honoring the youngest influencer making significant contributions to the crypto space."
  },
  {
    title: "Most Engaging Crypto Twitter Account",
    description: "Recognizing the most engaging and influential crypto Twitter account."
  },
  {
    title: "Crypto Trendsetter of the Year",
    description: "Celebrating an individual setting trends and leading the way in the crypto industry."
  },
  {
    title: "Most Influential Crypto Blogger",
    description: "Honoring the blogger whose insights and influence have made a significant impact in the crypto world."
  },
  {
    title: "Best Crypto Discord Community Leader",
    description: "Recognizing the best leader of a crypto community on Discord."
  },
  {
    title: "Top Crypto TikTok Creator",
    description: "Celebrating the most engaging and informative crypto content creator on TikTok."
  }
];



export default function Hero() {
  return (
    <div>
      <div className="bg-[url('/awards.jpg')] bg-cover bg-no-repeat bg-awards md:bg-cover md:bg-awards-mobile flex flex-col justify-end items-center">
        <div className="items-center max-w-6xl px-4 pt-32 pb-10 mx-auto lg:flex lg:px-8 ">
          <div className="flex-shrink-0 max-w-7xl mx-auto lg:mx-0 lg:max-w-5xl">
            <h1 className="text-4xl font-bold text-primary font-display sm:text-6xl text-center">Awards</h1>
            <p className="mt-6 text-lg text-center font-sato  text-gray-300">
              Honoring the trailblazers who have made exceptional contributions
              to the field. Nominees will be selected and winners chosen by the
              esteemed community in different categories. Participate in this
              grand celebration of digital innovation and excellence. We begin
              by inviting nominations for various categories within the
              Industry, celebrating the exceptional contributions of companies.
              The power to select the winners is given to our vibrant community.
              Voting will take place across all our social media channels,
              including Telegram To ensure all votes are accounted for, the
              voting process will be closed one day before the event. Winners
              will be announced during the conference.
            </p>
          
          </div>
         
        </div>
        <div className="flex flex-col items-center w-[60%]  mb-20 space-y-4 lg:flex-row lg:space-y-0 gap-x-6 ">
          <a
            // href="https://tally.so/r/wL7Og1"
            className="w-full px-6 py-4 text-sm font-sato font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 text-center"
          >
            Nominate Yourself
          </a>
          <a
            // href="https://tally.so/r/npyzMb"
            className="w-full px-6 py-4 text-sm font-sato font-semibold text-purple-600 bg-white rounded-md shadow-sm hover:bg-gray-100 text-center"
          >
            Nominate Others
          </a>
        </div>
      </div>
      <div className="bg-grey-900">
    <div className="px-4 py-20 mx-auto max-w-7xl lg:px-8">
      <div className="">
        <div className="px-4 mx-auto max-w-7xl lg:px-8">
          <p className="text-4xl font-bold text-center font-display text-primary">
            Award Categories
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
              {awardCategories.map((award, index) => (
                <div
                  key={index}
                  className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-purple-800 rounded-2xl cursor-pointer hover:scale-95"
                >
                  <p className="text-lg font-semibold text-center text-white font-display">
                    {award.title}
                  </p>
                  <p className="mt-2 text-sm font-medium text-center text-white/80">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <How/>
      <Goals/>
    </div>
  );
}
