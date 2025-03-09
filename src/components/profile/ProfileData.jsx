"use client"
import React from 'react'
import { logout } from '@/redux/features/auth/authThunk'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
const ProfileData = ({profile, handleImageChange, selectedImage}) => {
    const dispatch = useDispatch();
    const router = useRouter()
    const handleLogout = async () => {
        const result = await dispatch(logout());
        if (logout.fulfilled.match(result)) {
            router.push("/login");
        }
    }
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-4">
            <div className="relative w-24 h-24 bg-gray-200 rounded-full flex  items-center justify-center overflow-hidden">
                <img
                    src={selectedImage ||profile.image}
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
                <h3 className=" sm:text-base md:text-lg font-semibold">
                    Name - {profile.full_name} 
                </h3>
                <p className="text-gray-600">Email - {profile.email}</p>
                <p className="text-gray-600">Mobile No. - {profile.phone}</p>
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