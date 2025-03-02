"use client"
import React from 'react'
import { motion } from 'framer-motion'
const Button = ({ title,loading=false }) => {
    return (
        <>
            <motion.button
                disabled={loading}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9, y: 2 }}
                type="submit"
                className="bg-blue-600 w-1/2 m-auto text-white p-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
                {title}
            </motion.button></>
    )
}

export default Button