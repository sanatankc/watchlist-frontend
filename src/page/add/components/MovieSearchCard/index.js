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

const ADD_WATCHLIST = gql`
  mutation addMovie($tmdbId: String!, $movieName: String!) {
    addMovie(tmdbId: $tmdbId, movieName: $movieName) {
      tmdbId
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
    console.log(tmdbId, movieName)
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

        <Mutation mutation={ADD_WATCHLIST}>
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
