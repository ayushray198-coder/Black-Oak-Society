import User from "../models/user.model.js";

export const getAllCustomers = async (req, res) => {
  try {
    const {
      search,
      page = 1,
      limit = 10,
      sort = "-createdAt",
      isBlocked,
    } = req.query;

    const query = {
      role: "user",
    };

    // Search by Name or Email
    if (search?.trim()) {
      query.$or = [
        {
          name: {
            $regex: search.trim(),
            $options: "i",
          },
        },
        {
          email: {
            $regex: search.trim(),
            $options: "i",
          },
        },
      ];
    }

    // Block Filter
    if (isBlocked === "true") {
      query.isBlocked = true;
    } else if (isBlocked === "false") {
      query.isBlocked = false;
    }

    const currentPage = Number(page);
    const perPage = Number(limit);

    const totalCustomers = await User.countDocuments(query);

    const customers = await User.find(query)
      .select("-password -otp -otpExpiry")
      .sort(sort)
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    return res.status(200).json({
      success: true,
      message: "Customers fetched successfully.",
      pagination: {
        totalCustomers,
        currentPage,
        totalPages: Math.ceil(totalCustomers / perPage),
        perPage,
      },
      data: customers,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



import mongoose from "mongoose";

export const toggleCustomerBlockStatus = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid customer ID.",
      });
    }

    const customer = await User.findById(id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found.",
      });
    }

    // Prevent blocking admin accounts
    if (customer.role !== "user") {
      return res.status(403).json({
        success: false,
        message: "You cannot block an admin account.",
      });
    }

    customer.isBlocked = !customer.isBlocked;

    await customer.save();

    return res.status(200).json({
      success: true,
      message: customer.isBlocked
        ? "Customer blocked successfully."
        : "Customer unblocked successfully.",
      data: customer,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};