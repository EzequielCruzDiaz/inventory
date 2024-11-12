import { useQueryParam } from "@/app/hooks/useSearchProduct";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { updateQueryParam } = useQueryParam();

  useEffect(() => {
    const handler = setTimeout(() => {
      updateQueryParam("search", inputValue);
    }, 1500);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-lg mt-4">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="search"
        placeholder="Search products..."
        value={inputValue}
        onChange={handleInputChange}
        className="w-full pl-10 pr-4 py-3 text-gray-700 bg-white border 
                   border-gray-300 rounded-xl shadow-sm placeholder-gray-400
                   focus:outline-none focus:border-blue-500 focus:ring-2 
                   focus:ring-blue-200 hover:border-gray-400 transition-all duration-200"
        aria-label="Search products"
      />
    </div>
  );
}
