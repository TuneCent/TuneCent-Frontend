import { RiArrowRightUpLine } from "@remixicon/react";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import Image from "next/image";

interface MusicPoolCardProps {
  onClickPlay?: () => void;
  isPlayingSong?: boolean;
  playable?: boolean;
  coverImageUrl?: string;
}

const MusicPoolCard = ({
  onClickPlay,
  isPlayingSong = false,
  playable = true,
  coverImageUrl,
}: MusicPoolCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoveringAndPlay = (hovering: boolean, playing: boolean) => {
    if (!playing) setIsHovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => hoveringAndPlay(isHovered, isPlayingSong)}
        className={`relative flex flex-col w-[12.9vw] aspect-[192/177] `}
      >
        {playable && isHovered && (
          <button
            onClick={onClickPlay}
            className="cursor-pointer absolute right-[1.111vw] bottom-[1.111vw] z-20"
          >
            {isPlayingSong ? (
              <FaPauseCircle size={40} color={"#552368"} />
            ) : (
              <FaCirclePlay size={40} color={"#552368"} />
            )}
          </button>
        )}
        <div className="bg-black-lighter aspect-[192/177] flex flex-row-reverse p-[0.111vw] relative overflow-hidden">
          {coverImageUrl && (
            <Image
              src={coverImageUrl}
              alt="Album cover"
              fill
              className="object-cover"
              unoptimized
            />
          )}
          <div className="flex flex-row gap-[0.333vw] p-[0.556vw] relative z-10">
            <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
            <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPoolCard;
