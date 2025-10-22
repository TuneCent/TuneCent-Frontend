"use client";
import { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useMusicRegistry } from "@/app/hooks/useMusicRegistry";
import TransactionSuccessModal from "@/app/components/common/TransactionSuccessModal";

export default function CreateUploadForm() {
  const { address, isConnected } = useAccount();
  const {
    registerMusic,
    isRegistering,
    isConfirming,
    isConfirmed,
    registerError,
    transactionHash,
  } = useMusicRegistry();

  const [creatorAddress, setCreatorAddress] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [artist, setArtist] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [bannerURL, setBannerURL] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [successData, setSuccessData] = useState<{
    title: string;
    artist: string;
    genre: string;
    audioUrl: string;
    bannerUrl: string | null;
  } | null>(null);

  // Update creator address when wallet connects
  useEffect(() => {
    if (address) {
      setCreatorAddress(address);
    }
  }, [address]);

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
      setBannerURL(URL.createObjectURL(file));
    }
  };

  const handleCreateKarya = async () => {
    // Validation
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }

    if (!title || !artist || !audioFile) {
      alert("Please fill in all required fields (Title, Artist, and Audio File)");
      return;
    }

    try {
      setIsUploading(true);

      // 1. Upload audio file to IPFS (you'll need to implement this)
      // For now, using a placeholder IPFS CID
      const audioArrayBuffer = await audioFile.arrayBuffer();

      // TODO: Upload to actual IPFS
      // const ipfsCID = await uploadToIPFS(audioFile, bannerFile, metadata);
      const ipfsCID = "QmPlaceholder" + Date.now(); // Placeholder

      // Save data before transaction
      setSuccessData({
        title,
        artist,
        genre,
        audioUrl,
        bannerUrl: bannerURL,
      });

      // 2. Register music on blockchain - this will open wallet modal
      registerMusic(ipfsCID, title, artist, audioArrayBuffer);
    } catch (error) {
      console.error("Error creating music:", error);
      // Only show error if user didn't reject in wallet
      if (error && typeof error === 'object' && 'code' in error && error.code !== 4001) {
        alert("Failed to register music. Please try again.");
      }
      setIsUploading(false);
    }
  };

  // Watch for transaction hash - shows modal 3 seconds after user signs in wallet
  useEffect(() => {
    if (transactionHash && successData) {
      const timer = setTimeout(() => {
        setShowSuccessModal(true);
        setIsUploading(false);
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, [transactionHash, successData]);

  // Show error message
  useEffect(() => {
    if (registerError) {
      alert(`Error: ${registerError.message}`);
      setIsUploading(false);
    }
  }, [registerError]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Reset form
    setTitle("");
    setArtist("");
    setGenre("");
    setDescription("");
    setDuration("");
    setAudioFile(null);
    setAudioUrl("");
    setBannerURL(null);
    setSuccessData(null);
  };

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
              <div className="relative w-[37.5vw] h-[15vw] mt-[0.5vw]">
                <Image
                  src={bannerURL}
                  alt="Music Banner Preview"
                  fill
                  className="object-cover rounded-[0.556vw] border-[0.056vw] border-white"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={handleCreateKarya}
        disabled={isRegistering || isConfirming || isUploading || !isConnected}
        className="cursor-pointer w-[37.5vw] flex flex-row aspect-[408/36] justify-center items-center rounded-[0.556vw] bg-purple-base disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <p className="text-[0.972vw] text-white font-jakarta text-white-lighter">
          {isUploading || isRegistering
            ? "Uploading..."
            : isConfirming
            ? "Confirming..."
            : !isConnected
            ? "Connect Wallet"
            : "Create"}
        </p>
      </button>

      {transactionHash && (
        <p className="text-white text-[0.833vw]">
          Transaction Hash: {transactionHash}
        </p>
      )}

      <TransactionSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        transactionHash={transactionHash}
        title="Music Created Successfully!"
      >
        <div className="space-y-[1.111vw]">
          <div className="bg-black border border-white-darker rounded-[0.556vw] p-[1.111vw]">
            <h3 className="font-semibold font-jakarta text-white text-[1.111vw] mb-[0.833vw]">Music Details</h3>
            <div className="space-y-[0.556vw]">
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Title:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{successData?.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Artist:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{successData?.artist}</span>
              </div>
              {successData?.genre && (
                <div className="flex justify-between">
                  <span className="text-white-darker text-[0.833vw] font-jakarta">Genre:</span>
                  <span className="font-medium text-white text-[0.833vw] font-jakarta">{successData?.genre}</span>
                </div>
              )}
            </div>
          </div>

          {successData?.audioUrl && (
            <div>
              <p className="text-[0.833vw] text-white-darker font-jakarta mb-[0.556vw]">Preview:</p>
              <audio
                controls
                src={successData.audioUrl}
                className="w-full rounded-[0.556vw]"
              />
            </div>
          )}

          {successData?.bannerUrl && (
            <div className="relative w-full h-[8.889vw]">
              <Image
                src={successData.bannerUrl}
                alt="Music Banner"
                fill
                className="object-cover rounded-[0.556vw] border border-white-darker"
                unoptimized
              />
            </div>
          )}
        </div>
      </TransactionSuccessModal>
    </div>
  );
}
