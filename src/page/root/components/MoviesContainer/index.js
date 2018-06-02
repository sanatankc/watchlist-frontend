import React, { Component } from 'react'
import styled from 'styled-components'
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

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default class MoviesContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Query query={GET_MOVIES}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div />
            console.log(data)
            return data.getAddedMovies.map(movie => (
              <MovieCard {...movie} key={movie.tmdbId} />
            ))
          }}
        </Query>
      </Container>
    )
  }
}