import { useEffect, useRef, useState } from "react";
import {
    Search,
    X,
    Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../services/product.service";

function SearchModal({ open, onClose }) {
    const navigate = useNavigate();

    const inputRef = useRef(null);
    const modalRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState("");

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!open) return;

        inputRef.current?.focus();

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const handleOutside = (e) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target)
            ) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        document.addEventListener(
            "mousedown",
            handleOutside
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );

            document.removeEventListener(
                "mousedown",
                handleOutside
            );
        };
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;

        const timer = setTimeout(async () => {

            if (!searchTerm.trim()) {
                setProducts([]);
                return;
            }

            try {

                setLoading(true);

                const response = await getProducts({
                    search: searchTerm,
                });

               

                setProducts(
                    response.data || []
                );

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        }, 500);

        return () => clearTimeout(timer);

    }, [searchTerm, open]);

    const handleProductClick = (id) => {

        onClose();

        navigate(`/products/${id}`);

    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/70 p-4 pt-20 backdrop-blur-md">

            <div
                ref={modalRef}
                className="w-full max-w-3xl overflow-hidden rounded-3xl border border-[#D8B46A]/20 bg-[#0E0E0E] shadow-[0_25px_80px_rgba(0,0,0,.65)]"
            >

                {/* Search Header */}

                <div className="flex items-center gap-4 border-b border-white/10 p-5">
                                    <div className="relative flex-1">

                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D8B46A]"
                        />

                        <input
                            ref={inputRef}
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search luxury spirits..."
                            className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#D8B46A]"
                        />

                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#D8B46A] hover:text-[#D8B46A]"
                    >
                        <X size={20} />
                    </button>

                </div>

                {/* Results */}

                <div className="max-h-[550px] overflow-y-auto">

                    {loading && (

                        <div className="flex items-center justify-center gap-3 py-14">

                            <Loader2
                                size={22}
                                className="animate-spin text-[#D8B46A]"
                            />

                            <span className="text-gray-400">
                                Searching...
                            </span>

                        </div>

                    )}

                    {!loading && !searchTerm.trim() && (

                        <div className="py-20 text-center">

                            <Search
                                size={48}
                                className="mx-auto mb-5 text-[#D8B46A]/60"
                            />

                            <h3 className="text-xl font-semibold">
                                Search Products
                            </h3>

                            <p className="mt-3 text-sm text-gray-500">
                                Start typing to search premium spirits.
                            </p>

                        </div>

                    )}

                    {!loading &&
                        searchTerm.trim() &&
                        products.length === 0 && (

                            <div className="py-20 text-center">

                                <Search
                                    size={48}
                                    className="mx-auto mb-5 text-gray-600"
                                />

                                <h3 className="text-xl font-semibold">
                                    No Products Found
                                </h3>

                                <p className="mt-3 text-sm text-gray-500">
                                    Try another keyword.
                                </p>

                            </div>

                        )}

                    {!loading &&
                        products.length > 0 && (

                            <div className="divide-y divide-white/10">
                                                                {products.map((product) => (

                                    <button
                                        key={product._id}
                                        type="button"
                                        onClick={() =>
                                            handleProductClick(product._id)
                                        }
                                        className="flex w-full items-center gap-5 p-5 text-left transition-all duration-300 hover:bg-[#D8B46A]/5"
                                    >

                                        {/* Product Image */}

                                        <img
                                            src={product.images?.[0]?.url}
                                            alt={product.name}
                                            className="h-20 w-20 rounded-2xl border border-[#D8B46A]/15 object-cover bg-[#181818]"
                                        />

                                        {/* Product Info */}

                                        <div className="min-w-0 flex-1">

                                            <h5 className="truncate text-lg font-semibold text-white">
                                                {product.name}
                                            </h5>

                                            <p className="mt-1 truncate text-sm text-gray-400">
                                                {product.brand?.name || "Premium Spirit"}
                                            </p>

                                            <div className="mt-3 flex items-center gap-3">

                                                <span className="rounded-full bg-[#D8B46A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#D8B46A]">
                                                    {product.category?.name || "Luxury"}
                                                </span>

                                            </div>

                                        </div>

                                        {/* Price */}

                                        <div className="text-right">

                                            <p className="text-lg font-bold text-[#D8B46A]">
                                                ₹{product.price}
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                View Product →
                                            </p>

                                        </div>

                                    </button>

                                ))}
                                                            </div>

                        )}

                </div>

            </div>

        </div>
    );
}

export default SearchModal;