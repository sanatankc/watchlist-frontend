import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import MovieCard from '../MovieCard'

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

export default class MoviesContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <Query query={GET_MOVIES}>
          {({loading, error, data}) => {
            console.log(data)
            return <MovieCard />
          }}
        </Query>
      </div>
    )
  }
}