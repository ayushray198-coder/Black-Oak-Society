function ProductDescription({ description }) {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A04D]/10 blur-[150px]" />

            <div className="relative mx-auto max-w-5xl px-5">

                {/* Section Header */}

                <div className="text-center">

                    <span
                        className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.45em]
                            text-[#C8A04D]
                        "
                    >
                        The Experience
                    </span>

                    <h2
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            text-white
                            md:text-5xl
                        "
                    >
                        Product Description
                    </h2>

                    <div className="mx-auto mt-6 h-px w-24 bg-[#C8A04D]" />

                </div>

                {/* Content */}

                <div
                    className="
                        relative
                        mt-16
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-[#2A2A2A]
                        bg-[#0A0A0A]
                        p-8
                        md:p-12
                    "
                >

                    {/* Decorative Glow */}

                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C8A04D]/10 blur-[120px]" />

                    {/* Quote */}

                    <div className="relative">

                        <span
                            className="
                                text-7xl
                                font-serif
                                leading-none
                                text-[#C8A04D]/30
                            "
                        >
                            "
                        </span>

                        <p
                            className="
                                -mt-8
                                text-lg
                                leading-10
                                text-neutral-300
                                md:text-xl
                            "
                        >
                            {description}
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ProductDescription;