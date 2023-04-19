import { createContext, useState } from "react";
import { CartInterface } from "@/lib/types";

interface CartContext {
  cart: CartInterface[];
  setCart: (cart: CartInterface[]) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContext>({
  cart: [],
  setCart: () => {},
});

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<CartInterface[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
