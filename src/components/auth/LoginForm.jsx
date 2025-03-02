"use client"
import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { login } from '@/redux/features/auth/authThunk'
import { useSelector,useDispatch } from 'react-redux'

const LoginForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        email: "",
        password:"",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
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
                />{error&&<p className='text-red-600'>{error}</p>}
                <Button title="Login" loading={loading} />
            </form>
        </>
    )
}

export default LoginForm