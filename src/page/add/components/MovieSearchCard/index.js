import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { boxShadow, themeColor } from '../../../../constants'
import placeHolder from './placeholder.png'


const blink = keyframes`
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
`

const Card = styled.div`
  background: white;
  box-shadow: ${boxShadow};
  width: 270px;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 40px;
  margin-left: 30px;
`
const PostersWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`
const BackgroundPosterContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 225px;
  top: 0;
  left: 0;
`
const BackgroundPoster = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("${props => props.image || placeHolder}");
  background-size: cover;
  filter: url(#bluish);
`

const FrontPosterContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 225px;
  bottom: 0;
  right: 0;
  box-shadow: -5px 0px 25px 0 rgba(46, 61, 73, 0.4);
`
const FrontPoster = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("${props => props.image || placeHolder}");
  background-size: cover;
`

const PlaceHolderImage = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("${placeHolder}");
  background-size: cover;
  ${props => props.filtered && 'filter: url(#bluish);'}
`

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-size: 16px;
  letter-spacing: 2.2px;
  margin-top: 30px;
  height: 18px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const WatchListBtn = styled.button`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 16px;
  padding: 10px 0;
  background: ${props => {
    if (props.btnStatus === 'NORMAL') return themeColor
    if (props.btnStatus === 'LOADING') return '#2EC4B691'
    if (props.btnStatus === 'SUCCESS') return '#2EC4B6'
  }};
  cursor: ${props => {
    if (props.btnStatus === 'NORMAL') return 'pointer'
    if (props.btnStatus === 'LOADING') return 'not-allowed'
    if (props.btnStatus === 'SUCCESS') return 'pointer'
  }};
  letter-spacing: 2.2px;
  margin-top: 20px;
  color: #fff;
  transition: 0.3s all ease-in-out;
  span {
    animation-name: ${blink};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

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
        <WatchListBtn btnStatus={this.state.btnStatus}>
          {this.renderButtonContent()}
        </WatchListBtn>
      </Card>
    )
  }
}

export default MovieSearchCard
