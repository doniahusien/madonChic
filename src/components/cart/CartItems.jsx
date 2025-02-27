"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Trash, Minus, Plus } from "lucide-react";

const CartItems = ({ cartItems }) => {
    return (
        <motion.div
            className="mt-5 space-y-5 overflow-y-auto max-h-[60vh] pr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {cartItems.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex items-center gap-5 border-b pb-3"
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10, delay: index * 0.1 }}
                    exit={{ opacity: 0, x: 100 }}
                >
                    <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-1 space-y-2">
                        <p className="text-sm md:text-lg">{item.name}</p>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>

                        {/* Quantity Controls with Scale Animation */}
                        <div className="flex justify-between items-center gap-2 mt-2">
                            <motion.div
                                className="flex gap-1 md:gap-2"
                                whileTap={{ scale: 1.1 }}
                            >
                                <motion.button className="border px-2 rounded" whileTap={{ scale: 0.9 }}>
                                    <Minus size={14} />
                                </motion.button>
                                <motion.span
                                    key={item.quantity}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {item.quantity}
                                </motion.span>
                                <motion.button className="border px-2 rounded" whileTap={{ scale: 0.9 }}>
                                    <Plus size={14} />
                                </motion.button>
                            </motion.div>

                            {/* Trash Icon with Rotation Effect */}
                            <motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.8 }}>
                                <Trash className="cursor-pointer text-gray-500 hover:text-red-500" size={18} />
                            </motion.div>
                        </div>

                        <p className="text-sm">Rs. {item.price}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default CartItems;
