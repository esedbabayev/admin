"use client";

import React, { useState } from "react";
import { postProduct } from "../services/postProduct.js";
import { uploadImageToCloud } from "../services/uploadImage.js";
import { useForm } from "react-hook-form";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { selectCategories } from "../redux/slices/category.slice.js";

const AddProduct = () => {
  const [coverImage, setCoverImage] = useState(null);
  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const selectCategory = (category) => {
    console.log(category);
    dispatch(selectCategories(category));
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values.category);  

    const newProduct = {
      title: values.title,
      description: values.description,
      coverImage,
      price: values.price,
      quantity: values.quantity,
      category: values.category,
      newArrival: values.newArrival,
      topSeller: values.topSeller,
      // size: values.size,
      // color,
      // rating,
      // discount,
      // newArrival,
      // topSeller,
    };

    const response = await postProduct(newProduct);
    const data = await response.json();
    console.log(data.createdProduct);
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
        className="bg-white p-6 rounded-lg grid grid-cols-2 gap-8"
      >
        <div>
          <label className="block mb-2 font-medium">Title</label>
          <input
            {...register("title", {
              required: "Title is required",
            })}
            type="text"
            name="title"
            className="w-full border p-2 rounded mb-4"
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}

          <label className="block mb-2 font-medium">Price</label>
          <input
            {...register("price", {
              required: "Enter the price",
            })}
            type="number"
            name="price"
            className="w-full border p-2 rounded mb-4"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}

          <label className="block mb-2 font-medium">Category</label>
          <select
            onChange={(e) => {
              const selectedCategory = e.target.value;
              console.log(selectedCategory); // Logs the selected value
              selectCategory(selectedCategory); // Dispatch the selected category
            }}
            {...register("category", { required: "Category is required" })}
            className="w-full border p-2 rounded mb-4"
          >
            <option value="">Select a category</option>
            {categories &&
              categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
          </select>
          {errors.category && (
            <span className="text-red-500">{errors.category.message}</span>
          )}

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
            disabled={isSubmitting}
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            {isSubmitting ? "Being submitted" : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
