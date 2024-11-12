type ButtonProps = {
  label: string;
  onPageChange: (page: number) => void;
  currentPage: number;
  targetPage: number;
  totalPages: number;
  ariaLabel: string;
};

const Button = ({
  label,
  onPageChange,
  currentPage,
  targetPage,
  totalPages,
  ariaLabel,
}: ButtonProps) => {
  const disabled =
    targetPage < 1 || targetPage > totalPages || targetPage === currentPage;

  return (
    <button
      onClick={() => onPageChange(targetPage)}
      disabled={disabled}
      aria-label={ariaLabel}
      className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
