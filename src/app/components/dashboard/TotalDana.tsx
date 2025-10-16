const TotalDana = () => {
  return (
    <div className="w-full aspect-[1076/183] flex flex-row justify-between bg-neutral-500 rounded-[1.042vw] border-1 border-white p-[1.883vw]">
      <div className="flex flex-col">
        <p className="text-[2.222vw] text-white font-medium">
          Total Dana di SmartContract
        </p>
        <div className="flex flex-row gap-[1.111vw]">
          <p className="text-[2.778vw] text-white font-bold">Rp 20.000.000</p>
          <div className="flex justify-center items-center w-[7.5vw] aspect-[124/37] border-2 border-[#BEF1D3] rounded-[1.042vw]">
            <p className="text-[#72FFC7] font-bold font-inter">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDana;
