"use client";
import { useState, ChangeEvent } from "react";

export default function CreateUploadForm() {
  const [creatorAddress, setCreatorAddress] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [bannerURL, setBannerURL] = useState<string | null>(null);

  const handleCreatorAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setCreatorAddress(event.target.value);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleArtist = (event: ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.value);
  };

  const handleGenre = (event: ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleDuration = (event: ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleAudioUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("audio/")) {
      setAudioFile(file);
      setAudioUrl(URL.createObjectURL(file)); // buat URL sementara untuk preview
    } else {
      alert("Please upload a valid audio file (MP3/WAV).");
    }
  };

  const handleBannerUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerFile(file);
      setBannerURL(URL.createObjectURL(file));
    }
  };

  const handleCreateKarya = () => {};
  //   const;

  return (
    <div className="w-full flex flex-col items-center gap-[2.222vw]">
      <div className="w-full grid grid-rows-3 grid-cols-2 gap-[1.667vw]">
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">
            Smart Contract Address
          </p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={creatorAddress}
                placeholder="0xxxx"
                onChange={handleCreatorAddress}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">Title</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={title}
                placeholder="Long Live"
                onChange={handleTitle}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">Artist</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={artist}
                placeholder="TENXI"
                onChange={handleArtist}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">Genre</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={genre}
                placeholder="RnB"
                onChange={handleGenre}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">Description</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={description}
                placeholder="Input..."
                onChange={handleDescription}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">Duration</p>
          <div className="flex flex-col gap-[0.444vw]">
            <div className="flex flex-row w-[37.5vw] border-[0.056vw] border-white rounded-[0.556vw] bg-black p-[0.778vw]">
              <input
                className="w-[25vw] text-[#D3D3D2] font-jakarta text-[1.111vw] border-0 outline-0"
                type="text"
                value={duration}
                placeholder="Format (MM:SS)"
                onChange={handleDuration}
              />
            </div>
          </div>
        </div>
        {/* 🎧 Upload Song */}
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">
            Upload Your Song
          </p>
          <div className="flex flex-col gap-[0.556vw]">
            {/* Input file */}
            <label className="cursor-pointer flex flex-row items-center justify-between w-[37.5vw] border-[0.069vw] border-white rounded-[0.556vw] bg-black p-[0.778vw] hover:bg-neutral-900 transition-all">
              <span className="text-[#D3D3D2] font-jakarta text-[1.111vw]">
                {audioFile ? audioFile.name : "Choose Audio File (.mp3, .wav)"}
              </span>
              <input
                type="file"
                accept="audio/*"
                onChange={handleAudioUpload}
                className="hidden"
              />
            </label>

            {/* Preview */}
            {audioUrl && (
              <audio
                controls
                src={audioUrl}
                className="w-[37.5vw] rounded-[0.556vw] bg-neutral-800"
              />
            )}
          </div>
        </div>
        {/* Upload Banner */}
        <div className="flex flex-col gap-[0.444vw]">
          <p className="text-white text-[0.972vw] font-medium">
            Upload Music Banner
          </p>
          <div className="flex flex-col gap-[0.556vw]">
            <input
              type="file"
              accept="image/*"
              onChange={handleBannerUpload}
              className="cursor-pointer w-[37.5vw] text-[#D3D3D2] font-jakarta text-[0.972vw] border-[0.069vw] border-white p-[0.778vw] rounded-[0.556vw]"
            />
            {bannerURL && (
              <img
                src={bannerURL}
                alt="Music Banner Preview"
                className="w-[37.5vw] h-[15vw] object-cover rounded-[0.556vw] border-[0.056vw] border-white mt-[0.5vw]"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleCreateKarya}
        className="cursor-pointer w-[37.5vw] flex flex-row aspect-[408/36] justify-center items-center rounded-[0.556vw] bg-purple-base"
      >
        <p className="text-[0.972vw] text-white font-jakarta text-white-lighter">
          Create
        </p>
      </button>
    </div>
  );
}
