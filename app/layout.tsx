import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "./fonts/editundo.ttf",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "Root Community",
  description: "Root Community Stats and Info",
  metadataBase: new URL("https://rootcomm.vercel.app"),
  openGraph: {
    title: "Root Community",
    description: "Root Community Stats and Info",
    url: "https://rootcomm.vercel.app",
    siteName: "Root Community",
    images: [
      {
        url: "/drop1.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  );
}
