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
    title: "Crypto Influencer of the Year",
    description: "Recognizing a key influencer driving the crypto conversation."
  },
  {
    title: "Most Influential Web3 Investor",
    description: "Honoring an investor whose decisions have significantly impacted the Web3 space."
  },
  {
    title: "Web3 Woman of the Year",
    description: "Recognizing a female leader making waves in the Web3 industry."
  },
  {
    title: "Crypto Analyst of the Year",
    description: "Awarding excellence in cryptocurrency analysis and insights."
  },
  {
    title: "Favorite Blockchain Expert",
    description: "Celebrating a popular expert known for deep blockchain knowledge."
  },
  {
    title: "Best NFT Creator",
    description: "Honoring the most innovative and impactful NFT creator."
  },
  {
    title: "Best Educational Resource",
    description: "Recognizing the best platform or individual for crypto and Web3 education."
  },
  {
    title: "Crypto Media Platform of the Year",
    description: "Celebrating the top media platform providing crypto news and insights."
  },
  {
    title: "PR and Marketing Agency of the Year",
    description: "Awarding excellence in PR and marketing services for the crypto industry."
  },
  {
    title: "Best Crypto Event Organizer",
    description: "Honoring the best organizer of cryptocurrency-related events."
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
    title: "Crypto On-Chain Analyst of the Year",
    description: "Awarding excellence in on-chain analysis for cryptocurrencies."
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
    title: "Pioneer in Web3 Marketing",
    description: "Honoring groundbreaking work in marketing within the Web3 space."
  },
  {
    title: "Most Innovative Web3 Founder",
    description: "Recognizing a founder whose innovative ideas are shaping the future of Web3."
  },
  {
    title: "Best Crypto Entrepreneur",
    description: "Recognizing exceptional leadership in the crypto space."
  },
  {
    title: "Best Crypto Centralised Exchange",
    description: "Celebrating excellence in centralized cryptocurrency exchanges."
  },
  {
    title: "Best Crypto Decentralised Exchange",
    description: "Honoring the top decentralized cryptocurrency exchange."
  },
  {
    title: "Best Exchange for Derivatives Trading",
    description: "Awarding the leading platform for derivatives trading."
  },
  {
    title: "Best Crypto Law Firm",
    description: "Acknowledging the premier legal firm in the crypto industry."
  },
  {
    title: "Best Crypto Lawyer",
    description: "Celebrating outstanding legal expertise in cryptocurrency."
  },
  {
    title: "Best Liquidity & MM Provider",
    description: "Recognizing excellence in liquidity and market-making services."
  },
  {
    title: "Best Trading App",
    description: "Awarding the top trading application in the crypto market."
  },
  {
    title: "Breakthrough of the Year",
    description: "Highlighting the most significant breakthrough in the crypto industry."
  },
  {
    title: "Best Crypto AI Project",
    description: "Celebrating innovation in AI within the cryptocurrency space."
  },
  {
    title: "Best Web3 Security Firm",
    description: "Honoring the leading security firm in the Web3 ecosystem."
  },
  {
    title: "Best Crypto Fund",
    description: "Recognizing the best-performing crypto investment fund."
  },
  {
    title: "Best Crypto Media",
    description: "Celebrating excellence in cryptocurrency media and journalism."
  },
  {
    title: "Best Layer-1 Solution",
    description: "Awarding the top Layer-1 blockchain solution."
  },
  {
    title: "Best Layer-2 Solution",
    description: "Honoring the leading Layer-2 blockchain solution."
  },
  {
    title: "Best Marketing Agency",
    description: "Recognizing exceptional marketing services in the crypto industry."
  },
  {
    title: "Best Web3 Gaming Project",
    description: "Celebrating innovation in blockchain-based gaming."
  },
  {
    title: "Meme Coin of the Year",
    description: "Highlighting the most impactful meme coin."
  },
  {
    title: "Social Influencer to Watch",
    description: "Recognizing a rising star in the crypto social media landscape."
  },
  {
    title: "Innovative NFT Project of the Year",
    description: "Celebrating groundbreaking innovation in the NFT space."
  },
  {
    title: "All 'Bout Connector of the Year",
    description: "Honoring exceptional networking and community-building in crypto."
  },
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
          <div className="px-4  mx-auto max-w-7xl lg:px-8">
        <p className="text-4xl font-bold text-center font-display text-primary">Award Categories</p>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-8">
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Oracle Excellence Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Bridging Real-World Data to Blockchain
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Interoperability Pioneer Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Bridging Blockchains Seamlessly
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Metaverse Maestro Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Leading Innovation in Blockchain VR
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Web3 Education Evangelist Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Fostering Global Understanding
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Social Impact Soldier Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Transforming Lives Through Blockchain
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Security Sentinel Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Safeguarding the Decentralized Frontier
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Gaming Guru Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Redefining Fun in Web3
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Community Catalyst Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Fostering Vibrant Web3 Communities
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Layer-2 Luminary Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Elevating Blockchain Efficiency
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Whisperers of Web3 Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Excellence in Web3 Journalism
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              UX/UI Unicorn Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Streamlined Web3 Adoption
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Staking Star Award 
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Excellence in Staking Solutions
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Best DWeb Pioneer Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Advancing Decentralized Privacy
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              ZKP Zenith Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Innovating Web3 Privacy with ZKPs
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Web3 Wallet Wizard Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Mastering Wallet Versatility
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Collaboration Catalyst Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Transforming Web3 Interaction
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Decentralized Identity Innovator Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Empowering User Privacy
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Frontier Financier Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Leading DeFi Excellence
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Governance Guru Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Empowering DAO Excellence
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              DeFi Derivative Dynamo Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Pioneering Innovation
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              Yield Farming Phenom Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Innovating Rewards
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
              <p className="text-lg font-semibold text-center text-white font-display">
              P2P Powerhouse Award
              </p>
              <p className="mt-2 text-sm font-medium text-center text-white/80">
              Upholding Decentralization Ideals
              </p>
            </div>
            <div className="p-6 transition-all ring-2 ring-purple-950 hover:shadow-xl shadow-md bg-indigo-700 rounded-2xl cursor-pointer hover:scale-95">
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
      </div>
      <How/>
      <Goals/>
    </div>
  );
}
