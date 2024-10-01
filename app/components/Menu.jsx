import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { menuItems } from "../utilis/menuItems";
const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-[#326eb1] px-20 sticky top-14 left-0 right-0 z-40 hidden md:block">
      <ul className="flex justify-center items-center text-white">
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className={`font-semibold xl:px-5 px-2 py-3 
                    hover:bg-[#2289bb] transition-all duration-300
                    ${pathname === href ? "bg-[#2289bb]" : ""}`}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
