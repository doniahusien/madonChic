"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ isFlipped, cardNumber, name, expiry, cvv }) => {
    return (
        <motion.div
            className="relative w-full h-40 bg-gray-900 rounded-lg shadow-lg mb-6 p-4 text-white flex flex-col justify-between"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
        >
            {!isFlipped ? (
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <p className="text-xs">Card Number</p>
                    <p className="text-lg tracking-widest">{cardNumber || "**** **** **** ****"}</p>
                    <div className="flex justify-between mt-3">
                        <p className="text-xs">{name || "CARDHOLDER NAME"}</p>
                        <p className="text-xs">{expiry || "MM/YY"}</p>
                    </div>
                </div>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-lg">CVV: {cvv || "***"}</p>
                </div>
            )}
        </motion.div>
    );
};

export default AnimatedCard;
