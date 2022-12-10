import { ProductsResponse } from "../types";
import { getLocalStorage, setLocalStorage } from "./getLocalStorage";

const API_URL = 'https://dummyjson.com/products';


export const getProducts = async (): Promise<ProductsResponse> => {
  
  const localData = getLocalStorage<ProductsResponse>('products');

  if (!localData) {
    const res = await fetch(API_URL);
    const data = await res.json();
    setLocalStorage('products', data);
    return data as ProductsResponse;
  }
  
  return localData;
}