import { useMemo, useState } from "react";

import ShopBanner from "../../components/shop/ShopBanner";
import ShopToolbar from "../../components/shop/ShopToolbar";
import ProductGrid from "../../components/shop/ProductGrid";
import Pagination from "../../components/shop/Pagination";

import useProducts from "../../hooks/useProducts";
import useDebounce from "../../hooks/useDebounce";
import useBrands from "../../hooks/useBrands";

function Shop() {
    const [filters, setFilters] = useState({
        page: 1,
        limit: 12,
        search: "",
        category: "",
        brand: "",
        sort: "",
        minPrice: "",
        maxPrice: "",
    });

    const debouncedSearch = useDebounce(filters.search, 300);

    const productFilters = useMemo(
        () => ({
            ...filters,
            search: debouncedSearch,
        }),
        [
            filters.page,
            filters.limit,
            filters.category,
            filters.brand,
            filters.sort,
            filters.minPrice,
            filters.maxPrice,
            debouncedSearch,
        ]
    );

    const {
        products,
        pagination,
        loading,
        error,
    } = useProducts(productFilters);

    const {
        brands,
        loading: brandsLoading,
        error: brandsError,
    } = useBrands();

    const updateFilters = (newFilters) => {
        setFilters((prev) => ({
            ...prev,
            ...newFilters,
            page: newFilters.page ?? 1,
        }));
    };

    const changePage = (page) => {
        setFilters((prev) => ({
            ...prev,
            page,
        }));
    };

    return (
        <>
            <ShopBanner />

            <ShopToolbar
                filters={filters}
                brands={brands}
                brandsLoading={brandsLoading}
                brandsError={brandsError}
                onFilterChange={updateFilters}
                totalProducts={pagination?.totalProducts ?? 0}
            />

            <ProductGrid
                products={products}
                loading={loading}
                error={error}
                onResetFilters={updateFilters}
            />

            <Pagination
                pagination={pagination}
                onPageChange={changePage}
            />
        </>
    );
}

export default Shop;