import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ShootingStarsAndStarsBackground } from "@/components/shooting-stars-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nilly Hamidi",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed inset-0 -z-10">
          <ShootingStarsAndStarsBackground />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
