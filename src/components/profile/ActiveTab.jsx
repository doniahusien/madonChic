import React from 'react'

const ActiveTab = ({activeTab,setActiveTab}) => {
    return (
        <div className="flex mt-4 border-b">
            <button
                className={`px-4 py-2 font-semibold ${activeTab === "editProfile" ? "text-white bg-red-600" : "hover:text-red-600"}`}
                onClick={() => setActiveTab("editProfile")}
            >
                Edit Profile
            </button>
            <button
                className={`px-4 py-2 font-semibold ${activeTab === "orders" ? "text-white bg-red-600" : "hover:text-red-600"}`}
                onClick={() => setActiveTab("orders")}
            >
                Your Order
            </button>
        </div>
    )
}

export default ActiveTab