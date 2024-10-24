"use client";

import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import { Product } from "../types/products";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(5);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
        const categories = [
          "All",
          ...new Set(response.data.map((product) => product.category)),
        ];
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterProducts(event.target.value, selectedCategory);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    filterProducts(searchQuery, event.target.value);
  };

  const filterProducts = (search: string, category: string) => {
    let filtered = products;
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );
  const totalPages = Math.ceil(filteredProducts.length / limit);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Catalog</h1>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToList} />
      ) : (
        <>
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-2/3">
              <SearchBar value={searchQuery} onChange={handleSearch} />
            </div>
            <div className="w-full sm:w-1/3">
              <CategoryFilter
                categories={categories}
                value={selectedCategory}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
          <ProductList
            products={paginatedProducts}
            onProductClick={handleProductClick}
          />
          <div className="mt-8">
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
