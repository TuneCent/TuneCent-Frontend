"use client";
import { useState, ChangeEvent } from "react";
import { BsChevronDown, BsArrowDownUp } from "react-icons/bs";

const Transaction = () => {
  const [amount, setAmount] = useState("");
  const [receive, setReceive] = useState("");

  const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleReceive = (event: ChangeEvent<HTMLInputElement>) => {
    setReceive(event.target.value);
  };

  return (
    <div className="flex flex-col w-[31.6vw] aspect-[454/502] p-[1.111vw] bg-neutral-black-dark">
      <h4 className="font-jakarta font-bold text-[1.389vw] text-white">
        Withdraw
      </h4>
      <div className="flex flex-col gap-[0.444vw]">
        <p className="text-white text-[0.972vw] font-medium">Amount</p>
        <div className="flex flex-row w-full border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
          <input
            className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
            type="text"
            value={amount}
            onChange={handleAmount}
          />
          <div className="flex flex-row gap-[0.833vw] items-center">
            <p className="text-neutral-black-light font-jakarta font">ETH</p>
            <BsChevronDown size={12} color="white" />
          </div>
        </div>
        <p className="text-white-darker font-jakarta text-[0.972vw]">
          balance: 0.32 ETH
        </p>
        <button className="cursor-pointer w-full flex justify-center">
          <BsArrowDownUp size={20} color="white" />
        </button>
        <p className="text-white text-[0.972vw] font-medium">Receive</p>
        <div className="flex flex-row w-full border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
          <input
            className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
            type="text"
            value={receive}
            onChange={handleReceive}
          />
          <div className="flex flex-row gap-[0.833vw] items-center">
            <p className="text-neutral-black-light font-jakarta font">USD</p>
            <BsChevronDown size={12} color="white" />
          </div>
        </div>
        <div className="flex flex-row items-center w-full border-b-1 border-neutral-black-base"></div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="text-[0.833vw] font-regular text-white-darker">
              Recipient
            </p>
            <p className="text-[0.667vw] font-regular text-white-darker">
              
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[0.833vw] font-regular text-white-darker">
              Account number
            </p>
            <p className="text-[0.667vw] font-regular text-white-darker">
              
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[0.833vw] font-regular text-white-darker">
              Entry Fee
            </p>
            <p className="text-[0.667vw] font-regular text-white-darker">
              $
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[0.833vw] font-regular text-white-darker">Fee</p>
            <p className="text-[0.667vw] font-regular text-white-darker">
              
            </p>
          </div>
        </div>
        <button
          onClick={() => {}}
          className="cursor-pointer w-full flex flex-row aspect-[408/36] justify-center items-center rounded-[0.556vw] bg-purple-base"
        >
          <p className="text-[0.972vw] text-white font-jakarta text-white-lighter">
            Trade
          </p>
        </button>
      </div>
    </div>
  );
};

export default Transaction;
