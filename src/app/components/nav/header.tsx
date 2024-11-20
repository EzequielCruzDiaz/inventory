import Link from "next/link";
import { siteConfig } from "@/app/Siteconfig";
import { ShoppingCart, User } from "lucide-react";
import { NavItem } from "./NavItem";

const paths = [
  { path: "/", text: "Home" },
  { path: "/products", text: "Products" },
];

export const Header = () => {
  return (
    <header className="bg-gray-700 text-primary-foreground py-4">
      <div className="container mx-auto px-5 flex justify-between items-center text-white">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            {siteConfig.siteName}
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-4">
            {paths.map((item) => (
              <NavItem key={item.path} path={item.path} text={item.text} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Shopping Cart"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            aria-label="User Profile"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
