"use client";
import Map from "../components/map";
import Header from "../components/header";

export default function MapPage() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        {" "}
        <h1 className="text-4xl font-bold my-8 text-center">
          Root around the World
        </h1>
        <div className="flex-1">
          {" "}
          <Map />
        </div>
      </div>
    </main>
  );
}
