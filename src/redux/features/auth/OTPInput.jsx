"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useState,useRef } from 'react'
const OTPInput = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleChange = (index, value) => {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                inputRefs[index + 1].current.focus();
            }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <>
            <div className="flex justify-center mt-5 space-x-3">
                {otp.map((digit, index) => (
                    <motion.input
                        key={index}
                        ref={inputRefs[index]}
                        type="text"
                        value={digit}
                        maxLength="1"
                        className="w-12 h-12 border-b-2 border-gray-400 text-center text-xl outline-none focus:border-blue-600"
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                    />
                ))}
            </div>
        </>
    )
}

export default OTPInput