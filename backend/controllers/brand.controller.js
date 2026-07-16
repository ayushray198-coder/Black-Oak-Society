import Brand from "../models/brand.model.js";

export const createBrand = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      logo,
      banner,
      country,
      website,
    } = req.body;

    // Validation
    if (!name || !slug || !description || !country) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    // Check Existing Brand
    const existingBrand = await Brand.findOne({
      $or: [{ name }, { slug }],
    });

    if (existingBrand) {
      return res.status(409).json({
        success: false,
        message: "Brand already exists.",
      });
    }

    // Create Brand
    const brand = await Brand.create({
      name,
      slug,
      description,
      logo,
      banner,
      country,
      website,
      createdBy: req.user._id,
    });

    return res.status(201).json({
      success: true,
      message: "Brand created successfully.",
      brand,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const getAllBrands = async (req, res) => {
  try {
    const {
      search,
      page = 1,
      limit = 10,
      sort = "-createdAt",
    } = req.query;

    const query = {};

    // Search
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    const currentPage = Number(page);
    const perPage = Number(limit);

    const totalBrands = await Brand.countDocuments(query);

    const brands = await Brand.find(query)
      .sort(sort)
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    return res.status(200).json({
      success: true,
      message: "Brands fetched successfully.",

      pagination: {
        totalBrands,
        currentPage,
        totalPages: Math.ceil(totalBrands / perPage),
        perPage,
      },

      data: brands,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const getBrandById = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findById(id).populate(
      "createdBy",
      "fullName email"
    );

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found.",
      });
    }

    return res.status(200).json({
      success: true,
      brand,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



export const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      slug,
      description,
      logo,
      banner,
      country,
      website,
      isActive,
    } = req.body;

    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found.",
      });
    }

    // Duplicate Check
    if (name || slug) {
      const existingBrand = await Brand.findOne({
        _id: { $ne: id },
        $or: [
          ...(name ? [{ name }] : []),
          ...(slug ? [{ slug }] : []),
        ],
      });

      if (existingBrand) {
        return res.status(409).json({
          success: false,
          message: "Brand name or slug already exists.",
        });
      }
    }

    // Update Fields
    if (name !== undefined) brand.name = name;
    if (slug !== undefined) brand.slug = slug;
    if (description !== undefined) brand.description = description;
    if (logo !== undefined) brand.logo = logo;
    if (banner !== undefined) brand.banner = banner;
    if (country !== undefined) brand.country = country;
    if (website !== undefined) brand.website = website;
    if (isActive !== undefined) brand.isActive = isActive;

    await brand.save();

    return res.status(200).json({
      success: true,
      message: "Brand updated successfully.",
      brand,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};





export const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({
        success: false,
        message: "Brand not found.",
      });
    }

    await Brand.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Brand deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


