import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
type BackButtonProps = {
  href: string;
};

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link href={href}>
      <a
        className="group flex items-center space-x-2 px-4 py-2 bg-white text-gray-700 rounded-lg 
          border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back to Products</span>
      </a>
    </Link>
  );
}
