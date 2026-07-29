import ImageUploader from "./ImageUploader";


import { useEffect, useState } from "react";
import { getAllBrands } from "../services/brandApi";
import { getAllCategories } from "../services/categoryApi";

const ProductForm = ({
  initialData = {},
  onSubmit,
  loading = false,
}) => {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
    brand: initialData.brand?._id || initialData.brand || "",
    category: initialData.category?._id || initialData.category || "",
    price: initialData.price || "",
    comparePrice: initialData.comparePrice || "",
    stock: initialData.stock || "",
    sku: initialData.sku || "",
    featured: initialData.featured || false,
    isSignature: initialData.isSignature || false,
    status: initialData.status || "active",
    images: initialData.images || [],
  });



useEffect(() => {
  if (!formData.brand) {
    setCategories([]);
    return;
  }

  loadCategories(formData.brand);
}, [formData.brand]);

  const loadBrands = async () => {
    try {
      const res = await getAllBrands();
      setBrands(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadBrands();
  }, []);

  useEffect(() => {
  setFormData({
    name: initialData.name || "",
    description: initialData.description || "",
    brand: initialData.brand?._id || initialData.brand || "",
    category:
      initialData.category?._id ||
      initialData.category ||
      "",
    price: initialData.price || "",
    comparePrice:
      initialData.comparePrice || "",
    stock: initialData.stock || "",
    sku: initialData.sku || "",
    featured: initialData.featured || false,
    isSignature:
      initialData.isSignature || false,
    status: initialData.status || "active",
    images: initialData.images || [],
  });
}, [initialData]);


  const loadCategories = async (brandId) => {
    try {
      const res = await getAllCategories(brandId);
      setCategories(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
  const { name, value, checked, type } = e.target;

  // Brand change hone par category reset karo
  if (name === "brand") {
    setFormData((prev) => ({
      ...prev,
      brand: value,
      category: "",
    }));
    return;
  }

  setFormData((prev) => ({
    ...prev,
    [name]:
      type === "checkbox" ? checked : value,
  }));
};

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.images.length) {
    alert("Please upload at least one product image.");
    return;
  }

  if (Number(formData.comparePrice) > 0) {
    if (
      Number(formData.comparePrice) <
      Number(formData.price)
    ) {
      alert(
        "Compare Price should be greater than or equal to Price."
      );
      return;
    }
  }

  onSubmit({
    ...formData,
    price: Number(formData.price),
    comparePrice: Number(
      formData.comparePrice || 0
    ),
    stock: Number(formData.stock),
  });
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Product Name */}

      <div>
        <label className="mb-2 block text-sm">
          Product Name
        </label>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-500"
          required
        />
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-yellow-500"
          required
        />
      </div>

      {/* Brand */}

      <div>
        <label className="mb-2 block text-sm">
          Brand
        </label>

        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
          required
        >
          <option value="">
            Select Brand
          </option>

          {brands.map((brand) => (
            <option
              key={brand._id}
              value={brand._id}
            >
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}

      <div>
        <label className="mb-2 block text-sm">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
          required
        >
          <option value="">
            Select Category
          </option>

          {categories.map((category) => (
            <option
              key={category._id}
              value={category._id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Prices */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            Compare Price
          </label>

          <input
            type="number"
            name="comparePrice"
            value={formData.comparePrice}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
          />
        </div>
      </div>

      {/* Stock & SKU */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            SKU
          </label>

          <input
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
            required
          />
        </div>
      </div>

      {/* Status */}

      <div>
        <label className="mb-2 block text-sm">
          Status
        </label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3"
        >
          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>
      </div>

      {/* Product Images */}

      <ImageUploader
        value={formData.images}
        onChange={(images) =>
          setFormData((prev) => ({
            ...prev,
            images,
          }))
        }
        folder="Black-Oak-Society/products"
        maxImages={5}
      />

      {/* Switches */}

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />

          Featured
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isSignature"
            checked={formData.isSignature}
            onChange={handleChange}
          />

          Signature
        </label>
      </div>

      {/* Submit */}

      <button
        disabled={loading}
        className="w-full rounded-xl bg-yellow-500 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Saving..."
          : initialData?._id
            ? "Update Product"
            : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;