"use client";

import Header from "./components/header";
import Reveal from "./components/reveal";
import { useState, useRef } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const [buttonScale, setButtonScale] = useState("scale-100");

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 h-full min-w-full object-cover"
          src="/video.mp4"
          muted
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-4">
          <p className="text-white text-5xl">ROOT TO REVEAL CA!</p>
          <button
            className="h-[226px] cursor-pointer transition-transform ${buttonScale}"
            onMouseDown={() => {
              setButtonScale("scale-90"); // 90% size when clicked
              toggleVideo();
            }}
            onMouseUp={() => setButtonScale("scale-100")}
          >
            <Reveal />
          </button>
          <p className="text-black text-2xl">ROOTS TIL REVEAL: 2 </p>
        </div>
      </div>
    </main>
  );
}
