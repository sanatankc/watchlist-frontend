import React, { Component } from 'react'
import styled from 'styled-components'
import { Query, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import MovieCard from '../MovieCard'
import GET_WATCHLIST from '../../../../gql/getWatchlist'

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`

class MoviesContainer extends Component {
  constructor(props) {
    super(props)
    this.onDelete = this.onDelete.bind(this)
  }

  onDelete(tmdbId) {
    return () => {
      console.log(tmdbId)
      this.props.client.mutate({
        mutation: gql`mutation {
          deleteMovie(tmdbId: "${tmdbId}") {
            tmdbId
          }
        }`
      }).then(res => {
        const { cache } = this.props.client
        const { getAddedMovies } = cache.readQuery({ query: GET_WATCHLIST })
        const { deleteMovie } = res.data
        cache.writeQuery({
          query: GET_WATCHLIST,
          data: { getAddedMovies: getAddedMovies.filter(movie => movie.tmdbId !== deleteMovie.tmdbId) }
        })
        this.forceUpdate()
      })
    }
  }

  render() {
    return (
      <Container>
        <Query query={GET_WATCHLIST}>
          {({loading, error, data}) => {
            if (loading) return <div />
            if (error) return <div />
            console.log(data)
            return data.getAddedMovies.map(movie => (
              <MovieCard {...movie}
                key={movie.tmdbId}
                onDelete={this.onDelete(movie.tmdbId)}
                openTrailer={this.props.openTrailer}
            />
            ))
          }}
        </Query>
      </Container>
    )
  }
}

export default withApollo(MoviesContainer)