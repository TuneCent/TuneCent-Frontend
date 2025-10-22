"use client";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full flex flex-col gap-[1.528vw] justify-center items-center relative">
      {/* Background decorative element from Figma */}
      <div className="absolute top-[8.333vw] left-0 w-full h-[21.181vw] pointer-events-none overflow-hidden">
        <Image
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a25fd05f-6be1-437f-a7c1-26948d65c3db"
          alt="Abstract background waves"
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-col w-[68vw] text-center relative z-10">
        <p className="font-bold font-jakarta text-[5vw] text-white whitespace-nowrap">
          Because Every Tune
          <br />
          Deserves Every Cent
        </p>
      </div>
      <p className="font-regular font-jakarta text-[1.667vw] text-white text-center relative z-10">
        Own your sound. Earn your worth. No labels. No middlemen.
        <br />
        Just you and your listeners on chain
      </p>
      <div className="flex flex-row gap-[1.111vw] mt-[1.528vw] relative z-10">
        <button
          onClick={() => {}}
          className="flex items-center justify-center w-[16.25vw] h-[3.333vw] bg-[#552368] hover:bg-[#6b2d82] transition-colors rounded-[0.556vw] text-white font-jakarta font-medium text-[1.111vw]"
        >
          Discover Music
        </button>
        <button
          onClick={() => {}}
          className="flex items-center justify-center gap-[0.556vw] w-[16.25vw] h-[3.333vw] bg-[#552368] hover:bg-[#6b2d82] transition-colors rounded-[0.556vw] text-white font-jakarta font-medium text-[1.111vw]"
        >
          Earn your Cent
          <RiArrowRightLine size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
