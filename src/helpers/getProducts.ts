import { ProductsResponse } from "../types";

const API_URL = 'https://dummyjson.com/products';


export const getProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data as ProductsResponse;
}