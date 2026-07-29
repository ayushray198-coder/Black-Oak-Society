import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import EntityModal from "../components/EntityModal";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/productApi";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [totalPages, setTotalPages] =
    useState(1);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, search]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await getAllProducts({
        page: currentPage,
        search,
      });

      setProducts(response.data ?? []);

      setCurrentPage(
        response.pagination?.currentPage ?? 1
      );

      setTotalPages(
        response.pagination?.totalPages ?? 1
      );

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
        "Failed to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };



  const handleSubmit = async (productData) => {
    try {
      setSaving(true);

      if (selectedProduct?._id) {
        await updateProduct(
          selectedProduct._id,
          productData
        );
      } else {
        await createProduct(productData);
      }

      closeModal();
      fetchProducts();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
        "Failed to save product."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(productId);

      fetchProducts();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
        "Failed to delete product."
      );
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold">
          Loading Products...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-red-500">
          {error}
        </h2>
      </div>
    );
  }

  return (

    <div className="space-y-6">
      <AdminPageHeader
        title="Products"
        subtitle="Manage your product catalog."
      />

      {/* Top Bar */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-500 md:max-w-md"
        />

        <button
          onClick={openCreateModal}
          className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
        >
          + Add Product
        </button>
      </div>

      {/* Product Table */}

      <ProductTable
        products={products}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      {/* Pagination */}

      <div className="flex items-center justify-between">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="rounded-lg border border-zinc-700 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-zinc-400">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="rounded-lg border border-zinc-700 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Add / Edit Modal */}

      <EntityModal
        open={isModalOpen}
        onClose={closeModal}
        title={
          selectedProduct
            ? "Edit Product"
            : "Create Product"
        }
        size="3xl"
      >
        <ProductForm
          initialData={selectedProduct || {}}
          onSubmit={handleSubmit}
          loading={saving}
        />
      </EntityModal>
    </div>
  );
};

export default Products;