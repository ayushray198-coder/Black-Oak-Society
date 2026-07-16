import Address from "../models/address.model.js";


export const addAddress = async (req, res) => {
    try {
        const {
            fullName,
            mobile,
            alternateMobile,
            addressLine1,
            addressLine2,
            landmark,
            city,
            state,
            country,
            postalCode,
            addressType,
            isDefault,
        } = req.body;

        // Validation
        if (
            !fullName ||
            !mobile ||
            !addressLine1 ||
            !city ||
            !state ||
            !postalCode
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // If new address is default, remove previous default
        if (isDefault) {
            await Address.updateMany(
                { user: req.user._id },
                { $set: { isDefault: false } }
            );
        }

        // Create Address
        const address = await Address.create({
            user: req.user._id,
            fullName,
            mobile,
            alternateMobile,
            addressLine1,
            addressLine2,
            landmark,
            city,
            state,
            country,
            postalCode,
            addressType,
            isDefault,
        });

        return res.status(201).json({
            success: true,
            message: "Address added successfully.",
            data: address,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const getAllAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({
            user: req.user._id,
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            message: "Addresses fetched successfully.",
            totalAddresses: addresses.length,
            data: addresses,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const getAddressById = async (req, res) => {
    try {
        const { id } = req.params;

        const address = await Address.findOne({
            _id: id,
            user: req.user._id,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address fetched successfully.",
            data: address,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const updateAddress = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            fullName,
            mobile,
            alternateMobile,
            addressLine1,
            addressLine2,
            landmark,
            city,
            state,
            country,
            postalCode,
            addressType,
            isDefault,
        } = req.body;

        // Validation
        if (
            !fullName ||
            !mobile ||
            !addressLine1 ||
            !city ||
            !state ||
            !postalCode
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // If setting this as default, remove previous default
        if (isDefault) {
            await Address.updateMany(
                { user: req.user._id },
                { $set: { isDefault: false } }
            );
        }

        const updatedAddress = await Address.findOneAndUpdate(
            {
                _id: id,
                user: req.user._id,
            },
            {
                fullName,
                mobile,
                alternateMobile,
                addressLine1,
                addressLine2,
                landmark,
                city,
                state,
                country,
                postalCode,
                addressType,
                isDefault,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedAddress) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address updated successfully.",
            data: updatedAddress,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

export const deleteAddress = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAddress = await Address.findOneAndDelete({
            _id: id,
            user: req.user._id,
        });

        if (!deletedAddress) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address deleted successfully.",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


export const setDefaultAddress = async (req, res) => {
    try {
        const { id } = req.params;

        // Check Address Exists
        const address = await Address.findOne({
            _id: id,
            user: req.user._id,
        });

        if (!address) {
            return res.status(404).json({
                success: false,
                message: "Address not found.",
            });
        }

        // Remove Previous Default Address
        await Address.updateMany(
            {
                user: req.user._id,
            },
            {
                $set: {
                    isDefault: false,
                },
            }
        );

        // Set New Default Address
        address.isDefault = true;

        await address.save();

        return res.status(200).json({
            success: true,
            message: "Default address updated successfully.",
            data: address,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};