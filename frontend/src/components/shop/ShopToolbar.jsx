import { useMemo, useState } from "react";
import {
    Grid2X2,
    List,
    RotateCcw,
    Search,
} from "lucide-react";
import LuxurySelect from "../ui/LuxurySelect";

const categoryOptions = [
    "All Categories",
    "Whisky",
    "Rum",
    "Gin",
    "Vodka",
    "Brandy",
];

const sortOptions = [
    "Featured",
    "Newest",
    "Price : Low to High",
    "Price : High to Low",
    "Name : A-Z",
];

function ShopToolbar({
    filters,
    brands = [],
    onFilterChange,
    totalProducts = 0,
}) {
    const [view, setView] = useState("grid");

    const brandOptions = useMemo(
        () => [
            {
                label: "All Brands",
                value: "",
            },
            ...brands.map((brand) => ({
                label: brand.name,
                value: brand._id,
            })),
        ],
        [brands]
    );

    const handleReset = () => {
        onFilterChange({
            page: 1,
            search: "",
            category: "",
            brand: "",
            sort: "",
            minPrice: "",
            maxPrice: "",
        });
    };

    return (
        <section className="border-y border-[#C8A04D]/10 bg-[#080808]">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6">

                {/* Top */}

                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

                    <div className="flex flex-1 flex-wrap gap-4">

                        {/* Search */}

                        <div className="relative w-full xl:w-80">

                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A04D]/70"
                            />

                            <input
                                type="text"
                                value={filters.search ?? ""}
                                placeholder="Search premium spirits..."
                                onChange={(e) =>
                                    onFilterChange({
                                        search: e.target.value,
                                    })
                                }
                                className="h-12 w-full rounded-full border border-[#C8A04D]/15 bg-[#111111] pl-12 pr-5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 hover:border-[#C8A04D]/40 focus:border-[#C8A04D]/60"
                            />

                        </div>

                        {/* Category */}

                        <LuxurySelect
                            value={
                                filters.category ||
                                categoryOptions[0]
                            }
                            options={categoryOptions}
                            onChange={(value) =>
                                onFilterChange({
                                    category:
                                        value === "All Categories"
                                            ? ""
                                            : value,
                                })
                            }
                        />

                        {/* Brand */}

                        <LuxurySelect
                            value={filters.brand}
                            options={brandOptions}
                            placeholder="All Brands"
                            onChange={(value) =>
                                onFilterChange({
                                    brand: value,
                                })
                            }
                        />

                        {/* Sort */}

                        <LuxurySelect
                            value={
                                filters.sort ||
                                sortOptions[0]
                            }
                            options={sortOptions}
                            onChange={(value) =>
                                onFilterChange({
                                    sort:
                                        value === "Featured"
                                            ? ""
                                            : value,
                                })
                            }
                        />

                        {/* Reset */}

                        <button
                            onClick={handleReset}
                            className="flex h-12 items-center justify-center gap-2 rounded-full border border-[#C8A04D]/15 bg-[#111111] px-5 text-sm text-white transition-all duration-300 hover:border-[#C8A04D]/40 hover:bg-[#161616]"
                        >
                            <RotateCcw
                                size={16}
                                className="text-[#C8A04D]"
                            />
                            Reset
                        </button>

                    </div>

                    {/* Right */}

                    <div className="flex flex-wrap items-center gap-4">

                        <p className="text-sm uppercase tracking-[0.18em] text-white/55">
                            Showing{" "}
                            <span className="font-semibold text-[#D8B46A]">
                                {totalProducts}
                            </span>{" "}
                            Premium Spirits
                        </p>

                        <div className="flex overflow-hidden rounded-full border border-[#C8A04D]/15 bg-[#111111]">

                            <button
                                type="button"
                                onClick={() => setView("grid")}
                                className={`flex h-12 w-12 items-center justify-center transition-all duration-300 ${view === "grid"
                                    ? "bg-[#C8A04D] text-black"
                                    : "text-white hover:bg-[#181818]"
                                    }`}
                            >
                                <Grid2X2 size={18} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setView("list")}
                                className={`flex h-12 w-12 items-center justify-center transition-all duration-300 ${view === "list"
                                    ? "bg-[#C8A04D] text-black"
                                    : "text-white hover:bg-[#181818]"
                                    }`}
                            >
                                <List size={18} />
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default ShopToolbar;