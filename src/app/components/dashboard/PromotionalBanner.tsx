import React from "react";

const PromotionalBanner = () => {
  return (
    <div className="w-full aspect-[1080/256] rounded-lg overflow-hidden relative group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      {/* Gradient Background - Purple theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#552368] via-[#8B609B] to-[#552368]" />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-row items-center justify-between px-[3.333vw] py-[1.667vw]">
        {/* Left Content */}
        <div className="flex flex-col gap-[0.556vw] max-w-[60%]">
          <span className="text-[0.833vw] font-medium text-white/90 uppercase tracking-wider">
            Limited Time Offer
          </span>
          <h2 className="text-[2.222vw] font-bold text-white font-jakarta leading-tight">
            Earn More with TuneCent Premium
          </h2>
          <p className="text-[0.972vw] text-white/90 font-light">
            Get exclusive access to premium features and boost your music revenue by up to 30%
          </p>
        </div>

        {/* Right Content - CTA Button */}
        <div className="flex flex-col items-end gap-[0.833vw]">
          <button className="bg-white text-[#552368] px-[2.222vw] py-[0.833vw] rounded-full font-semibold text-[0.972vw] hover:scale-105 transition-transform duration-200 shadow-lg">
            Get Started
          </button>
          <span className="text-white/80 text-[0.694vw] font-light">
            No credit card required
          </span>
        </div>
      </div>

      {/* Decorative Music Notes */}
      <div className="absolute top-[1.111vw] right-[8.333vw] text-white/20 text-[3.333vw] transform rotate-12">
        ♪
      </div>
      <div className="absolute bottom-[1.111vw] right-[12.778vw] text-white/20 text-[2.222vw] transform -rotate-12">
        ♫
      </div>
    </div>
  );
};

export default PromotionalBanner;
