const mainUrl = "http://localhost:5000";

export const getUserData = async () => {
  try {
    const userResponse = await fetch(`${mainUrl}/api/users`);
    const userData = await userResponse.json();

    return userData.data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
export const getProductData = async () => {
  try {
    const productResponse = await fetch(`${mainUrl}/api/products`);
    const productData = await productResponse.json();

    return productData.products;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
