import Wishlist from "../models/wishlist.model.js";
import Product from "../models/product.model.js";



export const addToWishlist = async (req, res) => {
  try {
    const { product } = req.body;

    // Validation
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product is required.",
      });
    }

    // Check Product Exists
    const existingProduct = await Product.findById(product);

    if (!existingProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    // Check Already Exists
    const existingWishlist = await Wishlist.findOne({
      user: req.user._id,
      product,
    });

    if (existingWishlist) {
      return res.status(409).json({
        success: false,
        message: "Product already exists in wishlist.",
      });
    }

    // Create Wishlist
    const wishlist = await Wishlist.create({
      user: req.user._id,
      product,
    });

    return res.status(201).json({
      success: true,
      message: "Product added to wishlist successfully.",
      data: wishlist,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getUserWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.user._id,
    })
      .populate("product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Wishlist fetched successfully.",
      totalItems: wishlist.length,
      data: wishlist,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;

    const wishlistItem = await Wishlist.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!wishlistItem) {
      return res.status(404).json({
        success: false,
        message: "Wishlist item not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product removed from wishlist successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const clearWishlist = async (req, res) => {
  try {
    await Wishlist.deleteMany({
      user: req.user._id,
    });

    return res.status(200).json({
      success: true,
      message: "Wishlist cleared successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};