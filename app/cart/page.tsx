"use client";

import { useCallback, useContext, useMemo } from "react";
import CartCard from "@/components/cart/CartCard";
import { CartContext } from "@/providers/CartContext";
import {
  ADULTS_TICKET_PRICE,
  CHILDREN_TICKET_PRICE,
  SENIOR_TICKET_PRICE,
} from "@/lib/constants";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleDeleteMovie = useCallback(
    (movieId: string) => {
      const newCart = cart.filter((movie) => movie.movieId !== movieId);
      setCart(newCart);
    },
    [cart]
  );

  const totalTickets = useMemo(
    () =>
      cart.reduce(
        (acc, movie) =>
          acc + movie.adultTickets + movie.childTickets + movie.seniorTickets,
        0
      ),
    [cart]
  );

  const totalCosts = useMemo(
    () =>
      cart.reduce(
        (acc, movie) =>
          acc +
          movie.adultTickets * ADULTS_TICKET_PRICE +
          movie.childTickets * CHILDREN_TICKET_PRICE +
          movie.seniorTickets * SENIOR_TICKET_PRICE,
        0
      ),
    [cart]
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Cart</h1>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {cart.map((movie) => (
            <CartCard
              movie={movie}
              handleDeleteMovie={handleDeleteMovie}
              key={movie.movieId}
            />
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Total tickets: {totalTickets}
          </h2>
          <h2 className="text-2xl font-bold mb-4">
            Total price: ${totalCosts}
          </h2>
        </div>
      </div>
    </div>
  );
}
