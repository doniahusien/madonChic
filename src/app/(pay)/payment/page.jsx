"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedCard from "@/components/payment/AnimatedCard";
import PaymentForm from "@/components/payment/PaymentForm";

const PaymentPage = () => {
    const router = useRouter();
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiry: "",
        cvv: "",
        name: "",
    });

    const handlePayment = (formData) => {
        setCardDetails(formData);
        router.push("/order-success");
    };

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Secure Payment</h2>
                
                {/* Animated Credit Card */}
                <AnimatedCard 
                    isFlipped={false} 
                    cardNumber={cardDetails.cardNumber} 
                    name={cardDetails.name} 
                    expiry={cardDetails.expiry} 
                    cvv={cardDetails.cvv} 
                />
                
                {/* Payment Form */}
                <PaymentForm onSubmit={handlePayment} />
            </div>
        </motion.div>
    );
};

export default PaymentPage;
