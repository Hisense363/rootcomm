"use client";
import Header from "../components/header";
import Story from "../components/story";

export default function StoryPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        {" "}
        <h1 className="text-4xl font-bold py-8 text-center">Story</h1>
        <div className="flex-1">
          <Story />
        </div>
      </div>
    </main>
  );
}
