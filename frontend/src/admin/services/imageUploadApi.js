import api from "../../lib/api";

export const uploadImage = async (
  file,
  folder = "Black-Oak-Society/products"
) => {
  const formData = new FormData();

  formData.append("image", file);
  formData.append("folder", folder);

  const response = await api.post(
    "/uploads/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return {
    url: response.data.data.url,
    public_id: response.data.data.publicId,
  };
};