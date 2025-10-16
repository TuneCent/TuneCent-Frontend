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
    <div className="w-[23.611vw] aspect-[339/233] flex flex-col justify-between gap-[1.667vw] bg-neutral-500 px-[1.111vw] py-[1.667vw] border-1 border-white rounded-[1.042vw]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[0.667vw]">
          <div className="w-[3.194vw] aspect-[1/1] bg-[#D9D9D9] rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[1.333vw] text-white font-bold">
              {addressTitle}
            </p>
            <p className="text-[0.833vw] text-white">{address}</p>
          </div>
        </div>
        <button
          onClick={onDetail}
          className="cursor-pointer w-[4.167vw] aspect-[60/44] flex justify-center bg-primary-900 p-[0.667vw] rounded-[1.042vw]"
        >
          <RiArrowRightUpLine color="white" size={20} />
        </button>
      </div>
      <div className="aspect-[288/90] flex flex-row justify-between items-center p-[0.278vw]">
        <div className="flex flex-col ">
          <p className="text-[1.667vw] font-bold text-white">{address}</p>
          <p className="text-[1.389vw] text-white">{address}</p>
        </div>
        <div className="bg-neutral-700 w-[8.681vw] aspect-[125/90]"></div>
      </div>
    </div>
  );
};

export default AddressCard;
