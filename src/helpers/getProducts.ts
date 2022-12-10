import { ProductsResponse } from "../types";
import { getLocalStorage } from "./getLocalStorage";

const API_URL = 'https://dummyjson.com/products';


export const getProducts = async (): Promise<ProductsResponse> => {
  
  const localData = getLocalStorage<ProductsResponse>('products');
  
  if (!localData) {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data as ProductsResponse;
  }
  
  return localData;
}