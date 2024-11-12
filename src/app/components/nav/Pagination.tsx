import Button from "./Navbutton";

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
      <Button
        label="First"
        onPageChange={onPageChange}
        currentPage={page}
        targetPage={1}
        totalPages={totalPages}
        ariaLabel="Go to first page"
      />
      <Button
        label="Previous"
        onPageChange={onPageChange}
        currentPage={page}
        targetPage={page - 1}
        totalPages={totalPages}
        ariaLabel="Go to previous page"
      />
      <span className="text-gray-700">
        Page {page} of {totalPages}
      </span>
      <Button
        label="Next"
        onPageChange={onPageChange}
        currentPage={page}
        targetPage={page + 1}
        totalPages={totalPages}
        ariaLabel="Go to next page"
      />
      <Button
        label="Last"
        onPageChange={onPageChange}
        currentPage={page}
        targetPage={totalPages}
        totalPages={totalPages}
        ariaLabel="Go to last page"
      />
    </div>
  );
};
