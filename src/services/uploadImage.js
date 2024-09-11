export const uploadImageToCloud = async (file) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "xczb4d28");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dgunegdon/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    const newImageURL = data.secure_url;
    console.log(newImageURL, "Image uploaded successfully");
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};