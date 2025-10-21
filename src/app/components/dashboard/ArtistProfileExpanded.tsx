import { ArrowUpRight } from "react-feather";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";

interface ArtistProfileExpandedProps {
  songTitle: string;
  artist: string;
  credit?: string;
  coverImageUrl?: string;
  genre?: string;
  onClose: () => void;
}

const ArtistProfileExpanded = ({
  songTitle,
  artist,
  coverImageUrl,
  genre,
  onClose,
}: ArtistProfileExpandedProps) => {
  return (
    <div className="fixed z-[10] flex flex-col gap-[0.556vw] px-[1.667vw] py-[0.222vw] right-0 w-[25vw] aspect-[427/988] bg-black">
      <div className="w-full flex flex-row justify-between items-start">
        <div className="flex flex-col">
          <p className="font-jakarta text-white text-[1.333vw] font-bold">
            {songTitle}
          </p>
          <p className="font-jakarta text-white text-[0.889vw] font-regular">
            {artist}
          </p>
        </div>
        <button onClick={onClose} className="cursor-pointer">
          <IoIosCloseCircleOutline size={24} color="white" />
        </button>
      </div>
      <div className="w-full aspect-[380/340] bg-neutral-black-light relative overflow-hidden">
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt={songTitle}
            fill
            className="object-cover"
            unoptimized
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-[1.111vw]">
        <div className="w-full flex flex-row justify-between items-center">
          <h4 className="text-[1.111vw] text-white font-jakarta font-bold">
            Credit
          </h4>
          <p className="cursor-pointer text-white text-[0.556vw] font-jakarta">
            Show all
          </p>
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-[1.111vw] text-white font-jakarta font-bold">
              {artist}
            </h4>
            <p className="text-[0.833vw] text-white font-jakarta">
              Main Artist, Creator{genre ? ` • ${genre}` : ''}
            </p>
          </div>
          <ArrowUpRight size={20} color="white" />
        </div>
        <div className="w-full flex flex-row justify-between"></div>
      </div>
    </div>
  );
};

export default ArtistProfileExpanded;
