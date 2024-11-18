"use client";
import Header from "../components/header";
import PricePage from "../components/prices";
export default function AirdropPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        {" "}
        <h1 className="text-4xl font-bold py-8 text-center">
          The Wall of Shame
        </h1>
        <h1 className="text-2xl font-bold text-center">
          We were promised no utility
        </h1>
        <div className="flex-1">
          <PricePage />
        </div>
      </div>
    </main>
  );
}
