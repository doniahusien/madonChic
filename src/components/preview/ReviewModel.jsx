"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { addProductReview } from "@/redux/features/shop/shopThunk";
import { useParams } from "next/navigation";

const ReviewModel = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [stars, setStars] = useState(0);
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addProductReview({ product_id: id, stars, comment }));
        setShowModal(false);
    };

    return (
        showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                    <h2 className="text-xl font-semibold">Write Review</h2>

                    {/* Star Rating Selection */}
                    <div className="flex gap-1 my-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`cursor-pointer text-2xl ${
                                    star <= stars ? "text-yellow-400" : "text-gray-300"
                                }`}
                                onClick={() => setStars(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    {/* Review Input */}
                    <textarea
                        className="w-full border p-2 rounded mb-4"
                        rows="4"
                        placeholder="Write your review here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    {/* Submit Button */}
                    <div className="flex justify-between items-center">
                        <button
                            className="w-full bg-red-600 text-white py-2 rounded"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>

                    {/* Close Button */}
                    <button
                        className="absolute top-3 right-3 text-xl text-gray-600"
                        onClick={() => setShowModal(false)}
                    >
                        <X />
                    </button>

                    <p className="text-sm text-gray-500 mt-2">
                        Note: If you've already added a review, then it will be edited.
                    </p>
                </div>
            </div>
        )
    );
};

export default ReviewModel;
