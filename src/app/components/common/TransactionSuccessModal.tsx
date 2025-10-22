'use client';

import React from 'react';

interface TransactionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionHash?: string;
  title: string;
  children: React.ReactNode;
}

export default function TransactionSuccessModal({
  isOpen,
  onClose,
  transactionHash,
  title,
  children,
}: TransactionSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-neutral-900 border border-white rounded-[1.111vw] p-[2.222vw] w-[50vw] max-h-[80vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-[1.667vw]">
          <h2 className="text-white text-[1.667vw] font-bold font-jakarta">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-white text-[1.5vw] hover:text-gray-400 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Success Icon */}
        <div className="flex items-center justify-center mb-[1.667vw]">
          <div className="w-[4.444vw] h-[4.444vw] bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
            <svg
              className="w-[2.222vw] h-[2.222vw] text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Transaction Hash */}
        {transactionHash && (
          <div className="mb-[1.111vw] p-[0.833vw] bg-black border border-white-darker rounded-[0.556vw]">
            <p className="text-[0.833vw] text-white-darker mb-[0.278vw] font-jakarta">
              Transaction Hash:
            </p>
            <p className="text-[0.722vw] text-white break-all font-mono">
              {transactionHash}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="mb-[1.667vw]">{children}</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full bg-purple-base hover:bg-purple-600 text-white font-semibold font-jakarta py-[0.833vw] px-[1.111vw] rounded-[0.556vw] text-[0.972vw] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
