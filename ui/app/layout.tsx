import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai Globe - Chat with internet",
  description:
    "Ai Golbe is an AI powered that is connected to the internet",
  icons: {
    icon: "./globe.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${inter.className} h-full`}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
