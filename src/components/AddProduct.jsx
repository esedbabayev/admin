import React, { useState } from "react";

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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSaveProduct = () => {
    // Handle saving the product logic
    console.log("Product to save:", product);
  };

  const handleColorClick = (color) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      colors: prevProduct.colors.includes(color)
        ? prevProduct.colors.filter((c) => c !== color)
        : [...prevProduct.colors, color],
    }));
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <div className="bg-white p-6 rounded-lg grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          {/* Title */}
          <label className="block mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* Price */}
          <label className="block mb-2 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
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
          />
        </div>

        {/* Right Column */}
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

          {/* Available Quantity */}
          <label className="block mb-2 font-medium">Available Quantity</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            className="w-full border p-2 rounded mb-4"
          />

          {/* Images */}
          <label className="block mb-2 font-medium">Images</label>
          <div className="border p-2 rounded mb-4">
            <input
              type="file"
              name="images"
              multiple
              className="block"
              onChange={(e) =>
                setProduct({
                  ...product,
                  images: [...e.target.files],
                })
              }
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
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={handleSaveProduct}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
