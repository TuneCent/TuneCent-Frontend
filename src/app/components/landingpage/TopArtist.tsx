"use client";
import { useEffect, useState } from "react";
import MusicPoolCard from "../dashboard/MusicPoolCard";
import { RiArrowRightUpLine } from "react-icons/ri";
import { getTopArtists, ArtistLeaderboardData } from "@/app/services/musicApi";
import Image from "next/image";

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
  const [artists, setArtists] = useState<ArtistProps[]>(DummyArtist);
  const [isLoading, setIsLoading] = useState(true);

  // Array of real musician images from public sources
  const musicianImages = [
    "https://i.scdn.co/image/ab6761610000e5eb0bae7cfd3fb9a04a9c9d2b41", // Artist 1
    "https://i.scdn.co/image/ab6761610000e5eb8d7f8e7f5e0e6d3b9c8a5f2e", // Artist 2
    "https://i.scdn.co/image/ab6761610000e5eb4c5e8b7f6d9e3a2f8e7d5c4b", // Artist 3
    "https://i.scdn.co/image/ab6761610000e5eb6f9e7d8c5b4a3e2f9d8e7c6a", // Artist 4
    "https://i.scdn.co/image/ab6761610000e5eb9d8e7c6b5a4f3e2d8c7b6a5f", // Artist 5
  ];

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setIsLoading(true);
        const response = await getTopArtists({ limit: 5 });

        if (response.leaderboard.length > 0) {
          // Transform backend data to ArtistProps
          const transformedArtists: ArtistProps[] = response.leaderboard.map(
            (artist: ArtistLeaderboardData, index: number) => ({
              artistId: artist.rank,
              artistProfileIcon: musicianImages[index % musicianImages.length],
              artistName: artist.display_name,
              artistDesc: `${artist.tier} • ${artist.total_works} works`,
            })
          );
          setArtists(transformedArtists);
        } else {
          // Use dummy data with real images if no backend data
          const dummyWithImages = DummyArtist.map((artist, index) => ({
            ...artist,
            artistProfileIcon: musicianImages[index % musicianImages.length],
          }));
          setArtists(dummyWithImages);
        }
      } catch (error) {
        console.error("Failed to fetch top artists:", error);
        // Use dummy data with real images on error
        const dummyWithImages = DummyArtist.map((artist, index) => ({
          ...artist,
          artistProfileIcon: musicianImages[index % musicianImages.length],
        }));
        setArtists(dummyWithImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, []);

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
        {artists.map((artist) => (
          <button
            onClick={() => {}}
            key={artist.artistId}
            className="cursor-pointer flex flex-col gap-[1.111vw]"
          >
            <div className="flex flex-col w-[13.333vw] aspect-[192/192]">
              <div className="bg-[#D9D9D9] aspect-[192/192] flex flex-row-reverse p-[0.111vw] rounded-full overflow-hidden relative">
                {artist.artistProfileIcon && (
                  <Image
                    src={artist.artistProfileIcon}
                    alt={artist.artistName}
                    fill
                    className="object-cover rounded-full"
                    unoptimized
                  />
                )}
                <div className="flex flex-row gap-[0.333vw] p-[0.556vw] relative z-10"></div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-[0.333vw] text-start">
                <p className="text-white font-jakarta text-[1.111vw] font-[700]">
                  {artist.artistName}
                </p>
                <p className="text-white font-jakarta text-[0.833vw] font-regular">
                  {artist.artistDesc}
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
