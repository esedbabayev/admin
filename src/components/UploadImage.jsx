import React, { useState } from "react";

// Services
import { postProduct } from "../services/postProduct";

const UploadImage = () => {
  const [imageArray, setImageArray] = useState([]);
  const [imageURL, setImageURL] = useState("");

  const handleChange = async (e) => {
    const file = e.target.files[0];
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
      setImageURL(newImageURL);
      setImageArray([...imageArray, newImageURL]);
      console.log(newImageURL, "Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClick = async () => {
    const newProduct = {
      title: "Stylish Shorts",
      description:
        "A high-quality jacket suitable for winter wear, available in multiple colors and sizes.",
      coverImage: imageArray,
      price: "59.99",
      size: ["S", "M", "L", "XL"],
      color: ["Red", "Blue", "Black"],
      rating: "4.5",
      quantity: 150,
      discount: 10,
      newArrival: true,
      topSeller: true,
    };
    try {
      const response = await postProduct(newProduct);

      const result = await response.json();
      console.log(result, "Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      {/* <div>
        <input type="file" onChange={handleChange} />
        {imageArray.map((url, index) => (
          <img key={index} src={url} alt={`uploaded ${index}`} />
        ))}

        <button onClick={handleClick}>Send</button>
      </div> */}
    </div>
  );
};

export default UploadImage;
