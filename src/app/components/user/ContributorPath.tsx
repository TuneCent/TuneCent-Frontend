"use client";

export interface ContributorPathProps {
  currentLevel: string;
  currentDescription: string;
  progressPercentage: number;
  finalGoal: string;
  iconUrl?: string;
}

const ContributorPath = ({
  currentLevel,
  currentDescription,
  progressPercentage,
  finalGoal,
  iconUrl,
}: ContributorPathProps) => {
  return (
    <div className="flex flex-col w-full p-[1.111vw] gap-[0.667vw]">
      <p className="font-jakarta text-white text-[1.389vw] font-bold">
        Your Path
      </p>
      <div className="w-full aspect-[1036/11] flex flex-row bg-[#2B252D] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#B6ABBA] transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center w-[14.816vw] aspect-[214/38] text-white gap-[0.667vw]">
          <div className="w-[2.5vw] bg-black-lighter aspect-[1/1] rounded-full flex items-center justify-center overflow-hidden">
            {iconUrl ? (
              <img
                src={iconUrl}
                alt="Level icon"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-700"></div>
            )}
          </div>
          <div className="font-jakarta flex flex-col gap-[0.111vw]">
            <p className="font-jakarta font-bold text-[1.111vw]">
              {currentLevel}
            </p>
            <p className="font-jakarta font-regular text-[0.833vw] text-white">
              {currentDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col font-jakarta text-end">
          <p className="text-[0.833vw] text-[#FFFEFF]">Final Goal</p>
          <p className="text-[1.111vw] text-[#FFFEFF]">{finalGoal}</p>
        </div>
      </div>
    </div>
  );
};

export default ContributorPath;
