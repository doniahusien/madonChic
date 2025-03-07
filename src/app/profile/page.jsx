"use client";
import EditProfile from "@/components/profile/EditProfile";
import React, { useState,useEffect } from "react";
import ProfileData from "@/components/profile/ProfileData";
import Orders from "@/components/profile/Orders";
import ActiveTab from "@/components/profile/ActiveTab";
import { fetchProfile, uploadImage } from "@/redux/features/profile/profileThunk";
import { useSelector,useDispatch } from "react-redux";
const ProfilePage = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
   
    useEffect(() => {
        dispatch(fetchProfile());
    }, []);


    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("editProfile");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            dispatch(uploadImage(file));
        }
    };


    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Customer Dashboard</h2>
            <ProfileData profile={profile} handleImageChange={handleImageChange} selectedImage={selectedImage} />
            <ActiveTab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "editProfile" ? (
                <EditProfile />
            ) : (
                <Orders />
            )}
        </div>
    );
};

export default ProfilePage;
