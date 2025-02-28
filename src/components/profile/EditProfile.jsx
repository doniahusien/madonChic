import React from 'react'

const EditProfile = ({ profileData,setProfileData }) => {
    const handleProfileChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };
    const handleProfileSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
            <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={profileData.firstName}
                        onChange={handleProfileChange}
                        className="border p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={profileData.lastName}
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
                    name="mobile"
                    placeholder="Mobile No."
                    value={profileData.mobile}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                    required
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        name="zipCode"
                        placeholder="Country"
                        value={profileData.country}
                        onChange={handleProfileChange}
                        className="border p-2 rounded w-full"

                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                    Save Changes
                </button>
            </form>
        </div>
    )
}

export default EditProfile