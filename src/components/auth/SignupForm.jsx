"use client"
import React from 'react'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '@/redux/features/auth/authThunk'
const SignupForm = () => {
    const dispacth = useDispatch();
    const { loading, error } = useSelector(state => state.auth);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: "",
        date: ""
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispacth(signup(formData));
    }
    return (
        <>
            <form className="flex text-start flex-col justify-center  gap-5 w-full sm:p-4 md:p-8 " onSubmit={handleSubmit}>

                <div className='flex w-full gap-5 flex-col sm:flex-col md:flex-row justify-between'>
                    <Input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange} />

                    <Input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={formData.last_name}
                        onChange={handleChange} />
                </div>
                {error?.first_name && <p className="text-red-500 text-sm">{error.first_name[0]}</p>}
                {error?.last_name && <p className="text-red-500 text-sm">{error.last_name[0]}</p>}


                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                />
{error?.email && <p className="text-red-500 text-sm">{error.email[0]}</p>}


                <Input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
{error?.phone && <p className="text-red-500 text-sm">{error.phone[0]}</p>}
<Input
                    type="date"
                    name="date"
                    placeholder="date"
                    value={formData.date}
                    onChange={handleChange}
                />
{error?.date && <p className="text-red-500 text-sm">{error.date[0]}</p>}


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
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                    />
                </div>
                {error?.password && <p className="text-red-500 text-sm">{error.password[0]}</p>}


                <Button title="Sign up" loading={loading} />
            </form>
        </>
    )
}

export default SignupForm