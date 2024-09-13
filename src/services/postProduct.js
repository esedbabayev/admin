export const postProduct = async (newProduct) => {
  try {
    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    // console.log(newProduct);

    if (!response.ok) return console.log("backend error");

    const result = await response.json();
    console.log(result.createdProduct);
  } catch (error) {
    console.error("Error adding product:", error);
  }
};
