"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const OTPInput = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex justify-center space-x-3 mt-4">
            {otp.map((digit, index) => (
                <motion.input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    maxLength={1}
                    className="w-12 h-12 border-b-2 border-gray-400 text-center text-xl outline-none focus:border-blue-600 bg-transparent"
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    autoComplete="one-time-code"
                    inputMode="numeric"
                />
            ))}
        </div>
    );
};

export default OTPInput;
