import ProductDetails from "@/components/preview/ProductDetails";
import ProductImages from "@/components/preview/ProductImages";
import ProductReviews from "@/components/preview/ProductReviews";
import DeliverySection from "@/components/preview/DeliverySection";
export default function ProductPreview({ params }) {
    const { id } = params;
    const product =
        {
            id: "1",
            name: "Men Solid Slim Fit Mid-Rise Formal Trousers",
            price: 999,
            originalPrice: 2298,
            discount: 57,
            sizes: ["XS", "S", "M", "L", "XL"],
            images: [
                "/preview.jpeg",
                "/preview.jpeg",
                "/preview.jpeg"
            ],
            description:
                "Navy blue woven formal Slim fit Mid-rise length, regular pattern solid flat-front, with no pleats design, feature: plain, 4 pockets.",
            reviews: [],
        }
    return (

        <div className="flex flex-col justify-center md:justify-start gap-5 pt-5 px-2 md:px-10 bg-gray-100">
            <div className="flex flex-col justify-center md:justify-start gap-5 md:flex-row">
                <ProductImages images={product.images} />
                <ProductDetails product={product} />
            </div>
            <ProductReviews review={product.reviews}/>
            <DeliverySection />
        </div>
    );
}
