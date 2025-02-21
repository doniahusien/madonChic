"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const AuthWrapper = ({ children, imgSrc, header, signup }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <div className="flex w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white">

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={`hidden md:flex w-1/2 items-center justify-center ${signup ? "" : "bg-gray-200"}  p-10`}>
                    <Image src={imgSrc} width={350} height={350} alt="Login Image" className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="w-full md:w-1/2 px-5 py-10">
                    <h1 className="text-4xl font-bold text-center mb-6 text-violet-900">{header}</h1>
                    {children}
                </motion.div>
            </div>
        </div>
    )
}

export default AuthWrapper