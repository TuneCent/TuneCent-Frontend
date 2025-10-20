import { RiArrowRightUpLine } from "@remixicon/react";

interface AddressCardProps {
  addressTitle?: string;
  addressTitleIcon?: string;
  onDetail?: () => void;
  address?: string;
}

const AddressCard = ({
  addressTitle = "Fingerprint",
  address = "XXXXXX",
  onDetail,
}: AddressCardProps) => {
  return (
    <button
      onClick={onDetail}
      className="cursor-pointer w-[28.611vw] aspect-[413/70] flex flex-col justify-between gap-[1.667vw] bg-neutral-black-base px-[1.111vw] py-[1.667vw]"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[1.111vw]">
          <div className="w-[3.194vw] aspect-[1/1] bg-neutral-black-dark"></div>
          <div className="flex flex-col">
            <p className="text-[1.333vw] text-white font-bold font-jakarta">
              {addressTitle}
            </p>
            <p className="text-start text-[0.833vw] text-[#B6ABBA] font-jakarta font-regular">
              {address}
            </p>
          </div>
        </div>
        <div className="cursor-pointer w-[4.167vw] aspect-[60/44] flex justify-center p-[0.667vw] rounded-[1.042vw]">
          <RiArrowRightUpLine color="white" size={20} />
        </div>
      </div>
      {/* <div className="aspect-[288/90] flex flex-row justify-between items-center p-[0.278vw]">
        <div className="flex flex-col ">
          <p className="text-[1.667vw] font-bold text-white">{address}</p>
          <p className="text-[1.389vw] text-white">{address}</p>
        </div>
        <div className="bg-neutral-700 w-[8.681vw] aspect-[125/90]"></div>
      </div> */}
    </button>
  );
};

export default AddressCard;
