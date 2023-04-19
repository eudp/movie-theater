import Image from "next/image";
import Link from "next/link";
import { SearchResultInterface } from "@/lib/types";

interface Props {
  movie: SearchResultInterface;
}

export default function HomeCard({ movie }: Props): JSX.Element {
  return (
    <Link href={`/movie/${movie.imdbID}`}>
      <div className="bg-white shadow-lg rounded-md cursor-pointer">
        {movie.Poster !== "N/A" && (
          <Image
            src={movie.Poster}
            width={700}
            height={800}
            className="rounded-t-md"
            alt={movie.Title}
          />
        )}
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.Title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}
