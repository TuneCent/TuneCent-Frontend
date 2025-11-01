"use client";
import PerjanjianSplitCard from "./PerjanjianSplitCard";

interface SmartContractAuditProps {
  isLanding?: boolean;
}

const SmartContractAudit = ({ isLanding = true }: SmartContractAuditProps) => {
  return (
    <div className="flex flex-col w-full gap-[1.111vw]">
      {!isLanding && (
        <p className="text-[0.972vw] text-white font-jakarta">
          Smart contract audit & staking
        </p>
      )}
      <div className="flex flex-col w-full gap-[0.333vw]">
        <p className="font-jakarta font-bold text-[1.389vw] text-white">
          Your Royalty is guaranteed by Code.
        </p>
        <p className="font-jakarta text-[0.972vw] text-white">
          This Royalty Aggrement was directly verified by Public Smart Contract.
        </p>
        <PerjanjianSplitCard />
      </div>
    </div>
  );
};

export default SmartContractAudit;
