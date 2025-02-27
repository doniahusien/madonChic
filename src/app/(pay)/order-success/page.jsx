"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const OrderSuccess = () => {
    const router = useRouter();
    
    return (
        <motion.div 
            className="flex flex-col items-center justify-center h-screen text-center px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: "spring", stiffness: 120 }}
            >
                <CheckCircle className="text-green-500" size={80} />
            </motion.div>
            
            <motion.h1 
                className="text-2xl font-bold mt-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Order Confirmed!
            </motion.h1>
            
            <motion.p 
                className="text-gray-600 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Thank you for your purchase. Your order has been successfully placed.
            </motion.p>
            
            <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                You will receive a confirmation email with order details shortly.
            </motion.p>
            
            <motion.button 
                className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                onClick={() => router.push("/")}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Continue Shopping
            </motion.button>
        </motion.div>
    );
};

export default OrderSuccess;