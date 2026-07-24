import SignatureCard from "./SignatureCard";

function SignatureGrid({ products = [] }) {
    const visibleProducts = products.slice(0, 3);

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-8

                md:grid-cols-2
                lg:grid-cols-3

                xl:grid-cols-3
            "
        >
            {visibleProducts.map((product) => (
                <SignatureCard
                    key={product._id || product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default SignatureGrid;