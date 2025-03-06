"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash, Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "@/redux/features/shop/shopThunk";
import { addToCart } from "@/redux/features/cart/cartThunk";
const CartItems = ({ cartItems }) => {
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.shop); 
    const [products, setProducts] = useState({});
    useEffect(() => {
        cartItems.forEach((item) => {
            dispatch(fetchProduct({ product_id: item.product_id })).then((action) => {
                if (action.payload) {
                    setProducts((prev) => ({
                        ...prev,
                        [item.product_id]: action.payload, 
                    }));
                }
            });
        });
    }, [cartItems, dispatch]);

    return (
        <motion.div
            className="mt-5 space-y-5 overflow-y-auto max-h-[60vh] pr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {cartItems.map((item, index) => {
                const itemProduct = products[item.product_id] || {};

                return (
                    <motion.div
                        key={index}
                        className="flex items-center gap-5 border-b pb-3"
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 150, damping: 10, delay: index * 0.1 }}
                        exit={{ opacity: 0, x: 100 }}
                    >
                        <img
                            src={itemProduct.image_1 || "/placeholder.jpg"}
                            alt={itemProduct.name || "Product Image"}
                            className="w-24 h-24 object-cover rounded"
                        />

                        <div className="flex-1 space-y-2">
                            <p className="text-sm md:text-lg">{itemProduct.name || "Loading..."}</p>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>

                            <div className="flex justify-between items-center gap-2 mt-2">
                                <motion.div className="flex gap-1 md:gap-2" >
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
                                    <motion.button
                                        onClick={() => {
                                            dispatch(addToCart({ product_id: item.product_id, size: item.size, quantity:1 }));
                                        }} 
                                        className="border px-2 rounded"
                                        whileTap={{ scale: 0.9 }}>
                                        <Plus size={14} />
                                    </motion.button>
                                </motion.div>

                                <motion.div whileHover={{ rotate: 10 }} whileTap={{ scale: 0.8 }}>
                                    <Trash className="cursor-pointer text-gray-500 hover:text-red-500" size={18} />
                                </motion.div>
                            </div>

                            <p className="text-sm">Rs. {itemProduct.price_after_discount}</p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default CartItems;
