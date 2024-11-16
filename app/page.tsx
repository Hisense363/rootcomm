"use client";

import Header from "./components/header";
import { useState, useRef } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current && clickCount < 3) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play();
      setClickCount((prev) => prev + 1);

      if (clickCount === 2 && videoRef.current) {
        // On third click
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const [buttonScale, setButtonScale] = useState("scale-100");

  return (
    <main className="h-screen flex flex-col">
      <audio ref={audioRef} src="/oink.mp3" />
      <Header />
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 h-full min-w-full object-cover"
          src="/video.mp4"
          muted
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-4">
          {clickCount < 3 ? (
            <p className="text-white md:text-5xl text-4xl">
              ROOT TO REVEAL CA!
            </p>
          ) : (
            <a
              href="https://dexscreener.com/sui/0xe497e8366f8d01ea68c07542e6b665c5f5f9d6cdae894dd0a49b63a28256fe97?__cf_chl_tk=5pD5KH16XNX_bWMJW53KD7GrDSZAqDSSu0RfHKo4m1w-1731718803-1.0.1.1-D_l.piXwNoVrK199paeKqFDqPbVZq9FeNuLPKzc8Dv0"
              className="bg-[#CF6468] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 text-4xl"
            >
              GET CA!
            </a>
          )}

          <button
            className="h-[226px] cursor-pointer"
            onClick={handleClick}
            onMouseDown={() => {
              setButtonScale("scale-90"); // 90% size when clicked
            }}
            onMouseUp={() => setButtonScale("scale-100")}
          >
            <svg
              className={`w-96 h-96 pointer-events-none ${buttonScale}`}
              viewBox="83 0 123 180"
              fill="white"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                fill="#CF6468"
                d="M205.529 27.682C205.529 27.6802 205.528 27.6787 205.526 27.6787H201.885C198.098 27.6787 195.033 24.61 195.033 20.82C195.033 17.029 191.967 13.9613 188.181 13.9613H184.594C180.806 13.9613 177.741 10.8926 177.741 7.10164V6.8521C177.748 3.06776 174.683 0 170.896 0H116.22C112.433 0 109.367 3.06777 109.367 6.8587V7.10917C109.367 10.9001 106.302 13.9679 102.515 13.9679H98.9279C95.1406 13.9679 92.0754 17.0366 92.0754 20.8266C92.0754 24.6175 89.0102 27.6853 85.2229 27.6853H81.5794C77.7921 27.6853 74.7269 30.754 74.7269 34.544V62.8168C74.7269 66.6068 77.7921 69.6755 81.5794 69.6755H85.2229C89.0102 69.6755 92.0754 72.7433 92.0754 76.5342V76.5982C92.0754 80.3892 95.1406 83.4569 98.9279 83.4569H188.181C191.967 83.4569 195.033 80.3892 195.033 76.5982V76.5342C195.033 72.7433 198.098 69.6755 201.885 69.6755H205.529C209.316 69.6755 212.382 66.6068 212.382 62.8168V34.544C212.382 30.7551 209.318 27.687 205.532 27.6853C205.531 27.6853 205.529 27.6838 205.529 27.682ZM127.76 33.4146H112.454C108.224 33.4146 104.794 36.8477 104.794 41.0821V56.4021C104.794 60.6356 108.224 64.0687 112.454 64.0687H127.76C131.99 64.0687 135.42 60.6356 135.42 56.4021V41.0821C135.42 36.8477 131.99 33.4146 127.76 33.4146ZM159.577 33.4146H174.883C179.113 33.4146 182.543 36.8477 182.543 41.0821V56.4021C182.543 60.6356 179.113 64.0687 174.883 64.0687H159.577C155.347 64.0687 151.918 60.6356 151.918 56.4021V41.0821C151.918 36.8477 155.347 33.4146 159.577 33.4146Z"
              />
            </svg>
          </button>

          <p className="text-black text-2xl">
            {clickCount < 3
              ? `ROOTS TIL REVEAL: ${3 - clickCount}`
              : "REVEALED!"}
          </p>
        </div>
      </div>
    </main>
  );
}
