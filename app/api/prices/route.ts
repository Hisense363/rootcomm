// app/api/prices/route.ts
import { NextResponse } from "next/server";

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

let cachedData: TokenPrice[] | null = null;
let lastFetch = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

const tokens = {
  DEEP: "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP",
  TURBO:
    "0x57e93d9e28ce2303dc7838bb00b7f3f012a1856b3738e5a3ee252de265ff5ff6::turbo::TURBO",
  HIPPO:
    "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b::sudeng::SUDENG",
  LIQ: "0x9c86d1926a0a39e906f20674d6a35f337be8625ebcb6b799ee8ff011f328bee2::liq::LIQ",
  OCTO: "0x4b6d48afff2948c3ccc67191cf0ef175637472b007c1a8601fa18e16e236909c::octo::OCTO",
  PUGWIF:
    "0x2cd6f14a4b64c3a0fa9c644e8ed88d9c91d789a071886d67d24e6b435147063d::pugwif::PUGWIF",
  GOOF: "0xe0644f3e46b2d9f319a2cc3491155c75d1b6132ba9b3601c6e7e102e17296645::goof::GOOF",
  FUD: "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD",
  AAA: "0xd976fda9a9786cda1a36dee360013d775a5e5f206f8e20f84fad3385e99eeb2d::aaa::AAA",
  ROOT: "0x590fe436ab88e3b39e5ddaee688aa24b97ef70f36968e1710584562e244d22b6::root::ROOT",
  TISM: "0x6612c8419c70a706612e154ffcc0ef21b3fec6e4008b4b775ceae4e894d3484d::tism::TISM",
};

async function fetchPriceData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-chain": "sui",
      "X-API-KEY": process.env.BIRDEYE_API_KEY || "",
    },
  };

  try {
    const promises = Object.entries(tokens).map(async ([name, address]) => {
      const response = await fetch(
        `https://public-api.birdeye.so/defi/price?address=${address}`,
        options
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch ${name} price`);
      }
      const data = await response.json();
      return { name, ...data };
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function GET() {
  const now = Date.now();

  try {
    if (!cachedData || now - lastFetch > CACHE_DURATION) {
      console.log("Fetching fresh data...");
      cachedData = await fetchPriceData();
      lastFetch = now;
    } else {
      console.log("Using cached data...");
    }

    return NextResponse.json(cachedData);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
