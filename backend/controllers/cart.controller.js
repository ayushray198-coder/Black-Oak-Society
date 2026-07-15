import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";



export const addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

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

    // Check Existing Cart Item
    const existingCartItem = await Cart.findOne({
      user: req.user._id,
      product,
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity || 1;

      await existingCartItem.save();

      return res.status(200).json({
        success: true,
        message: "Cart updated successfully.",
        data: existingCartItem,
      });
    }

    // Create Cart Item
    const cart = await Cart.create({
      user: req.user._id,
      product,
      quantity: quantity || 1,
      price: existingProduct.price,
    });

    return res.status(201).json({
      success: true,
      message: "Product added to cart successfully.",
      data: cart,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const getUserCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user._id,
    })
      .populate("product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Cart fetched successfully.",
      totalItems: cartItems.length,
      data: cartItems,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const updateCartQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    // Validation
    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1.",
      });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      {
        _id: id,
        user: req.user._id,
      },
      {
        quantity,
      },
      {
        new: true,
        runValidators: true,
      }
    ).populate("product");

    if (!updatedCart) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cart updated successfully.",
      data: updatedCart,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const removeCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCartItem = await Cart.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    if (!deletedCartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cart item removed successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};