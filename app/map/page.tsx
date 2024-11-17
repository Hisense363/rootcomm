"use client";
import Map from "../components/map"; // Adjust path based on your component location
import Header from "../components/header";

export default function MapPage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        {" "}
        {/* Remove relative here */}
        <h1 className="text-4xl font-bold my-8 text-center">
          Root around the World
        </h1>
        <div className="flex-1">
          {" "}
          {/* Make map container take remaining space */}
          <Map />
        </div>
      </div>
    </main>
  );
}
