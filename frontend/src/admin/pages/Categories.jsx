import { useEffect, useState } from "react";

import AdminPageHeader from "../components/AdminPageHeader";
import EntityModal from "../components/EntityModal";

import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../services/categoryApi";

const initialForm = {
  name: "",
  description: "",
};

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingCategory, setEditingCategory] =
    useState(null);

  const [formData, setFormData] =
    useState(initialForm);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response =
        await getAllCategories();

      setCategories(
        response.data || []
      );

      setError("");
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Failed to fetch categories."
      );
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setEditingCategory(null);

    setFormData(initialForm);

    setIsModalOpen(true);
  };

  const openEditModal = (category) => {
    setEditingCategory(category);

    setFormData({
      name: category.name,
      description: category.description,
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingCategory(null);

    setFormData(initialForm);

    setIsModalOpen(false);
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
      if (editingCategory) {
        await updateCategory(
          editingCategory._id,
          formData
        );
      } else {
        await createCategory(formData);
      }

      closeModal();

      fetchCategories();
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
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCategory(id);

      fetchCategories();
    } catch (err) {
      console.error(err);

      alert(
        err?.response?.data?.message ||
          "Failed to delete category."
      );
    }
  };

    if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-lg font-semibold text-white">
          Loading Categories...
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
    <>
      <AdminPageHeader
        title="Categories"
        subtitle="Manage your product categories."
      >
        <button
          onClick={openCreateModal}
          className="rounded-xl bg-amber-400 px-5 py-2.5 font-semibold text-black transition hover:bg-amber-300"
        >
          Add Category
        </button>
      </AdminPageHeader>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
        <table className="w-full">
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-medium text-zinc-400">
                Description
              </th>

              <th className="px-6 py-4 text-right text-sm font-medium text-zinc-400">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan={3}
                  className="py-12 text-center text-zinc-500"
                >
                  No categories found.
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <tr
                  key={category._id}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/40 last:border-none"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {category.name}
                  </td>

                  <td className="max-w-lg px-6 py-4 text-sm text-zinc-400">
                    {category.description}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() =>
                          openEditModal(category)
                        }
                        className="rounded-lg border border-amber-500/30 px-4 py-2 text-sm text-amber-400 transition hover:bg-amber-500/10"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(category._id)
                        }
                        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-500/40 hover:text-amber-400"
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
          editingCategory
            ? "Edit Category"
            : "Add Category"
        }
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Category Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
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
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 py-3 font-semibold text-black transition hover:bg-amber-300"
          >
            {editingCategory
              ? "Update Category"
              : "Create Category"}
          </button>
        </form>
      </EntityModal>
    </>
  );
};

export default Categories;