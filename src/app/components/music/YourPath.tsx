const YourPath = () => {
  return (
    <div className="flex flex-col w-full p-[1.111vw] gap-[0.667vw]">
      <p className="font-jakarta text-white text-[1.389vw] font-bold">
        Your Path
      </p>
      <div className="w-full aspect-[1036/11] flex flex-row justify-between bg-[#B6ABBA]"></div>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row items-center w-[14.816vw] aspect-[214/38] text-white gap-[0.667vw]">
          <div className="w-[2.5vw] bg-black-lighter aspect-[1/1]"></div>
          <div className="font-jakarta flex flex-col gap-[0.111vw]">
            <p className="font-jakarta font-bold text-[1.111vw]">
              Registered Creator
            </p>
            <p className="font-jakarta font-regular text-[0.833vw] text-white">
              {" "}
              1 karya terdaftar di blockchain
            </p>
          </div>
        </div>
        <div className="flex flex-col font-jakarta text-end">
          <p className="text-[0.833vw] text-[#FFFEFF]">Final Goal</p>
          <p className="text-[1.111vw] text-[#FFFEFF]">Legendary Creator</p>
        </div>
      </div>
    </div>
  );
};

export default YourPath;
