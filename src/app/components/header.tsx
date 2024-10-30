'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import siteConfig from "../Siteconfig"
import { ShoppingCart, User } from "lucide-react"

const NavItems = [
  { path: "/", text: "Home" },
  { path: "/products", text: "Products" },
]

export default function Header() {
  const pathname = usePathname()

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
            {NavItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`font-bold text-lg transition-colors duration-200 ${
                    pathname === item.path
                      ? "text-white border-b-2 border-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
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
  )
}