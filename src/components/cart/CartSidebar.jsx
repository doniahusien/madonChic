"use client"
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import CartItems from "./CartItems";
const CartSidebar = ({ cartOpen, setCart }) => {
    const router = useRouter();
    const cartItems = [
        { id: 1, name: "Printed Lifestyle T-shirt", size: "L", price: 650, quantity: 4, img: "/Men.jpeg" },
        { id: 2, name: "Dress", size: "XS", price: 650, quantity: 4, img: "/rated1.jpeg" },
        { id: 3, name: "Printed Lifestyle T-shirt", size: "L", price: 650, quantity: 4, img: "/Men.jpeg" },
        { id: 4, name: "Dress", size: "XS", price: 650, quantity: 4, img: "/rated1.jpeg" },
    ];
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: cartOpen ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg p-8 z-50"
        >
            <div className="flex justify-between items-center border-b pb-3">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800">Shop</h1>
                <X onClick={() => setCart(false)} className="cursor-pointer" />
            </div>
            <CartItems cartItems={cartItems} />       
            <div className="mt-5 space-y-4 border-t pt-3">
                <div className="flex justify-between text-lg">
                    <span>SUBTOTAL</span>
                    <span>Rs. {subtotal}</span>
                </div>
                <p className="text-xs text-gray-500">Shipping, taxes, and discounts calculated at checkout.</p>
                <button onClick={()=>router.push("/checkout")} className="w-full bg-black text-white py-2 mt-3 rounded">Check out</button>
            </div>
        </motion.div>
    );
};

export default CartSidebar;
