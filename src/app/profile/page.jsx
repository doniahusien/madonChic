"use client";
import EditProfile from "@/components/profile/EditProfile";
import React, { useState } from "react";
import ProfileData from "@/components/profile/ProfileData";
import ActiveTab from "@/components/profile/ActiveTab";

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        firstName: "Donia",
        lastName: "Hussein",
        email: "donhus862003@gmail.com",
        mobile: "1006084649",
        address: "",
        city: "",
        country: "",
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("editProfile");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };


    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Customer Dashboard</h2>
            <ProfileData profileData={profileData} handleImageChange={handleImageChange} selectedImage={selectedImage} />
            <ActiveTab setActiveTab={setActiveTab} activeTab={activeTab} />
        {activeTab === "editProfile" ? (
                <EditProfile profileData={profileData} setProfileData={setProfileData } />
            ) : (
                <Orders />
            )}
        </div>
    );
};

export default ProfilePage;
