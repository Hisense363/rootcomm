"use client";

export default function Story() {
  const stories = [
    { image: "/story0.jpeg", text: "Story text 0" },
    { image: "/story1.jpeg", text: "Story text 1" },
    { image: "/story2.jpeg", text: "Story text 2" },
    { image: "/story3.jpeg", text: "Story text 3" },
    { image: "/story4.jpeg", text: "Story text 4" },
    { image: "/story5.jpeg", text: "Story text 5" },
    { image: "/story6.jpeg", text: "Story text 6" },
    { image: "/story7.jpeg", text: "Story text 7" },
    { image: "/story8.jpeg", text: "Story text 8" },
    { image: "/story9.jpeg", text: "Story text 9" },
    { image: "/story10.jpeg", text: "Story text 10" },
  ];

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className={`relative`}>
              <img
                src={story.image}
                alt={`Story ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
              />
              <p className="text-white text-lg mt-4 text-center"></p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
