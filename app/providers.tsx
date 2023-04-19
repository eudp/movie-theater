"use client";

import { CartProvider } from "../providers/CartContext";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return <CartProvider>{children}</CartProvider>;
}
