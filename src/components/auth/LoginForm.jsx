"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Input from './Input'
import Button from './Button'
import { login } from '@/redux/features/auth/authThunk'
import { useSelector, useDispatch } from 'react-redux'

const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get("redirect") || "/"; 

    const { loading, error, token } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(login(formData));

        if (result.meta.requestStatus === "fulfilled") {
            router.push(redirectPath);
        }
    };

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
                {error && <p className='text-red-600'>{error}</p>}
                <Button title="Login" loading={loading} />
            </form>
        </>
    );
};

export default LoginForm;
