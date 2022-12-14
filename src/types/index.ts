export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type categoryTypes = 'smartphones' | 'laptops' | 'fragrances' | 'skincare' | 'groceries' | 'home-decoration'

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: categoryTypes;
  thumbnail: string;
  images: string[];
}