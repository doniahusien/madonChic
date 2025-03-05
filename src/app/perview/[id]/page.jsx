"use client";
import ProductDetails from "@/components/preview/ProductDetails";
import ProductImages from "@/components/preview/ProductImages";
import ProductReviews from "@/components/preview/ProductReviews";
import DeliverySection from "@/components/preview/DeliverySection";
import { useSelector, useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { fetchProduct, fetchProductReview } from "@/redux/features/shop/shopThunk";
import { useParams } from "next/navigation";
import ReviewModel from "@/components/preview/ReviewModel"

export default function ProductPreview() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const { product, review, loading, error } = useSelector((state) => state.shop);

    useEffect(() => {
        if (id) {
            dispatch(fetchProduct({ product_id: id }));
            dispatch(fetchProductReview({ product_id: id }));
        }
    }, [dispatch, id]);

    const images = product
        ? Object.keys(product)
            .filter((key) => key.startsWith("image_"))
            .map((key) => product[key])
            .filter((url) => url)
        : [];

    const products = {
        sizes: ["XS", "S", "M", "L", "XL"],
        description:
            "Navy blue woven formal Slim fit Mid-rise length, regular pattern solid flat-front, with no pleats design, feature: plain, 4 pockets.",
    };
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="flex flex-col justify-center md:justify-start gap-5 pt-5 px-2 md:px-10 bg-gray-100">
            <div className="flex flex-col justify-center md:justify-start gap-5 md:flex-row">
                {images.length > 0 && <ProductImages images={images} />}
                {product && <ProductDetails product={product} sizes={products.sizes} />}
            </div>

            <div className="flex w-full md:w-1/2 justify-between items-center border-b pb-2">
                <h3 className="text-lg font-semibold">
                    Total Reviews {product.reviews}
                </h3>
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowModal(true)}
                >
                    Write Review
                </button>
            </div>
            {review.length > 0 && <ProductReviews review={review} setShowModal={setShowModal} showModal={showModal}  totalReview={product.reviews} />}
            {showModal && <ReviewModel showModal={showModal} setShowModal={setShowModal} />}
            <DeliverySection />
        </div>
    );
}
