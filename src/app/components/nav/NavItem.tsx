"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  path: string;
  text: string;
};

export const NavItem = ({ path, text }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`font-bold text-lg transition-colors duration-200 ${
          pathname === path
            ? "text-white border-b-2 border-white"
            : "text-gray-300 hover:text-white"
        }`}
      >
        {text}
      </Link>
    </li>
  );
};
