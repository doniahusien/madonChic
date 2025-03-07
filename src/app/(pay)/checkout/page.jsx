"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckoutInfo,checkAddress } from "@/redux/features/checkout/checkoutThunk";

const Checkout = () => {
    const { subtotal,shipping,total }=useSelector((state) => state.checkout);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCheckoutInfo());
    }, []);

    const router = useRouter();
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        street_address: "",
        city: "",
        country: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(checkAddress(formData));
        if (result.payload.message === " User location stored successfully") {
            router.push("/payment");
        }
        
    };

    return (
        <motion.div 
            className="min-h-screen flex items-center justify-center bg-gray-100 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 border border-gray-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Checkout</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.input 
                            type="text" name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            required
                            whileFocus={{ scale: 1.03 }}
                        />
                        <motion.input 
                            type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            required
                            whileFocus={{ scale: 1.03 }}
                        />
                    </div>
                    <motion.input 
                        type="text" name="street_address" placeholder="Street Address" value={formData.street_address} onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                        required
                        whileFocus={{ scale: 1.03 }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.input 
                            type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            required
                            whileFocus={{ scale: 1.03 }}
                        />
                        <motion.input 
                            type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                            required
                            whileFocus={{ scale: 1.03 }}
                        />
                    </div>

                   

                    <div className="border-t border-gray-300 pt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h3>
                        <div className="flex justify-between text-gray-700">
                            <p>Subtotal:</p>
                            <p className="font-bold">Rs. {subtotal}</p>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <p>Shipping:</p>
                            <p className="font-bold">Rs. {shipping}</p>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-gray-900 mt-3">
                            <p>Total:</p>
                            <p>Rs. {total}</p>
                        </div>
                    </div>

                    <motion.button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md font-semibold hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🛍️ Place Order
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default Checkout;
