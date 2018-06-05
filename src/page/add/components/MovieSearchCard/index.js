import React, { Component, Fragment } from 'react'
import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Card,
  PostersWrapper,
  BackgroundPosterContainer,
  BackgroundPoster,
  FrontPosterContainer,
  FrontPoster,
  PlaceHolderImage,
  TitleWrapper,
  Title,
  WatchListBtn
} from './index.style'
import GET_MOVIES from '../../../../gql/getMovies'

const ADD_WATCHLIST = gql`
  mutation addMovie($tmdbId: String!, $movieName: String!) {
    addMovie(tmdbId: $tmdbId, movieName: $movieName) {
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

class MovieSearchCard extends Component {
  state = {
    btnStatus: 'NORMAL',
  }

  renderButtonContent() {
    switch (this.state.btnStatus) {
      case 'NORMAL':
        return '+ Add to Watchlist'
      case 'LOADING':
        return (
          <Fragment>
            Adding to watchlist <span>.</span><span>.</span><span>.</span>
          </Fragment>
        )
      case 'SUCCESS':
        return 'Added to Watchlist'
      default: return ''
    }
  }

  saveInWatchlist(addMovie) {
    const { tmdbId, movieName } = this.props
    addMovie({
      variables: {
        tmdbId,
        movieName
      }
    })
  }


  render() {
    return (
      <Card>
        <PostersWrapper>
          <BackgroundPosterContainer>
            <PlaceHolderImage filtered />
            <BackgroundPoster image={this.props.image} />
          </BackgroundPosterContainer>
          <FrontPosterContainer>
            <PlaceHolderImage />
            <FrontPoster image={this.props.image} />
          </FrontPosterContainer>
        </PostersWrapper>
        <TitleWrapper>
          <Title>{this.props.movieName}</Title>
        </TitleWrapper>

        <Mutation
          mutation={ADD_WATCHLIST}
          update={(cache, { data: { addMovie } }) => {
            try {
              const { getAddedMovies } = cache.readQuery({ query: GET_MOVIES })
              cache.writeQuery({
                query: GET_MOVIES,
                data: { getAddedMovies: getAddedMovies.concat(addMovie)}
              })
            } catch(e) {
              console.log('ROOT_QUERY is not available')
            }
          }}
        >
          {(addMovie, { data }) => (
            <WatchListBtn btnStatus={this.state.btnStatus} onClick={() => {
              this.saveInWatchlist(addMovie)
            }}>
              {this.renderButtonContent()}
            </WatchListBtn>
          )}
        </Mutation>
      </Card>
    )
  }
}
export default withApollo(MovieSearchCard)
