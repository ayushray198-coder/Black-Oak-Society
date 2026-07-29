import { useEffect, useState } from "react";
import { uploadImage } from "../services/imageUploadApi";

const ImageUploader = ({
  value = [],
  onChange,
  folder = "Black-Oak-Society/products",
  maxImages = 5,
}) => {
  const [images, setImages] = useState(value);

  const [uploading, setUploading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setImages(value || []);
  }, [value]);

  const updateImages = (updatedImages) => {
    setImages(updatedImages);

    if (onChange) {
      onChange(updatedImages);
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files || []);

    if (!files.length) return;

    if (images.length + files.length > maxImages) {
      setError(`Maximum ${maxImages} images allowed.`);
      return;
    }

    try {
      setUploading(true);
      setError("");

      const uploadedImages = [];

      for (const file of files) {
        const uploaded = await uploadImage(
          file,
          folder
        );

        uploadedImages.push(uploaded);
      }

      updateImages([
        ...images,
        ...uploadedImages,
      ]);
    } catch (err) {
      console.error(err);

      setError(
        "Image upload failed. Please try again."
      );
    } finally {
      setUploading(false);

      event.target.value = "";
    }
  };

  const removeImage = (index) => {
    const updatedImages = images.filter(
      (_, i) => i !== index
    );

    updateImages(updatedImages);
  };

  return (
        <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          Product Images
        </h3>

        <label className="cursor-pointer rounded-xl bg-yellow-500 px-5 py-2 font-semibold text-black transition hover:bg-yellow-400">
          {uploading ? "Uploading..." : "Choose Images"}

          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={handleFileUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Empty */}

      {images.length === 0 && !uploading && (
        <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center text-zinc-500">
          No images uploaded yet.
        </div>
      )}

      {/* Upload Loader */}

      {uploading && (
        <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5 text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>

          <p className="text-yellow-400">
            Uploading image...
          </p>
        </div>
      )}

      {/* Images */}

      {images.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <img
                src={image.url}
                alt={`Product ${index + 1}`}
                className="h-56 w-full object-cover"
              />

              <div className="space-y-2 p-4">
                <p className="truncate text-xs text-zinc-500">
                  {image.public_id}
                </p>

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="w-full rounded-lg bg-red-500/20 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/30"
                >
                  Remove Image
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;