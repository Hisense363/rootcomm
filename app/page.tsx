"use client";

import Header from "./components/header";
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

  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 h-full min-w-full object-cover"
          src="/video.mp4"
          muted
          loop
        />
        <button
          onClick={toggleVideo}
          className="relative z-10 px-4 py-2 bg-white rounded"
        >
          {isPlaying ? "Pause" : "Play"} Background
        </button>
      </div>
    </main>
  );
}
