import React, { useState } from "react";
import { postProduct } from "../services/postProduct.js";
import { uploadImageToCloud } from "../services/uploadImage.js";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [category, setCategory] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async(values) => {

    const response = await postProduct(newProduct);
    const data = await response.json();
    console.log(values);
    console.log(data);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      coverImage,
      price,
      // size,
      // color,
      // rating,
      quantity,
      // discount,
      // newArrival,
      // topSeller,
    };

    const response = await postProduct(newProduct);
    const data = await response.json();
    console.log(data)
  };

  const handleImage = async (e) => {
    const URL = await uploadImageToCloud(e.target.files[0]);
    setCoverImage(URL);
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form
        //
        onSubmit={handleSubmit(onSubmit)}
        //
        // onSubmit={handleAddProduct}
        className="bg-white p-6 rounded-lg grid grid-cols-2 gap-8"
      >
        <div>
          <label className="block mb-2 font-medium">Title</label>
          <input
            {...register("title")}
            type="text"
            name="title"
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2 font-medium">Price</label>
          <input
            {...register("price")}
            type="number"
            name="price"
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2 font-medium">Category</label>
          <input
            {...register("category")}
            type="text"
            name="category"
            className="w-full border p-2 rounded mb-4"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />

          <label className="block mb-2 font-medium">Description</label>
          <textarea
            {...register("description")}
            name="description"
            className="w-full border p-2 rounded mb-4 h-28"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Quantity</label>
          <input
            {...register("quantity")}
            type="number"
            name="quantity"
            className="w-full border p-2 rounded mb-4"
            required
          />

          <label className="block mb-2 font-medium">Images</label>
          <div className="border p-2 rounded mb-4">
            <input
              type="file"
              name="images"
              onChange={handleImage}
              multiple
              className="block"
            />
            {coverImage && (
              <div className="w-20 h-20 mt-4">
                <img src={coverImage} alt="Preview" />
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
            {...register("newArrival")}
            type="checkbox"
            name="newArrival"
            className="mr-2"
          />

          <label className="block mb-2 font-medium">Top Seller</label>
          <input
            {...register("topSeller")}
            type="checkbox"
            name="topSeller"
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
