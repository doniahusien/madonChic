"use client"
import Header from "@/components/Home/Header";
import MainCard from "@/components/Home/MainCard";
import TrendingProducts from "@/components/Home/TrendingProducts";
import RatedProducts from "@/components/Home/RatedProducts";
export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-10" >
        <Header />
        <MainCard />
        <TrendingProducts />
        <RatedProducts />
      </div>
  
    </>
  );
}
