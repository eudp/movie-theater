"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "@/providers/CartContext";
import { MovieInterface } from "@/lib/types";
import {
  ADULTS_TICKET_PRICE,
  CHILDREN_TICKET_PRICE,
  SENIOR_TICKET_PRICE,
} from "@/lib/constants";

interface Props {
  toggleModal: () => void;
  movie: MovieInterface;
}

export default function PurchaseModal({ toggleModal, movie }: Props) {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [seniorTickets, setSeniorTickets] = useState(0);

  const handleConfirmPurchase = useCallback(() => {
    if (adultTickets + childTickets + seniorTickets === 0) {
      alert("Please select at least one ticket");
      return;
    }

    const movieInCart = cart.find((item) => item.movieId === movie.imdbID);

    let newCart = [];

    if (movieInCart) {
      newCart = cart.map((item) => {
        if (item.movieId === movie.imdbID) {
          return {
            ...item,
            adultTickets,
            childTickets,
            seniorTickets,
          };
        }
        return item;
      });
    } else {
      newCart = [
        ...cart,
        {
          adultTickets,
          childTickets,
          seniorTickets,
          movieId: movie.imdbID,
          movieTitle: movie.Title,
          movieImage: movie.Poster,
        },
      ];
    }

    setCart(newCart);
    router.push("/cart");
  }, [adultTickets, childTickets, seniorTickets]);

  useEffect(() => {
    const movieInCart = cart.find((item) => item.movieId === movie.imdbID);

    if (movieInCart) {
      setAdultTickets(movieInCart.adultTickets);
      setChildTickets(movieInCart.childTickets);
      setSeniorTickets(movieInCart.seniorTickets);
    }
  }, []);

  const handleAdultTickets = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAdultTickets(parseInt(e.target.value));
    },
    [adultTickets]
  );

  const handleChildTickets = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setChildTickets(parseInt(e.target.value));
    },
    [childTickets]
  );

  const handleSeniorTickets = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSeniorTickets(parseInt(e.target.value));
    },
    [seniorTickets]
  );

  const totalCosts = useMemo(
    () =>
      adultTickets * ADULTS_TICKET_PRICE +
      childTickets * CHILDREN_TICKET_PRICE +
      seniorTickets * SENIOR_TICKET_PRICE,
    [adultTickets, childTickets, seniorTickets]
  );

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg md:max-w-2xl mx-auto">
          <div className="bg-gray-100 px-4 py-3 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">Buy Tickets</h2>
            <button
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={toggleModal}
            >
              <span className="sr-only">Close modal</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-6">
            <div className="mb-4">
              <label
                htmlFor="adultTickets"
                className="block text-gray-700 font-bold mb-2"
              >
                Adult Tickets ($10)
              </label>
              <input
                type="number"
                id="adultTickets"
                className="border border-gray-400 p-2 rounded w-full"
                value={adultTickets}
                onChange={handleAdultTickets}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="childTickets"
                className="block text-gray-700 font-bold mb-2"
              >
                Child Tickets ($5)
              </label>
              <input
                type="number"
                id="childTickets"
                className="border border-gray-400 p-2 rounded w-full"
                value={childTickets}
                onChange={handleChildTickets}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seniorTickets"
                className="block text-gray-700 font-bold mb-2"
              >
                Senior Tickets ($7.5)
              </label>
              <input
                type="number"
                id="seniorTickets"
                className="border border-gray-400 p-2 rounded w-full"
                value={seniorTickets}
                onChange={handleSeniorTickets}
              />
            </div>
            <div className="flex">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmPurchase}
              >
                Confirm Purchase (${totalCosts || 0})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
