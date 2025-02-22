"use client"
import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password:"",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className="flex flex-col justify-center items-center sm:px-4 md:px-10 gap-8" onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button title="Login" />
            </form>
        </>
    )
}

export default LoginForm