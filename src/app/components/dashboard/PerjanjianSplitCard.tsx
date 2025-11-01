import { ArrowUpRight } from "react-feather";

const PerjanjianSplitCard = () => {
  const lihatBuktiKode = () => {
    window.open(
      "https://sepolia.basescan.org/address/0xD10c657Cad43cC213bD1a69e602Ee46359B209D6",
      "_blank"
    );
  };

  return (
    <div className="w-full flex flex-col aspect-[1040/299] bg-neutral-black-base p-[1.111vw] gap-[1.111vw]">
      <div className="flex flex-col">
        <h5 className="text-[1.111vw] font-jakarta text-white font-bold">
          10% Locked for the royalty split.
        </h5>
        <p className="text-[0.972vw] font-jakarta text-white font-regular">
          0xD10c657Cad43cC213bD1a69e602Ee46359B209D6
        </p>
      </div>
      <div className="w-full flex flex-row gap-[1.111vw] justify-between">
        <div className="w-[22.222vw] flex flex-col aspect-[320/116] bg-black-lighter justify-center -items-center">
          <p className="font-jakarta text-[0.972vw] text-white text-center">
            Profit Sharing Percentage
          </p>
          <h1 className="text-[3.333vw] font-bold font-jakarta text-white text-center">
            10%
          </h1>
        </div>
        <div className="w-[22.222vw] flex flex-col aspect-[320/116] bg-black-lighter justify-center -items-center">
          <p className="font-jakarta text-[0.972vw] text-white text-center">
            Lock-up Period
          </p>
          <h1 className="text-[3.333vw] font-bold font-jakarta text-white text-center">
            3 Tahun
          </h1>
        </div>
        <div className="w-[22.222vw] flex flex-col aspect-[320/116] bg-black-lighter justify-center -items-center">
          <p className="font-jakarta text-[0.972vw] text-white text-center">
            Staking Status
          </p>
          <h1 className="text-[2.222vw] font-bold font-jakarta text-white text-center">
            Staking is Active
          </h1>
          <p className="font-jakarta text-[0.778vw] text-white text-center">
            (10% Fee Discount)
          </p>
        </div>
      </div>
      <button
        onClick={lihatBuktiKode}
        className="cursor-pointer w-full aspect-[996/49] text-white bg-purple-base flex flex-row justify-center items-center gap-[0.667vw]"
      >
        <ArrowUpRight size={20} />
        <p className="font-jakarta font-medium text-[0.972vw]">
          Lihat Bukti Kode (On-Chain){" "}
        </p>
      </button>
      <div className="flex flex-row justify-center text-[0.972vw] font-jakarta text-white">
        <p className="font-regular">The Proof Code cannot be changed</p>
        <p className="font-bold"> &nbsp;Smart Contract As An Authority</p>
      </div>
    </div>
  );
};

export default PerjanjianSplitCard;
