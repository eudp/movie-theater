const baseUrl = "https://www.omdbapi.com/";
const apiKey = process.env.OMDBAPI_API_KEY;

export const generateFetchMovieUrl = (id: string) =>
  `${baseUrl}?i=${id}&apikey=${apiKey}`;

export const generateFetchMoviesUrl = (searchTerm: string) =>
  `${baseUrl}?s=${searchTerm}&apikey=${apiKey}`;
