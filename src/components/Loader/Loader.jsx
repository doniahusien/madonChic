"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RippleLoader() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; 

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            {/* Ripple Circles */}
            <div className="relative w-20 h-20 flex justify-center items-center">
                <motion.div
                    className="absolute w-full h-full border-4 border-violet-600 rounded-full"
                    animate={{ scale: [1, 2], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute w-16 h-16 border-4 border-violet-300 rounded-full"
                    animate={{ scale: [1, 2], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute w-10 h-10 border-violet-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}
