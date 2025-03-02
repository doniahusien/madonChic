"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector, } from 'react-redux'
const GuestRoute = ({ children }) => {
    const router = useRouter();
    const { token } = useSelector(state => state.auth);
    useEffect(() => {
        if (token) {
            router.push("/")
        }
    }, [token], router)

    return <>{!token ? children : null}</>;
}

export default GuestRoute