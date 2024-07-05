import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
  } from "@heroicons/react/20/solid";
  
  const features = [
    {
      name: "Nomination Carnival",
      description:
        "Nomination fever ignites, stories of excellence flood in, and remarkable achievements come to light. A carnival of nominations unfolds, shortlisting the gems that radiate",
      href: "#",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Assessment Voyage",
      description:
        "Deep-dive into the world of nominees. Our Prestigious Jury gets started with rigorous evaluation commences, uncovering the profound impact of each contender. Deliberations forge a path to distinguish the exceptional from the extraordinary.",
      href: "#",
      icon: LockClosedIcon,
    },
    {
      name: "Victory Soiree",
      description:
        "The crescendo arrives. The gala night approaches, a virtual stage of recognition. Envelopes are unsealed, unveiling the victors of magnificence. A grand finale, etching their names in the annals of greatness.",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  const phases = [
    {
      name: "Phase 1",
      description: "(1st week of August)",
      href: "#",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Phase 2",
      description: "(2st week of November)",
      href: "#",
      icon: LockClosedIcon,
    },
    {
      name: "Phase 3",
      description: "(2nd Week of December)",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  
  export default function How() {
    return (
        <div className="py-16 =">
          <div className="max-w-6xl px-4 mx-auto lg:px-8">
            <div className="max-w-2xl mx-auto lg:text-center">
              <p className="mt-2 text-3xl font-bold text-primary font-display sm:text-4xl">
                Awards Process
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="mt-10 grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4">
                <div className="flex cursor-pointer flex-col rounded-2xl bg-purple-900 p-6 shadow transition-all duration-150 ease-in-out hover:scale-95 hover:bg-purple-800 hover:shadow-lg">
                <div className="flex flex-col items-center text-center mb-4">
                  <dt className="flex items-center text-lg font-semibold text-white/80 ">Phase 1</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base text-white/60"><p className="flex-auto">(1st week of July)</p></dd>
                </div>
                  <dt className="flex items-center text-xl font-semibold text-white">
                 Category Announcement
                    <div className="h-[0.5px] w-full bg-white"></div>
                  </dt>
                  {/* <dd className="mt-4 flex flex-auto flex-col text-base text-white/80"><p className="flex-auto">Nomination fever ignites, stories of excellence flood in, and remarkable achievements come to light. A carnival of nominations unfolds, shortlisting the gems that radiate</p></dd> */}
                </div>
                <div className="flex cursor-pointer flex-col rounded-2xl bg-purple-900 p-6 shadow transition-all duration-150 ease-in-out hover:scale-95 hover:bg-purple-800 hover:shadow-lg">
                <div className="flex flex-col items-center text-center mb-4">
                  <dt className="flex items-center text-lg font-semibold text-white/80">Phase 2</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base text-white/60"><p className="flex-auto">(1st week of August)</p></dd>
                </div>
                  <dt className="flex items-center text-xl font-semibold text-white">
                  DeGens Nomination
                    <div className="h-[0.5px] w-full bg-white"></div>
                  </dt>
                  {/* <dd className="mt-4 flex flex-auto flex-col text-base text-white/80"><p className="flex-auto">Deep-dive into the world of nominees. Our Prestigious Jury gets started with rigorous evaluation commences, uncovering the profound impact of each contender. Deliberations forge a path to distinguish the exceptional from the extraordinary.</p></dd> */}
                </div>
                <div className="flex cursor-pointer flex-col rounded-2xl bg-purple-900 p-6 shadow transition-all duration-150 ease-in-out hover:scale-95 hover:bg-purple-800 hover:shadow-lg">
                <div className="flex flex-col items-center text-center mb-4">
                  <dt className="flex items-center text-lg font-semibold text-white/80">Phase 3</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base text-white/60"><p className="flex-auto">(2nd Week of August)</p></dd>
                </div>
                  <dt className="flex items-center text-xl font-semibold text-white">
                   Virtual Voting
                    <div className="h-[0.5px] w-full bg-white"></div>
                  </dt>
                  {/* <dd className="mt-4 flex flex-auto flex-col text-base text-white/80"><p className="flex-auto">The crescendo arrives. The gala night approaches, a virtual stage of recognition. Envelopes are unsealed, unveiling the victors of magnificence. A grand finale, etching their names in the annals of greatness.</p></dd> */}
                </div>
                <div className="flex cursor-pointer flex-col rounded-2xl bg-purple-900 p-6 shadow transition-all duration-150 ease-in-out hover:scale-95 hover:bg-purple-800 hover:shadow-lg">
                <div className="flex flex-col items-center text-center mb-4">
                  <dt className="flex items-center text-lg font-semibold text-white/80">Phase 4</dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base text-white/60"><p className="flex-auto">(2nd Week of September)</p></dd>
                </div>
                  <dt className="flex items-center text-xl font-semibold text-white">
                   Awards Ceremany
                    <div className="h-[0.5px] w-full bg-white"></div>
                  </dt>
                  {/* <dd className="mt-4 flex flex-auto flex-col text-base text-white/80"><p className="flex-auto">The crescendo arrives. The gala night approaches, a virtual stage of recognition. Envelopes are unsealed, unveiling the victors of magnificence. A grand finale, etching their names in the annals of greatness.</p></dd> */}
                </div>
              </dl>
            </div>
  
          </div>
        </div>
    );
  }