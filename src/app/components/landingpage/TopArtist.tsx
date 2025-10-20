"use client";
import MusicPoolCard from "../dashboard/MusicPoolCard";
import { RiArrowRightUpLine } from "react-icons/ri";

interface ArtistProps {
  artistId: number;
  artistProfileIcon: string;
  artistName: string;
  artistDesc: string;
}

const DummyArtist: ArtistProps[] = [
  {
    artistId: 1,
    artistProfileIcon: "",
    artistName: "Tenxi",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 2,
    artistProfileIcon: "",
    artistName: "Niki",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 3,
    artistProfileIcon: "",
    artistName: "Sheila On 7",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 4,
    artistProfileIcon: "",
    artistName: "For Revenge",
    artistDesc: "Artist, Creator",
  },
  {
    artistId: 5,
    artistProfileIcon: "",
    artistName: "Hindia",
    artistDesc: "Artist, Creator",
  },
];

const TopArtist = () => {
  return (
    <section className="flex flex-col w-[75vw] gap-[1.111vw]">
      <div className="flex flex-row justify-between items-end">
        <p className="text-[1.667vw] text-white font-bold">Top Artist</p>
        <button
          onClick={() => {}}
          className="cursor-pointer text-white-darker text-[0.833vw] font-jakarta"
        >
          Show all
        </button>
      </div>
      <div className="w-full flex flex-row justify-center rounded-[1.042vw] bg-neutral-400 text-white"></div>
      <div className="flex flex-row gap-[2.667vw]">
        {DummyArtist.map((key) => (
          <button
            onClick={() => {}}
            key={key.artistId}
            className="cursor-pointer flex flex-col gap-[1.111vw]"
          >
            <div className="flex flex-col w-[13.333vw] aspect-[192/192]">
              <div className="bg-[#D9D9D9] aspect-[192/192] flex flex-row-reverse p-[0.111vw] rounded-full">
                <div className="flex flex-row gap-[0.333vw] p-[0.556vw]"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-[0.333vw]">
                <p className="text-start text-white font-jakarta text-[1.111vw] font-[700]">
                  {key.artistName}
                </p>
                <p className="text-white font-jakarta text-[0.833vw] font-regular">
                  {key.artistDesc}
                </p>
              </div>
              <div className="cursor-pointer w-[1.667vw] aspect-[24/24] flex justify-center bg-blackrounded-[1.042vw]">
                <RiArrowRightUpLine color="white" size={24} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TopArtist;
