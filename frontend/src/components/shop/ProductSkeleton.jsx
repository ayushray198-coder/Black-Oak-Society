function ProductSkeleton({ count = 12 }) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-3xl border border-[#C8A04D]/10 bg-[#0B0B0B] animate-pulse"
                >
                    <div className="flex h-64 items-center justify-center bg-[#111111]">
                        <div className="h-48 w-24 rounded-xl bg-[#1B1B1B]" />
                    </div>

                    <div className="space-y-4 p-5">
                        <div className="space-y-2">
                            <div className="h-3 w-20 rounded-full bg-[#1B1B1B]" />

                            <div className="h-5 w-4/5 rounded-full bg-[#1B1B1B]" />

                            <div className="h-5 w-2/3 rounded-full bg-[#1B1B1B]" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="h-4 w-24 rounded-full bg-[#1B1B1B]" />

                            <div className="h-5 w-20 rounded-full bg-[#1B1B1B]" />
                        </div>

                        <div className="h-11 w-full rounded-full bg-[#1B1B1B]" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductSkeleton;