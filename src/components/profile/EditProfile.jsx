"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "@/redux/features/profile/profileThunk";

const EditProfile = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    const [profileData, setProfileData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        street_address: "",
        city: "",
        country: "",
    });

   
    useEffect(() => {
        if (profile) {
            setProfileData({
                first_name: profile.first_name || "",
                last_name: profile.last_name || "",
                email: profile.email || "",
                phone: profile.phone || "",
                street_address: profile.address?.street_address || "",
                city: profile.address?.city || "",
                country: profile.address?.country || "",
            });
        }
    }, [profile]);

    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        console.log(profileData);
        
        dispatch(updateProfile(profileData));
    };

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={profileData.first_name}
                        onChange={handleProfileChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={profileData.last_name}
                        onChange={handleProfileChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Mobile No."
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="text"
                    name="street_address"
                    placeholder="Street Address"
                    value={profileData.street_address}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={profileData.city}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={profileData.country}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
