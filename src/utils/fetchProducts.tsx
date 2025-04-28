import { Product } from "../types/product";

export default async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed fetching products");
    }
    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
