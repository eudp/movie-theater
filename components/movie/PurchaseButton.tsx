"use client";

import { useState } from "react";
import PurchaseModal from "./PurchaseModal";
import { MovieInterface } from "@/lib/types";

type Props = {
  movie: MovieInterface;
};

export default function PurchaseButton({ movie }: Props): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="my-5">
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
        Buy now
      </button>
      {openModal && <PurchaseModal toggleModal={toggleModal} movie={movie} />}
    </div>
  );
}
