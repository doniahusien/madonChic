"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import DelayedLoader from "@/components/Loader/DelayedLoader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
      <Provider store={store}>
        <Nav />
        <main className="flex-grow pt-28 pb-5">
          {loading ? <DelayedLoader onDone={() => setLoading(false)} /> : children}
        </main>
        <Footer />
      </Provider>
    </body>
  </html>
  
  );
}
