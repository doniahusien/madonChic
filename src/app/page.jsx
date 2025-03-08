"use client";
import dynamic from "next/dynamic";


const Header = dynamic(() => import("@/components/Home/Header"));
const MainCard = dynamic(() => import("@/components/Home/MainCard"));
const TrendingProducts = dynamic(() => import("@/components/Home/TrendingProducts"));
const RatedProducts = dynamic(() => import("@/components/Home/RatedProducts"));

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <MainCard />
      <TrendingProducts />
      <RatedProducts />
    </div>
  );
}
