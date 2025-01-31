"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavLinks() {
  const [showRoutes, setShowRoutes] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "Detail", path: "/detail" },
    { name: "Payment", path: "/payment" },
    { name: "Dashboard-Admin", path: "/dashboard-admin" },
  ];

  return (
    <div className="relative">
      <div>
        <button
          onClick={() => setShowRoutes(!showRoutes)}
          className="text-4xl text-[#596780]"
        >
          &#9776;
        </button>
      </div>

      {showRoutes && (
        <ul className="absolute right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-md w-40 max-h-60 overflow-auto z-10">
          {routes.map((route) => (
            <li
              key={route.name}
              className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
            >
              <Link href={route.path} onClick={() => setShowRoutes(false)}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
