"use client";
import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import styles from "../styles/ProductList.module.css";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        product.name.toLowerCase().includes(search.toLowerCase())
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

  return (
    <div className={styles.container}>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToList} />
      ) : (
        <>
          <SearchBar value={searchQuery} onChange={handleSearch} />
          <CategoryFilter
            categories={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
          <ProductList
            products={paginatedProducts}
            onProductClick={handleProductClick}
          />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
