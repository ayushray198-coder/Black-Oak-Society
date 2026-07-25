import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
    pagination,
    onPageChange,
}) {
    if (!pagination) return null;

    const {
        currentPage = 1,
        totalPages = 1,
        totalProducts = 0,
    } = pagination;

    const safeTotalPages = Math.max(1, totalPages);

    const hasPrevPage = currentPage > 1;
    const hasNextPage =
        currentPage < safeTotalPages;

    const pages = [];

    if (safeTotalPages <= 7) {
        for (
            let i = 1;
            i <= safeTotalPages;
            i++
        ) {
            pages.push(i);
        }
    } else {
        pages.push(1);

        if (currentPage > 3)
            pages.push("...");

        const start = Math.max(
            2,
            currentPage - 1
        );

        const end = Math.min(
            safeTotalPages - 1,
            currentPage + 1
        );

        for (
            let i = start;
            i <= end;
            i++
        ) {
            pages.push(i);
        }

        if (
            currentPage <
            safeTotalPages - 2
        ) {
            pages.push("...");
        }

        pages.push(safeTotalPages);
    }

    return (
        <section className="relative overflow-hidden bg-[#050505] py-24">

            {/* TOP GOLD LINE */}

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#C8A04D] to-transparent" />

            <div className="absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 bg-[#C8A04D]/15 blur-3xl" />

            {/* BOTTOM GOLD LINE */}

            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C8A04D] to-transparent" />

            <div className="absolute bottom-0 left-1/2 h-24 w-72 -translate-x-1/2 bg-[#C8A04D]/15 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* HEADER */}

                <div className="mb-10 text-center">

                    <span className="inline-flex items-center gap-3">

                        <span className="h-px w-10 bg-[#C8A04D]/40" />

                        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-[#C8A04D]">

                            Page Navigation

                        </p>

                        <span className="h-px w-10 bg-[#C8A04D]/40" />

                    </span>

                    <h3 className="mt-4 text-white">

                        Showing

                        <span className="mx-2 font-semibold text-[#C8A04D]">

                            {currentPage}

                        </span>

                        of

                        <span className="mx-2 font-semibold text-[#C8A04D]">

                            {safeTotalPages}

                        </span>

                        Pages
                    </h3>

                    <p className="mt-2 text-sm text-white/45">

                        {totalProducts} Premium Spirits Available

                    </p>

                </div>

                {/* GLASS CARD */}

                <div className="relative mx-auto flex max-w-fit items-center gap-4 rounded-full border border-[#C8A04D]/20 bg-white/[0.03] px-6 py-4 backdrop-blur-xl shadow-[0_0_50px_rgba(200,160,77,0.08)]">
                                    {/* PREVIOUS */}

                    <button
                        type="button"
                        disabled={!hasPrevPage}
                        onClick={() =>
                            hasPrevPage &&
                            onPageChange(currentPage - 1)
                        }
                        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A04D]/20 bg-[#0B0B0B] text-white transition-all duration-500 hover:-translate-x-1 hover:border-[#C8A04D] hover:bg-[#121212] hover:text-[#C8A04D] disabled:pointer-events-none disabled:opacity-40"
                    >
                        <ChevronLeft
                            size={18}
                            className="transition-transform duration-500 group-hover:-translate-x-0.5"
                        />
                    </button>

                    {/* PAGE BUTTONS */}

                    <div className="flex items-center gap-3">

                        {pages.map((page, index) =>
                            page === "..." ? (
                                <span
                                    key={`dots-${index}`}
                                    className="px-2 text-white/35"
                                >
                                    •••
                                </span>
                            ) : (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() =>
                                        onPageChange(page)
                                    }
                                    className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition-all duration-500 ${
                                        currentPage === page
                                            ? "border-[#C8A04D] bg-[#C8A04D] text-black shadow-[0_0_35px_rgba(200,160,77,0.45)]"
                                            : "border-[#C8A04D]/20 bg-[#0B0B0B] text-white hover:-translate-y-1 hover:border-[#C8A04D] hover:text-[#C8A04D]"
                                    }`}
                                >
                                    {currentPage === page && (
                                        <span className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                                    )}

                                    <span className="relative z-10">
                                        {page}
                                    </span>
                                </button>
                            )
                        )}

                    </div>

                    {/* NEXT */}

                    <button
                        type="button"
                        disabled={!hasNextPage}
                        onClick={() =>
                            hasNextPage &&
                            onPageChange(currentPage + 1)
                        }
                        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A04D]/20 bg-[#0B0B0B] text-white transition-all duration-500 hover:translate-x-1 hover:border-[#C8A04D] hover:bg-[#121212] hover:text-[#C8A04D] disabled:pointer-events-none disabled:opacity-40"
                    >
                        <ChevronRight
                            size={18}
                            className="transition-transform duration-500 group-hover:translate-x-0.5"
                        />
                    </button>

                </div>

            </div>

        </section>
    );
}

export default Pagination;