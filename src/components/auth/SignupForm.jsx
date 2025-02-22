"use client"
import React from 'react'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        conPassword:"",
        date: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className="flex flex-col justify-center items-center gap-5 w-full sm:p-4 md:p-8 " onSubmit={handleSubmit}>

                <div className='flex w-full gap-5 flex-col sm:flex-col md:flex-row justify-between'>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange} />

                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange} />
                </div>


                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}

                />
                <Input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <Input
                    type="date"
                    name="date"
                    placeholder="date"
                    value={formData.date}
                    onChange={handleChange}
                />


                <div className='flex w-full gap-5 flex-col sm:flex-col md:flex-row justify-between'>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        name="conpassword"
                        placeholder="Confirm Password"
                        value={formData.conPassword}
                        onChange={handleChange}
                    />
                </div>

                <Button title="Sign up" />
            </form>
        </>
    )
}

export default SignupForm