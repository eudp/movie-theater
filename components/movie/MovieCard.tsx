import Image from "next/image";
import { MovieInterface } from "@/lib/types";
import PurchaseButton from "@/components/movie/PurchaseButton";

interface Props {
  movie: MovieInterface;
}

export default function MovieCard({ movie }: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center px-3">
      {movie.Poster !== "N/A" && (
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={250}
          height={150}
          className="rounded-md"
        />
      )}
      <h1 className="font-bold text-2xl mt-4">{movie.Title}</h1>
      <p className="text-gray-600 text-lg mt-4">{movie.Plot}</p>
      <p className="text-gray-600 text-sm mt-4">
        <span className="font-bold">Genres:</span> {movie.Genre}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-bold">Release Date:</span> {movie.Released}
      </p>
      <PurchaseButton movie={movie} />
    </div>
  );
}
