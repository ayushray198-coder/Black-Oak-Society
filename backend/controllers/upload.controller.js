import uploadImage from "../utils/uploadImage.js";

export const uploadSingleImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an image.",
            });
        }

        const folder = req.body.folder || "Black-Oak-Society";

        const result = await uploadImage(req.file.buffer, folder);

        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully.",
            data: result,
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Image upload failed.",
        });
    }
};