import { useCategories } from "@/app/hooks/useCategories";
import { useQueryParam } from "@/app/hooks/useSearchProduct";
import { useSearchParams } from "next/navigation";

export const CategoryFilter = () => {
  const { updateQueryParam } = useQueryParam();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || undefined;
  const { categories, isLoading, error } = useCategories();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    updateQueryParam("category", selectedValue !== "All" ? selectedValue : "");
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="relative w-full max-w-lg">
      <select
        value={selectedCategory || "All"}
        onChange={onChange}
        className="mt-4 w-full p-3 pl-4 pr-4 text-gray-700 bg-white border 
                   border-gray-300 rounded-xl shadow-sm transition duration-200 
                   hover:border-gray-400 focus:outline-none focus:ring-2 
                   focus:ring-blue-200 focus:border-blue-400"
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
