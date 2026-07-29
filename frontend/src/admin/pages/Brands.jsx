import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import EntityModal from "../components/EntityModal";

import {
    createBrand,
    deleteBrand,
    getAllBrands,
    updateBrand,
} from "../services/brandApi";

const initialForm = {
    name: "",
    description: "",
    logo: "",
    banner: "",
};

const Brands = () => {
    const [brands, setBrands] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [editingBrand, setEditingBrand] =
        useState(null);

    const [formData, setFormData] =
        useState(initialForm);

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            setLoading(true);

            const response = await getAllBrands();

            setBrands(response.data || []);

            setError("");
        } catch (err) {
            console.error(err);

            setError(
                err?.response?.data?.message ||
                "Failed to fetch brands."
            );
        } finally {
            setLoading(false);
        }
    };

    const openCreateModal = () => {
        setEditingBrand(null);

        setFormData(initialForm);

        setIsModalOpen(true);
    };

    const openEditModal = (brand) => {
        setEditingBrand(brand);

        setFormData({
            name: brand.name,
            description: brand.description,
            logo: brand.logo,
            banner: brand.banner,
        });

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);

        setEditingBrand(null);

        setFormData(initialForm);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (editingBrand) {
                await updateBrand(
                    editingBrand._id,
                    formData
                );
            } else {
                await createBrand(formData);
            }

            closeModal();

            fetchBrands();
        } catch (err) {
            console.error(err);

            alert(
                err?.response?.data?.message ||
                "Something went wrong."
            );
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this brand?"
        );

        if (!confirmDelete) return;

        try {
            await deleteBrand(id);

            fetchBrands();
        } catch (err) {
            console.error(err);

            alert(
                err?.response?.data?.message ||
                "Failed to delete brand."
            );
        }
    };


    if (loading) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <h2 className="text-lg font-semibold text-white">
                    Loading Brands...
                </h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <h2 className="text-red-500">{error}</h2>
            </div>
        );
    }

    return (
        <>
            <AdminPageHeader
                title="Brands"
                subtitle="Manage luxury whisky brands."
            >
                <button
                    onClick={openCreateModal}
                    className="rounded-xl bg-amber-400 px-5 py-2.5 font-semibold text-black transition hover:bg-amber-300"
                >
                    Add Brand
                </button>
            </AdminPageHeader>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
                <table className="w-full">
                    <thead className="border-b border-zinc-800 bg-zinc-950">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm text-zinc-400">
                                Logo
                            </th>

                            <th className="px-6 py-4 text-left text-sm text-zinc-400">
                                Brand
                            </th>

                            <th className="px-6 py-4 text-left text-sm text-zinc-400">
                                Description
                            </th>

                            <th className="px-6 py-4 text-right text-sm text-zinc-400">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {brands.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={4}
                                    className="py-12 text-center text-zinc-500"
                                >
                                    No brands found.
                                </td>
                            </tr>
                        ) : (
                            brands.map((brand) => (
                                <tr
                                    key={brand._id}
                                    className="border-b border-zinc-800 last:border-none"
                                >
                                    <td className="px-6 py-4">
                                        <img
                                            src={brand.logo}
                                            alt={brand.name}
                                            className="h-16 w-16 rounded-lg object-contain"
                                        />
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-white">
                                        {brand.name}
                                    </td>

                                    <td className="px-6 py-4">
                                        <p className="max-w-md overflow-hidden text-sm leading-6 text-zinc-400 line-clamp-3">
                                            {brand.description}
                                        </p>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={() =>
                                                    openEditModal(brand)
                                                }
                                                className="rounded-lg border border-amber-500/30 px-4 py-2 text-sm text-amber-400 transition hover:bg-amber-500/10"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(brand._id)
                                                }
                                                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-400"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <EntityModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={
                    editingBrand
                        ? "Edit Brand"
                        : "Add Brand"
                }
            >
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Brand Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Logo URL
                        </label>

                        <input
                            type="text"
                            name="logo"
                            value={formData.logo}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-zinc-400">
                            Banner URL
                        </label>

                        <input
                            type="text"
                            name="banner"
                            value={formData.banner}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-amber-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black transition hover:bg-amber-300"
                    >
                        {editingBrand
                            ? "Update Brand"
                            : "Create Brand"}
                    </button>
                </form>
            </EntityModal>
        </>
    );
};

export default Brands;