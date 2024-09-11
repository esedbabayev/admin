import React, { useState } from "react";
import { postProduct } from "../services/postProduct.js";
import { uploadImageToCloud } from "../services/uploadImage.js";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [imageArray, setImageArray] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [newArrival, setNewArrival] = useState(false);
  const [topSelling, setTopSelling] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    let uploadedImageUrl = "";

    if (imageUrl) {
      uploadedImageUrl = await uploadImageToCloud(imageUrl);
    }

    const newProduct = {
      title,
      description,
      coverImage: uploadedImageUrl,
      price,
      // size,
      // color,
      // rating,
      quantity,
      // discount,
      // newArrival,
      // topSeller,
    };

    try {
      const response = await postProduct(newProduct);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file);
    setImageArray([...imageArray, URL.createObjectURL(file)]);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form
        onSubmit={handleAddProduct}
        className="bg-white p-6 rounded-lg grid grid-cols-2 gap-8"
      >
        <div>
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded mb-4"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <label className="block mb-2 font-medium">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded mb-4"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />

          <label className="block mb-2 font-medium">Category</label>
          <input
            type="text"
            name="category"
            className="w-full border p-2 rounded mb-4"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />

          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded mb-4 h-28"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="w-full border p-2 rounded mb-4"
            required
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />

          <label className="block mb-2 font-medium">Images</label>
          <div className="border p-2 rounded mb-4">
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              multiple
              className="block"
            />
            {imageUrl && (
              <div className="w-20 h-20 mt-4">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          <label className="block mb-2 font-medium">Colors</label>
          <div className="flex space-x-2 mb-4">
            {["#6B7280", "#FBBF24", "#10B981", "#3B82F6"].map((color, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full cursor-pointer border-2`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <label className="block mb-2 font-medium">Sizes</label>
          <div className="flex space-x-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
              <button key={idx} className={`border px-4 py-2 rounded`}>
                {size}
              </button>
            ))}
          </div>

          <label className="block mb-2 font-medium">New Arrival</label>
          <input
            type="checkbox"
            name="newArrival"
            onChange={(e) => setNewArrival(e.target.checked)}
            checked={newArrival}
            className="mr-2"
          />

          <label className="block mb-2 font-medium">Top Seller</label>
          <input
            type="checkbox"
            name="topSeller"
            onChange={(e) => setTopSelling(e.target.checked)}
            checked={topSelling}
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
