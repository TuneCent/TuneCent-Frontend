import DanaChart from "../dashboard/DanaChart";
import { ArrowUp } from "react-feather";

const PortofolioValue = () => {
  return (
    <div className="w-[38.194vw] flex flex-col justify-between bg-black rounded-[1.042vw]p-[1.883vw]">
      <div className="flex flex-col gap-[0.111vw]">
        <p className="text-[1.333vw] font-jakarta text-white">Total Value</p>
        <div className="w-full flex flex-row gap-[1.333vw]">
          <p className="text-[2.222vw] text-white font-[700] font-jakarta">
            USD 20,000,000
          </p>
          <div className="flex flex-row gap-[0.556vw] items-center">
            {/* <p className="text-[2.778vw] text-white font-bold">Rp 20.000.000</p> */}
            <ArrowUp color="white" size={16} />
            <p className="text-[#72FFC7] font-bold font-inter">30%</p>
          </div>
        </div>
      </div>
      <div>
        <DanaChart variant="studio" />
      </div>
    </div>
  );
};

export default PortofolioValue;
