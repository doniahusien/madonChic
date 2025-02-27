"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const PaymentForm = ({ onSubmit }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [name, setName] = useState("");
    const [isFlipped, setIsFlipped] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ cardNumber, expiry, cvv, name });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
                <label className="block text-gray-700">Cardholder Name</label>
                <motion.input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    whileFocus={{ scale: 1.05 }}
                />
            </div>

            <div className="relative">
                <label className="block text-gray-700">Card Number</label>
                <motion.input
                    type="text"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    whileFocus={{ scale: 1.05 }}
                />
            </div>

            <div className="flex gap-4">
                <div>
                    <label className="block text-gray-700">Expiry Date</label>
                    <motion.input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
                <div>
                    <label className="block text-gray-700">CVV</label>
                    <motion.input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="123"
                        value={cvv}
                        onFocus={() => setIsFlipped(true)}
                        onBlur={() => setIsFlipped(false)}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        whileFocus={{ scale: 1.05 }}
                    />
                </div>
            </div>

            <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg shadow-lg font-semibold hover:scale-105 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                Pay Now
            </motion.button>
        </form>
    );
};

export default PaymentForm;
