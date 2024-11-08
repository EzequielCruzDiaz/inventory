export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading products<span className="dot-animate">...</span>
      </p>
    </div>
  );
};
