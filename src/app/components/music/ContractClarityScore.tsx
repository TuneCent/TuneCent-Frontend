import { ArrowUpRight } from "react-feather";

interface ContractClarityScoreProps {
  contractIcon?: string;
  contractName: string;
  contractAddress: string;
}

const ContractClarityScoreArray: ContractClarityScoreProps[] = [
  {
    contractIcon: "",
    contractName: "Audit Smart Contract",
    contractAddress: "0xD10c657Cad43cC213bD1a69e602Ee46359B209D6",
  },
  {
    contractIcon: "",
    contractName: "Risk Score",
    contractAddress: "0x0C32B07D938D07eb5c62c7aba95F652dDa23A901",
  },
  {
    contractIcon: "",
    contractName: "Simulasi Payout",
    contractAddress: "0x1cfeB8a7FfD5268c488a8ee6E8BBdcc20aD263c4",
  },
];

const ContractClarityScore = () => {
  return (
    <div className="flex flex-col w-[36.667vw] aspect-[528/268] bg-neutral-black-dark p-[1.111vw] rounded-[0.486vw] gap-[0.556vw]">
      <div className="w-full flex flex-col jjustify-center justify-between pb-[0.667vw] border-b-[0.069vw] border-[#201C22]">
        <p className="text-white text-[1.389vw] font-jakarta font-bold">
          Contract Clarity Score
        </p>

        {/* <button
          onClick={() => {}}
          className="cursor-pointer text-[0.972vw] text-white-darker font-regular font-jakarta"
        >
          Show All
        </button> */}
      </div>
      <p className="text-white-darker text-[0.764vw] font-jakarta font-bold">
        Semua transaksi dijamin oleh smart contract on-chain. Kami menyediakan
        audit publik dan simulasi payout
      </p>
      <div className="flex flex-col w-full aspect-[481/180] gap-[0.333vw]">
        {ContractClarityScoreArray.map((contractKey) => (
          <a
            key={contractKey.contractName}
            href={`https://sepolia.basescan.org/address/${contractKey.contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-row justify-between p-[0.222vw] hover:bg-neutral-black-base/50 rounded-[0.278vw] transition-colors duration-200 cursor-pointer"
          >
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                <div className="w-[3.472vw] aspect-square bg-neutral-black-base">
                  {contractKey.contractIcon}
                </div>
                <div className="flex flex-col gap-[0.111vw]">
                  <p className="text-[1.389vw] font-bold">
                    {contractKey.contractName}
                  </p>
                  <p className="text-[0.833vw]">
                    {contractKey.contractAddress}
                  </p>
                </div>
              </div>
              <div className="cursor-pointer">
                <ArrowUpRight size={24} color="white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContractClarityScore;
