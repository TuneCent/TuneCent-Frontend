import { ArrowUpRight } from "react-feather";

const PerbandinganROI = () => {
  const lihatRiwayatPembayaran = () => {};

  return (
    <div className="w-full flex flex-col p-[0.778vw] bg-neutral-black-base gap-[0.889vw]">
      <p className="text-white font-bold font-jakarta text-[1.111vw]">
        Comparison
      </p>
      <div className="w-full bg-[#8B609B] aspect-[570/9]"></div>
      <div className="w-full flex flex-row justify-between">
        <p className="text-[0.972vw] font-regular text-white font-jakarta">
          ROI Industry Average
        </p>
        <div className="flex flex-row gap-[0.556vw]">
          <p className="text-[0.972vw] text-[#FFFEFF]">65%</p>
          <ArrowUpRight size={18} color="white" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p className="text-[0.972vw] font-regular text-white font-jakarta">
          ROI Pool Platform
        </p>
        <div className="flex flex-row gap-[0.556vw]">
          <p className="text-[0.972vw] text-[#FFFEFF]">100%</p>
          <ArrowUpRight size={18} color="white" />
        </div>
      </div>
      <button
        onClick={lihatRiwayatPembayaran}
        className="cursor-pointer w-full aspect-[996/49] text-white bg-purple-base flex flex-row justify-center items-center gap-[0.667vw]"
      >
        <ArrowUpRight size={20} />
        <p className="font-jakarta font-medium text-[0.972vw]">
          Show All in Pool History
        </p>
      </button>
    </div>
  );
};

export default PerbandinganROI;
