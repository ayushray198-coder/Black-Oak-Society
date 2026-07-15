import Brand from "../models/brand.model.js";
import Category from "../models/category.model.js";
import slugify from "slugify";

export const createCategory = async (req, res) => {
  try {
    const { name, description, image, brand } = req.body;

    // Validation
    if (!name || !brand) {
      return res.status(400).json({
        success: false,
        message: "Name and brand are required.",
      });
    }

    // Generate Slug
    const generatedSlug = slugify(name, {
      lower: true,
      strict: true,
      trim: true,
    });

    // Check Brand Exists
    const existingBrand = await Brand.findById(brand);

    if (!existingBrand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found.",
      });
    }

    // Check Duplicate Category
    const existingCategory = await Category.findOne({
      $or: [
        { name },
        { slug: generatedSlug },
      ],
    });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists.",
      });
    }

    // Create Category
    const category = await Category.create({
      name,
      slug: generatedSlug,
      description,
      image,
      brand,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully.",
      data: category,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};




export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate("brand", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Categories fetched successfully.",
      total: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error("Get Categories Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id).populate("brand", "name");

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category fetched successfully.",
      data: category,
    });
  } catch (error) {
    console.error("Get Category By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



 


export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description, brand } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name,
        description,
        brand,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("brand", "name");

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Update Category Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};