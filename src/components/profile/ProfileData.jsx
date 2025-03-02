"use client"
import React from 'react'
import { logout } from '@/redux/features/auth/authThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
const ProfileData = (profileData, handleImageChange,selectedImage) => {
    const dispatch = useDispatch();
    const router =useRouter()
    const handleLogout = async() => {
        const result = await dispatch(logout());
        if (logout.fulfilled.match(result)) {
            router.push("/login");
            console.log("Logout Success")
        }
    }
    return (
        <div className="flex items-center gap-6 border-b pb-4">
            <div className="relative w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img
                    src={selectedImage || "/profile-placeholder.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute bottom-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>
            <div>
                <h3 className="text-xl font-semibold">
                    {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-600">Email - {profileData.email}</p>
                <p className="text-gray-600">Mobile No. - {profileData.mobile}</p>
                <button
                    onClick={handleLogout}
                    className="mt-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ProfileData