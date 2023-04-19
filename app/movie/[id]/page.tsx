import { Metadata } from "next";
import MovieCard from "@/components/movie/MovieCard";
import { MovieInterface } from "@/lib/types";
import { generateFetchMovieUrl } from "@/lib/utils";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const id = params.id;

    const movie = await getMovie(id);

    return {
      title: `${movie.Title} | Movie Theater`,
    };
  } catch {
    return {
      title: "Movie not found",
    };
  }
}

const getMovie = async (id: string): Promise<MovieInterface> => {
  const res = await fetch(generateFetchMovieUrl(id));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  if (data.Response === "False") {
    throw new Error("Movie not found");
  }

  return data;
};

export default async function Movie({
  params: { id },
}: Props): Promise<JSX.Element> {
  const movie = await getMovie(id);
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <MovieCard movie={movie} />
    </div>
  );
}
