import React, { useEffect, useState } from "react";

// Services
import { getProductData } from "../services/getData";

// Icons
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    size: "",
    color: "",
    rating: "",
    quantity: "",
    discount: "",
  });

  const fetchData = async () => {
    const products = await getProductData();
    setProducts(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (productId, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        console.log("Product updated successfully:", updatedProduct);

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productId ? updatedProduct : product
          )
        );
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Product deleted successfully");
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openModal = (product) => {
    setCurrentProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      size: product.size.join(", "),
      color: product.color.join(", "),
      rating: product.rating,
      quantity: product.quantity,
      discount: product.discount,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleEdit(currentProduct._id, formData);
    closeModal();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300 text-center">#</th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Title
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Description
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Cover Image
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Price
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Size
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Color
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Rating
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Quantity
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Discount
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300 text-center">
                {index + 1}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.title}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.description}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.price}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.size.join(", ")}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.color.join(", ")}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.rating}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.quantity}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {product.discount}%
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => openModal(product)}
                  className="hover:text-blue-500"
                >
                  <RiEditLine />
                </button>
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="hover:text-red-500"
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl mb-4">Edit Product</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Description:
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Size:
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Color:
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Rating:
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Discount:
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
