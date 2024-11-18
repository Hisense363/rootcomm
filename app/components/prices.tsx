// app/prices/page.tsx or wherever you want the component
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface TokenData {
  value: number;
  updateHumanTime: string;
  updateUnixTime: number;
  liquidity: number;
}

interface TokenPrice {
  name: string;
  success: boolean;
  data: TokenData;
}

const dropper = [
  {
    image: "/drop0.jpeg",
    title: "$DEEP",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/DeepBookonSui",
    amount: 400,
  },
  {
    image: "/drop1.png",
    title: "$ROOT",
    text: "(Round 2) Rootlets that bought $10 worth of $Root were airdropped 5% of the Total Supply",
    link: "https://t.me/+sfHunAtee2NiZGY1",
    amount: 2700000,
  },
  {
    image: "/drop2.png",
    title: "TURBO",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/Turbo_OnSui",
    amount: 30000,
  },
  {
    image: "/drop3.png",
    title: "$HIPPO",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/hippo_cto",
    amount: 2100,
  },
  {
    image: "/drop4.jpeg",
    title: "$LIQ",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/Beliquoronsui",
    amount: 169696,
  },
  {
    image: "drop6.jpeg",
    title: "$OCTO",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/OscarOnSui",
    amount: 60000,
  },
  {
    image: "/drop7.png",
    title: "$PUGWIF",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/pugwifsui2",
    amount: 69,
  },
  {
    image: "/drop8.jpeg",
    title: "$GOOF",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/Goofy_sui",
    amount: 5000,
  },
  {
    image: "/drop10.png",
    title: "$FUD",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/fudthepug",
    amount: 100000000,
  },
  {
    image: "/drop11.png",
    title: "$AAA",
    text: "Each Rootlet was airdropped",
    link: "https://x.com/aaaCatSui",
    amount: 14000,
  },
  {
    image: "/drop12.png",
    title: "$ROOT",
    text: "(Round 1) Rootlets airdropped 20% of the Total Supply",
    link: "https://t.me/+sfHunAtee2NiZGY1",
    amount: 600060,
  },
];

export default function PricePage() {
  const [prices, setPrices] = useState<TokenPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/prices");
        if (!response.ok) throw new Error("Failed to fetch prices");
        const data = await response.json();
        console.log("Fetched data:", data); // Debug log
        setPrices(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch prices");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!prices?.length) return <div>No data available</div>;

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 p-6 rounded-lg text-white text-center">
          <h1 className="text-3xl font-bold mb-4">
            Total Airdrop Value Per Rootlet: $
            {dropper
              .reduce((total, drop) => {
                const priceData = prices.find(
                  (p) => p.name === drop.title.replace("$", "")
                );
                return (
                  total + (priceData ? drop.amount * priceData.data.value : 0)
                );
              }, 0)
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {dropper.map((drop, index) => {
            const priceData = prices.find(
              (p) => p.name === drop.title.replace("$", "")
            );
            const totalValue = priceData
              ? drop.amount * priceData.data.value
              : 0;

            return (
              <div key={index} className="relative">
                <Link href={drop.link} target="_blank">
                  <img
                    src={drop.image}
                    alt={`Story ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
                  />
                </Link>

                <div className="text-white mt-4 text-center space-y-2">
                  <h2 className="font-bold text-xl">{drop.title}</h2>
                  <p className="text-lg">{drop.text}</p>
                  {priceData && (
                    <div className="mt-2 p-2 bg-gray-800 rounded-lg">
                      <p>Amount: {drop.amount.toLocaleString()} tokens</p>
                      <p>
                        Price: ${priceData.data?.value?.toFixed(4) ?? "N/A"}
                      </p>
                      <p>Value: ${totalValue.toFixed(2)}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
