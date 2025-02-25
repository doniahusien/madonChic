export default function ProductPreview({ params }) {
    const { id } = params;

    return (
        <div>
            <h1>Product Preview</h1>
            <h2>Product ID: {id}</h2>
        </div>
    );
}
