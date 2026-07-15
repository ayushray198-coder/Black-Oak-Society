import Product from "../models/product.model.js";
import Brand from "../models/brand.model.js";
import Category from "../models/category.model.js";
import slugify from "slugify";



export const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            brand,
            category,
            price,
            comparePrice,
            stock,
            sku,
            images,
            featured,
            status,
        } = req.body;

        // Required Fields
        if (
            !name ||
            !description ||
            !brand ||
            !category ||
            !price ||
            !stock ||
            !sku
        ) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be provided.",
            });
        }

        // Check Brand
        const brandExists = await Brand.findById(brand);

        if (!brandExists) {
            return res.status(404).json({
                success: false,
                message: "Brand not found.",
            });
        }

        // Check Category
        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: "Category not found.",
            });
        }

        // Duplicate SKU
        const skuExists = await Product.findOne({ sku });

        if (skuExists) {
            return res.status(400).json({
                success: false,
                message: "SKU already exists.",
            });
        }

        // Create Product
        const product = await Product.create({
            name,
            slug: slugify(name, { lower: true }),
            description,
            brand,
            category,
            price,
            comparePrice,
            stock,
            sku,
            images,
            featured,
            status,
        });

        return res.status(201).json({
            success: true,
            message: "Product created successfully.",
            data: product,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};



export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("brand", "name")
      .populate("category", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully.",
      total: products.length,
      data: products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id)
      .populate("brand", "name")
      .populate("category", "name");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully.",
      data: product,
    });
  } catch (error) {
    console.error("Get Product By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      brand,
      category,
      price,
      comparePrice,
      stock,
      sku,
      images,
      featured,
      status,
    } = req.body;

    // Check Brand
    const brandExists = await Brand.findById(brand);

    if (!brandExists) {
      return res.status(404).json({
        success: false,
        message: "Brand not found.",
      });
    }

    // Check Category
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name, {
          lower: true,
          strict: true,
        }),
        description,
        brand,
        category,
        price,
        comparePrice,
        stock,
        sku,
        images,
        featured,
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("brand", "name")
      .populate("category", "name");

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};