"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/providers/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-black">
      <div className="text-gray-100 p-4 max-w-7xl mx-auto container flex justify-between">
        <Link href="/" className="text-base md:text-2xl">
          Movie Theater
        </Link>
        <Link href="/cart" className="text-base md:text-2xl flex">
          Cart
          {cart.length != 0 && (
            <div className="text-red-500 ml-2">{cart.length}</div>
          )}
        </Link>
      </div>
    </nav>
  );
}
