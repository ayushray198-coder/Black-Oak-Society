import { Readable } from "stream";
import cloudinary from "../config/cloudinary.js";

const uploadImage = (fileBuffer, folder = "Black-Oak-Society") => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, result) => {
                if (error) {
                    return reject(error);
                }

                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                });
            }
        );

        Readable.from(fileBuffer).pipe(uploadStream);
    });
};

export default uploadImage;