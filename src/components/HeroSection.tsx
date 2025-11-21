import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-34">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center ">
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#7c3aed] vai-[#6d28d9]/30 to-transparent blur-3xl opacity-90"></div>
            <div>
              <Image
                src="/images/avatar.png"
                alt="avatar image"
                width={240}
                height={240}
                className="relative"
                priority
              />

              {/* small greeting with curve arrow */}
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                <div className="relative flex items-center justify-end">
                  <div className="relative w-16 h-6 md:w-24 md:h-16">
                    <Image 
                    src="/images/hero-arrow.png"
                    alt="arrow image" fill
                    className="object-contain scale-x-100 -rotate-6"
                    priority/>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              A designer who
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Judges a book</span>
              <span className="block">
                by its{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#7127BA]">cover</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                    <Image
                      src="/images/ellipse.png"
                      alt="arrow"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                ...
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        {/* role and description */}
      </div>
    </section>
  );
};

export default HeroSection;
