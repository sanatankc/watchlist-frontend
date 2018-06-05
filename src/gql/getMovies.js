import gql from "graphql-tag"

const GET_MOVIES = gql`{
  getAddedMovies {
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

export default GET_MOVIES
