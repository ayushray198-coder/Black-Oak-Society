import Product from "../models/product.model.js";

export const getAllProductsAdmin = async (req, res) => {
  try {
    const {
      search,
      brand,
      category,
      status,
      featured,
      signature,
      page = 1,
      limit = 10,
      sort = "-createdAt",
    } = req.query;

    const query = {};

    if (search?.trim()) {
      query.name = {
        $regex: search.trim(),
        $options: "i",
      };
    }

    if (brand) query.brand = brand;

    if (category) query.category = category;

    if (status) query.status = status;

    if (featured === "true") query.featured = true;
    if (featured === "false") query.featured = false;

    if (signature === "true") query.isSignature = true;
    if (signature === "false") query.isSignature = false;

    const currentPage = Number(page);
    const perPage = Number(limit);

    const totalProducts = await Product.countDocuments(query);

    const products = await Product.find(query)
      .populate("brand", "name")
      .populate("category", "name")
      .sort(sort)
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully.",
      pagination: {
        totalProducts,
        currentPage,
        totalPages: Math.ceil(totalProducts / perPage),
        perPage,
      },
      data: products,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};