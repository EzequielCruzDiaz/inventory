export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={page === 1}
        aria-label="Go to first page"
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300"
      >
        First
      </button>
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Go to previous page"
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300"
      >
        Previous
      </button>
      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Go to next page"
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={page === totalPages}
        aria-label="Go to last page"
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300"
      >
        Last
      </button>
    </div>
  );
};
