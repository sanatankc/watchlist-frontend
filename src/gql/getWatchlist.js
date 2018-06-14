import gql from "graphql-tag"

const GET_WATCHLIST = gql`{
  getAddedMovies(isInWatchList: true) {
    tmdbId
    imdbId
    name
    releaseDate
    image
    duration
    director
    writers
    cast
    imdbRating
    trailer
    netflix
    amazon
  }
}`

export default GET_WATCHLIST
