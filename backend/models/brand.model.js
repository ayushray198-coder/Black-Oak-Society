import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        logo: {
            type: String,
            default: "",
        },

        banner: {
            type: String,
            default: "",
        },

        categoryLine: {
            type: String,
            required: true,
            trim: true,
        },

        tagline: {
            type: String,
            required: true,
            trim: true,
        },

        brandColor: {
            type: String,
            default: "#C89B3C",
            trim: true,
        },

        country: {
            type: String,
            required: true,
            trim: true,
        },

        website: {
            type: String,
            default: "",
            trim: true,
        },

        foundedYear: {
            type: Number,
        },

        displayOrder: {
            type: Number,
            default: 999,
            min: 1,
        },

        isFeatured: {
            type: Boolean,
            default: false,
        },

        isActive: {
            type: Boolean,
            default: true,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;