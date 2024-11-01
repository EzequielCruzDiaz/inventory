type BackButtonProps = {
  onBack: () => void;
};

export default function BackButton({ onBack }: BackButtonProps) {
  return (
    <button
      onClick={onBack}
      className="mt-8 w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg 
        hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      ← Back to Products
    </button>
  );
}
