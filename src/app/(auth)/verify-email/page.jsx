"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import OTPInput from "@/components/auth/OTPInput";
import check from "../../../../public/check.png"; 

const VerifyEmail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-violet-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center bg-white p-8 rounded-xl shadow-md text-center max-w-md w-full"
      >
        <div className="flex justify-center w-full">
          <Image src={check} width={200} height={250} alt="check email" />
        </div>

  
        <h1 className="text-2xl font-bold text-gray-800">Email Verification</h1>
        <p className="text-gray-600 mt-2">
          Please enter the 4-digit code sent to your email
        </p>
        <p className="text-gray-800 font-semibold mt-1">d@gmail.com</p>
        <OTPInput />

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.85 }}
          className="bg-blue-600 text-white px-6 py-2 mt-5 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Verify
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
