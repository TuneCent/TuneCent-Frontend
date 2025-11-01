"use client";
import TotalDana from "../dashboard/TotalDana";
import Transaction from "./Transaction";
import TransactionHistory from "./TransactionHistory";
import PerjanjianSplitCard from "../dashboard/PerjanjianSplitCard";
import PerbandinganROI from "./PerbandinganROI";

const HeroTransaction = () => {
  return (
    <div className="flex flex-col justify-between p-[0.333vw] gap-[0.778vw]">
      <div className="flex flex-row justify-between p-[0.333vw]">
        <div className="flex flex-col w-[38.742vw] aspect-[554/300]">
          <TotalDana />
          <TransactionHistory />
        </div>
        <Transaction />
      </div>
      <div className="flex flex-col w-full gap-[0.333vw]">
        <p className="font-jakarta font-bold text-[1.389vw] text-white">
          Your Royalty is guaranteed by Code.
        </p>
        <p className="font-jakarta text-[0.972vw] text-white">
          This Royalty Aggrement was directly verified by Public Smart Contract
        </p>
        <PerjanjianSplitCard />
      </div>
      <div className="flex flex-col w-full gap-[0.333vw]">
        <p className="font-jakarta font-bold text-[1.389vw] text-white">
          Previous Earning Simulation
        </p>
        <p className="font-jakarta text-[0.972vw] text-white">
          This Royalty Aggrement was directly verified by Public Smart Contract
        </p>
        <PerbandinganROI />
        <div className="flex flex-row justify-center text-[0.972vw] font-jakarta text-white">
          <p className="font-regular">The Proof Code cannot be changed</p>
          <p className="font-bold"> &nbsp;Smart Contract As An Authority</p>
        </div>
      </div>
    </div>
  );
};

export default HeroTransaction;
