import { RiArrowRightUpLine } from "@remixicon/react";

interface MusicPoolCardProps {
  onClick?: () => void;
}

const MusicPoolCard = ({ onClick }: MusicPoolCardProps) => {
  return (
    <div className="flex flex-col rounded-[1.042vw] w-[24.306vw] aspect-[339/285]">
      <div className="bg-neutral-700 aspect-[339/233] rounded-t-[1.042vw] flex flex-row-reverse p-[1.111vw]">
        <div className="flex flex-row p-[0.667vw] w-[8.333vw] aspect-[120/45] gap-[0.667vw]">
          <div className="w-[3.125vw] h-[45px] aspect-[1/1] rounded-full bg-neutral-400"></div>
          <div className="w-[3.125vw] h-[45px] aspect-[1/1] rounded-full bg-neutral-400"></div>
        </div>
      </div>
      <div className="flex flex-row-reverse items-end bg-neutral-500 aspect-[339/106] rounded-b-[1.042vw] p-[1.667vw]">
        <button
          onClick={onClick}
          className="cursor-pointer w-[4.167vw] aspect-[60/44] flex justify-center bg-primary-900 p-[0.667vw] rounded-[1.042vw]"
        >
          <RiArrowRightUpLine color="white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default MusicPoolCard;
