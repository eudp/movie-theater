import { useCallback } from "react";
import { CartInterface } from "@/lib/types";

interface Props {
  movie: CartInterface;
  handleDeleteMovie: (movieId: string) => void;
}

export default function CartCard({ movie, handleDeleteMovie }: Props) {
  const onClickDelete = useCallback(
    () => handleDeleteMovie(movie.movieId),
    [movie.movieId]
  );

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {movie.movieImage !== "N/A" && (
        <img
          className="w-full h-64 object-cover"
          src={movie.movieImage}
          alt={movie.movieTitle}
        />
      )}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{movie.movieTitle}</h2>
        <ul className="text-gray-700 text-base mb-4">
          <li>Adult tickets: {movie.adultTickets}</li>
          <li>Child tickets: {movie.childTickets}</li>
          <li>Senior tickets: {movie.seniorTickets}</li>
        </ul>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClickDelete}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
