"use client";
import { useState, useEffect } from "react";

const RunningButton = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - 50,
      y: window.innerHeight - 200,
    });
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const button = document.getElementById("running-button");
    if (!button) return;

    const buttonRect = button.getBoundingClientRect();
    const buttonCenter = {
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    };

    const mouse = {
      x: e.clientX,
      y: e.clientY,
    };

    // Added padding to keep button more visible
    const screenPadding = {
      top: 50,
      bottom: 150, // Increased bottom padding
      left: 50,
      right: 50,
    };

    const distance = Math.sqrt(
      Math.pow(mouse.x - buttonCenter.x, 2) +
        Math.pow(mouse.y - buttonCenter.y, 2)
    );

    if (distance < 200) {
      let moveX = buttonCenter.x + (buttonCenter.x - mouse.x);
      let moveY = buttonCenter.y + (buttonCenter.y - mouse.y);

      // Adjusted bounds checking with padding
      if (
        moveX < screenPadding.left ||
        moveX > window.innerWidth - buttonRect.width - screenPadding.right ||
        moveY < screenPadding.top ||
        moveY > window.innerHeight - buttonRect.height - screenPadding.bottom
      ) {
        moveX =
          mouse.x < window.innerWidth / 2
            ? window.innerWidth - buttonRect.width - screenPadding.right
            : screenPadding.left;
        moveY =
          mouse.y < window.innerHeight / 2
            ? window.innerHeight - buttonRect.height - screenPadding.bottom
            : screenPadding.top;
      }

      setPosition({
        x: moveX,
        y: moveY,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button
      id="running-button"
      className="absolute bg-[#CF6468] text-white px-4 py-2 rounded hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "all 0.2s ease-out",
      }}
    >
      STAKE $ROOT
    </button>
  );
};

export default RunningButton;
