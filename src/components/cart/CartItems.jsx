"use client";
import React, { useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Trash, Minus, Plus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementProduct, removeProduct } from "@/redux/features/cart/cartThunk";

const CartItems = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart?.cart || []);


    const memoizedCart = useMemo(() => cart, [cart]);

    const handleDecrement = useCallback((item) => {
        dispatch(decrementProduct({ product_id: item.product_id, size: item.size }));
    }, [dispatch]);

    const handleIncrement = useCallback((item) => {
        dispatch(addToCart({ product_id: item.product_id, size: item.size, quantity: 1 }));
    }, [dispatch]);

    const handleRemove = useCallback((item) => {
        dispatch(removeProduct({ product_id: item.product_id, size: item.size }));
    }, [dispatch]);

    return (
        <motion.div
            className="mt-5 space-y-5 overflow-y-auto max-h-[60vh] pr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {memoizedCart.length > 0 ? (
                memoizedCart.map((item, index) => (
                    <motion.div
                        key={`${item.product_id}-${item.size}`} 
                        className="flex items-center gap-5 border-b pb-3"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: index * 0.05 }}
                        exit={{ opacity: 0, x: 100 }}
                    >
                        {/* Product Image */}
                        {item?.product?.images?.image_1 && (
                            <img
                                src={item.product.images.image_1}
                                alt="Product Image"
                                className="w-24 h-24 object-cover rounded"
                            />
                        )}

                        <div className="flex-1 space-y-2">
                            <p className="text-sm md:text-lg">{item?.product?.name || "Loading..."}</p>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>

                            {/* Quantity Controls */}
                            <div className="flex justify-between items-center gap-2 mt-2">
                                <motion.div className="flex gap-2">
                                    <motion.button
                                        onClick={() => handleDecrement(item)}
                                        className="border px-2 rounded"
                                        whileTap={{ scale: 0.9 }}
                                    >
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
                                        onClick={() => handleIncrement(item)}
                                        className="border px-2 rounded"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Plus size={14} />
                                    </motion.button>
                                </motion.div>

                                {/* Remove Product */}
                                <motion.div
                                    onClick={() => handleRemove(item)}
                                    whileHover={{ rotate: 10 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <Trash className="cursor-pointer text-gray-500 hover:text-red-500" size={18} />
                                </motion.div>
                            </div>

                            {/* Product Price */}
                            <p className="text-sm">Rs. {item?.product?.price_after_discount || 0}</p>
                        </div>
                    </motion.div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
        </motion.div>
    );
};

export default CartItems;
