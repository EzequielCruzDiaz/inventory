
interface CategoryFilterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  value,
  onChange,
  categories,
}) => (
  <select
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
  >
    {categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
