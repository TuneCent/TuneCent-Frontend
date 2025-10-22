"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col gap-[1.528vw] justify-center items-center relative">
      {/* Background decorative element from Figma */}
      <div className="absolute top-[12vw] left-0 w-full h-[21.181vw] pointer-events-none overflow-hidden">
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
      <div className="w-[60vw] flex flex-row justify-center gap-[1.111vw]">
        <button
          onClick={() => {
            router.push("/user/home");
          }}
          className="cursor-pointer w-[16.25vw] flex flex-row aspect-[492/48] justify-center items-center rounded-[0.556vw] bg-transparent border-[0.069vw] border-purple-base p-[1.111vw]"
        >
          <p className="text-[0.972vw] text-white font-jakarta text-white-lighter">
            Discover Music
          </p>
        </button>
        <button
          onClick={() => {
            router.push("/musician/dashboard");
          }}
          className="cursor-pointer w-[16.25vw] flex flex-row aspect-[408/36] justify-center items-center rounded-[0.556vw] bg-purple-base p-[1.111vw]"
        >
          <p className="text-[0.972vw] text-white font-jakarta text-white-lighter">
            Earn Your Cent
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
