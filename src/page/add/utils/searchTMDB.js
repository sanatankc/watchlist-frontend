import { TMDB_API } from '../../../config'

export default async searchTerm => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API}&language=en-US&query=${searchTerm}&page=1&include_adult=true`)
  const { results } = await res.json()
  return results.map(movie => ({
    tmdbId: movie.id,
    movieName: movie.original_title,
    image: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
  }))
}
