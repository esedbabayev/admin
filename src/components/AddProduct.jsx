import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    slug: "",
    sku: "",
    description: "",
    stockStatus: "",
    quantity: "",
    images: [],
    colors: [],
    sizes: [],
    newArrival: false,
    topSeller: false,
  });

  const [imageFiles, setImageFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct({
      ...product,
      [name]: checked,
    });
  };

  const handleColorClick = (color) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      colors: prevProduct.colors.includes(color)
        ? prevProduct.colors.filter((c) => c !== color)
        : [...prevProduct.colors, color],
    }));
  };

  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]);
  };

  const uploadImagesToCloudinary = async () => {
    const uploadedImages = [];
    for (let image of imageFiles) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload", // Replace with your Cloudinary name
          formData
        );
        uploadedImages.push(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading to Cloudinary", error);
        alert("Failed to upload images");
        return [];
      }
    }
    return uploadedImages;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images to Cloudinary first
      const uploadedImages = await uploadImagesToCloudinary();

      if (uploadedImages.length === 0) return;

      // Include uploaded image URLs in product data
      const productData = {
        ...product,
        images: uploadedImages,
      };

      // Send the product data to your backend
      const response = await axios.post("http://localhost:5000/api/products", productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Product added successfully!");
        // Optionally, clear the form after successful submission
        setProduct({
          title: "",
          price: "",
          category: "",
          slug: "",
          sku: "",
          description: "",
          stockStatus: "",
          quantity: "",
          images: [],
          colors: [],
          sizes: [],
          newArrival: false,
          topSeller: false,
        });
        setImageFiles([]);
      } else {
        alert("Error adding product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg grid grid-cols-2 gap-8">
        <div>
          {/* Title */}
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          {/* Price */}
          <label className="block mb-2 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          {/* Category */}
          <label className="block mb-2 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* Slug */}
          <label className="block mb-2 font-medium">Slug</label>
          <input
            type="text"
            name="slug"
            value={product.slug}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* SKU */}
          <label className="block mb-2 font-medium">SKU</label>
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* Description */}
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4 h-28"
            required
          />
        </div>

        <div>
          {/* Stock Status */}
          <label className="block mb-2 font-medium">Stock Status</label>
          <input
            type="text"
            name="stockStatus"
            value={product.stockStatus}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* Quantity */}
          <label className="block mb-2 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
            required
          />

          {/* Image Upload */}
          <label className="block mb-2 font-medium">Images</label>
          <div className="border p-2 rounded mb-4">
            <input
              type="file"
              name="images"
              multiple
              onChange={handleImageChange}
              className="block"
            />
          </div>

          {/* Colors */}
          <label className="block mb-2 font-medium">Colors</label>
          <div className="flex space-x-2 mb-4">
            {["#6B7280", "#FBBF24", "#10B981", "#3B82F6"].map((color, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  product.colors.includes(color)
                    ? "border-black"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>

          {/* Sizes */}
          <label className="block mb-2 font-medium">Sizes</label>
          <div className="flex space-x-2">
            {["S", "M", "L", "XL", "XXL"].map((size, idx) => (
              <button
                key={idx}
                className={`border px-4 py-2 rounded ${
                  product.sizes.includes(size) ? "bg-gray-300" : ""
                }`}
                onClick={() =>
                  setProduct((prevProduct) => ({
                    ...prevProduct,
                    sizes: prevProduct.sizes.includes(size)
                      ? prevProduct.sizes.filter((s) => s !== size)
                      : [...prevProduct.sizes, size],
                  }))
                }
              >
                {size}
              </button>
            ))}
          </div>

          {/* New Arrival */}
          <label className="block mb-2 font-medium">New Arrival</label>
          <input
            type="checkbox"
            name="newArrival"
            checked={product.newArrival}
            onChange={handleCheckboxChange}
            className="mr-2"
          />

          {/* Top Seller */}
          <label className="block mb-2 font-medium">Top Seller</label>
          <input
            type="checkbox"
            name="topSeller"
            checked={product.topSeller}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
