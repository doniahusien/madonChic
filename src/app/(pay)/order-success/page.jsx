"use client"
import React from 'react'
import dynamic from "next/dynamic";
const OrderSuccess = dynamic(() => import("@/components/payment/OrderSuccess"), { ssr: false });
const page = () => {
  return (
    <OrderSuccess />
  )
}

export default page