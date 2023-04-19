import { SearchResultInterface } from "@/lib/types";
import { generateFetchMoviesUrl } from "@/lib/utils";
import HomeCard from "@/components/home/HomeCard";

const getMovies = async (): Promise<SearchResultInterface[]> => {
  // fixed to search for "impossible"
  const res = await fetch(generateFetchMoviesUrl("impossible"));

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  if (data.Response === "False") {
    return [];
  }
  return data.Search;
};

export default async function Home(): Promise<JSX.Element> {
  const movies = await getMovies();

  return (
    <div className="bg-gray-200">
      <div className="container max-w-7xl mx-auto pb-10 px-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pt-8">
          {movies.map((movie: SearchResultInterface) => (
            <HomeCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    </div>
  );
}
