import { Search, ArrowDown, ArrowUpRight } from "react-feather";

const TransactionHistory = () => {
  return (
    <div className="w-full flex flex-col justify-center p-[0.333vw] gap-[1.1vw]">
      <div className="flex flex-row w-full justify-between">
        <p className="font-jakarta font-bold text-[1.333vw] text-white">
          Transaction History
        </p>
        <div className="flex flex-row justify-end gap-[0.222vw]">
          <div className="flex flex-row justify-center items-center gap-[0.556vw] rounded-[0.347vw] p-[0.333vw] border-1 border-white-darker">
            <Search size={16} color="white" />
            <input
              className="text-[#777777] font-jakarta text-[1.1vw] outline-none"
              type="text"
              placeholder="Search anything.."
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-[0.556vw] rounded-[0.347vw] p-[0.556vw] border-1 border-white-darker">
            <p className="text-[#D3D3D2] font-inter text-[1.1vw] outline-none">
              Royalty Drop
            </p>
            <ArrowDown size={10.3} color="white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-[0.667vw]">
        <div className="flex flex-row justify-between">
          <p className="text-white font-jakarta text-[1vw]">Rhapsody Drop</p>
          <div className="flex flex-row justify-between w-[8vw] aspect-[92/24]">
            <p className="text-[#72FFC7] text-[1vw]">+USD 10</p>
            <ArrowUpRight size={20} color="white" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-white font-jakarta text-[1vw]">
            Capital Fast Lane
          </p>
          <div className="flex flex-row justify-between w-[8vw] aspect-[92/24]">
            <p className="text-[#72FFC7] text-[1vw]">+USD 10</p>
            <ArrowUpRight size={20} color="white" />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-white font-jakarta text-[1vw]">
            Capital Fast Lane
          </p>
          <div className="flex flex-row justify-between w-[8vw] aspect-[92/24]">
            <p className="text-[#72FFC7] text-[1vw]">+USD 10</p>
            <ArrowUpRight size={20} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
