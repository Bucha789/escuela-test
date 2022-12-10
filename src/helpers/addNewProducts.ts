import { Product } from "../types";
import { getProducts } from "./getProducts";

export const addNewProduct = async (product: Partial<Product>) =>  {
  const data = await getProducts();
  data.products.unshift(product as Product);
  localStorage.setItem('products', JSON.stringify(data));
};