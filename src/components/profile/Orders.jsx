"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "@/redux/features/profile/profileThunk";

const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.profile);

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Your Orders</h3>

            {orders && orders.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                                <th className="px-6 py-3 border-b text-left font-semibold">Order Number</th>
                                <th className="px-6 py-3 border-b text-left font-semibold">Total Price</th>
                                <th className="px-6 py-3 border-b text-left font-semibold">Status</th>
                                <th className="px-6 py-3 border-b text-left font-semibold">Placed On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={order.id} className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}>
                                    <td className="px-6 py-4 text-gray-700">{order.order_number}</td>
                                    <td className="px-6 py-4 font-medium text-gray-800">${order.total_price}</td>
                                    <td className={`px-6 py-4 font-semibold ${order.status === "pending" ? "text-yellow-500" : "text-green-500"}`}>
                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {new Date(order.created_at).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500 text-lg">No orders placed yet.</p>
            )}
        </div>
    );
};

export default Orders;
