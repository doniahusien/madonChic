"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MainCard = () => {
    const cards = [
        { imgs: "/man.jpg.webp", label: "Men's Fashion", href: "/men" },
        { imgs: "/woman.jpg.webp", label: "Women's Fashion", href: "/women" },
    ];

    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-2xl font-bold mb-6">WARDROBE</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:px-10">
                {cards.map((item, index) => (
                    <motion.div
                        key={index}
                        transition={{ duration: 0.8, delay: index * 0.5 }}
                        whileHover={{ scale: 1.08 }} 
                        className="relative shadow-lg drop-shadow-lg shadow-gray-500 overflow-hidden"
                    >
                        <Image
                            src={item.imgs}
                            alt={item.label}
                            width={800}
                            height={500}
                            className="w-full h-[350px] object-cover"
                        />
                        <Link href={item.href} className={`absolute bottom-4 ${item.label == "Women's Fashion" ? "right-4" : "left-4"}  text-black font-bold text-lg`}>
                            {item.label}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MainCard;
