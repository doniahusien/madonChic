"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Input = ({ type, placeholder, name, value, onChange }) => {
    return (
        <>
            <motion.input
                initial={{ opacity: 0.8 }}
                whileFocus={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border w-full mx-1 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
               
            />
        </>
    )
}

export default Input