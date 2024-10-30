"use client";

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import ProductDetail from "../components/ProductDetail";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import { Product } from "../types/products";


export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // filter the products on the client side is not recommended, you should use the api to filter the products: https://fakestoreapi.com/products?category=electronics
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // fetch the categories from the api inside the categories select component: https://fakestoreapi.com/products/categories
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // all these states can be handled in the URL, so you would not need to pass the state and the setter functions as props. https://www.reddit.com/r/nextjs/comments/16wnh2y/how_to_use_url_state_with_the_app_router_zero/?rdt=58479
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(5);

  // when a product is clicked, go to /products/:id
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // use the axios instance here
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        setProducts(response.data);
        // this would not be necessary if you filter the products on the api
        setFilteredProducts(response.data);

        // this would not be necessary if you fetch the categories from the api inside the categories select component
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

  // this would be handle inside the SearchBar component using the url as state
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    filterProducts(event.target.value, selectedCategory);
  };

  // this would be handle inside the CategoryFilter component using the url as state
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    filterProducts(searchQuery, event.target.value);
  };

  // this would not be necessary if you filter the products on the api
  const filterProducts = (search: string, category: string) => {
    // this does not work as you expect, javascript works with references, so you are modifying the original array:https://dev.to/muhammedshameel/understanding-reference-vs-value-in-javascript-ab4
    // so be careful when you modify the state directly
    // filter method returns a new array so this would no be a problem really
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

  // this would be handle inside the Pagination component using the url as state
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // create a new route for the product detail
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // this would not be necessary if you filter the products on the api: https://fakestoreapi.com/products?limit=5&page=1
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * limit,
    page * limit
  );

  // get the total of pages would be a problem using the limit since the api does not return the total of products.
  // you can prefect 2 pages of products so you can get an aproximation of the total of pages
  // ask me if you need help with this
  const totalPages = Math.ceil(filteredProducts.length / limit);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Catalog
          </h1>

          {selectedProduct ? (
            <ProductDetail
              product={selectedProduct}
              onBack={handleBackToList}
            />
          ) : (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search Products
                    </label>
                    <SearchBar value={searchQuery} onChange={handleSearch} />
                  </div>
                  <div className="lg:w-72">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Filter by Category
                    </label>
                    <CategoryFilter
                      categories={categories}
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ProductList
                  products={paginatedProducts}
                  onProductClick={handleProductClick}
                />
              </div>

              <div className="flex justify-center mt-8">
                <div className="bg-white px-4 py-3 rounded-lg shadow-sm">
                  <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
