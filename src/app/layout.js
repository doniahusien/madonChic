"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import DelayedLoader from "@/components/Loader/DelayedLoader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav/Nav";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider store={store}>
          <Nav/>
          {loading? <DelayedLoader onDone={()=>setLoading(false)}/>:children}
        </Provider>
      </body>
    </html>
  );
}
