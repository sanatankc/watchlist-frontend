import React, { Component } from 'react'
import styled from 'styled-components'
import { boxShadow, themeColor } from '../../../../constants'
import netflixLogo from './netflix.png'
import primeVideoLogo from './primevideo.png'

const selectProviderBackground = props => {
  if (props.provider === 'netflix') return netflixLogo
  if (props.provider === 'primeVideo') return primeVideoLogo
}
const Card = styled.div`
  display: flex;
  width: 550px;
  height: 280px;
  border-radius: 4px;
  box-shadow: ${boxShadow};
  background: white;
  overflow: hidden;
`
const ContentContainer = styled.div`
  width: calc(550px - 200px);
  padding: 20px;
  padding-top: 10px;
  box-sizing: border-box;
`
const PostersContainer = styled.div`
  position: relative;
  width: 200px;
`
const BackPoster = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 166px;
  height: 250px;
  background: url('https://image.tmdb.org/t/p/w200/xFJqU1W5WlJiKr4Witnb7h9HNHn.jpg');
  filter: url('#bluish');
`
const FrontPoster = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  width: 166px;
  height: 250px;
  background: url('https://image.tmdb.org/t/p/w200/xFJqU1W5WlJiKr4Witnb7h9HNHn.jpg');
  box-shadow: -5px 0px 25px 0 rgba(46, 61, 73, 0.4);
`
const TopContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`
const Title = styled.div`
  font-size: 18px;
  letter-spacing: 2.2px;
`
const Rating = styled.div`
  color: ${themeColor};
  font-size: 48px;
  font-weight: 900;
  display: flex;
  align-items: baseline;
  span {
    font-size: 24px;
  }
  div.dot {
    width: 8px;
    height: 8px;
    margin: 0 2px;
    border-radius: 50%;
    background: ${themeColor};
  }
`
const MiddleContentWrapper = styled.div`
  margin-top: 30px;
`

const Text = styled.div`
  font-size: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #747474;
  margin-bottom: 10px;
  span {
    color: #2a2a2a;
  }
`
const BottomContentWrapper = styled.div`
  margin-top: 30px;
`
const FootRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  align-items: center;
`
const ProviderLogo = styled.div`
  width: 64.5px;
  height: 18px;
  background: url(${selectProviderBackground});
  background-size: cover;
  margin-right: 10px;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  margin-left: auto;
  transition: 0.3s all ease-in-out;
  div {
    width: 4px;
    height: 4px;
    background: black;
    border-radius: 50%;
  }
  &:hover {
    box-shadow: ${boxShadow};
  }
`
export default class MovieCard extends Component {
  render() {
    const {
      tmdbId,
      name,
      imdbRating,
      director,
      writers,
      cast
    } = this.props
    console.log(this.props)
    const splitRating = imdbRating.split('.')
    console.log(splitRating)
    return (
      <Card>
        <ContentContainer>
          <TopContentWrapper>
            <Title>{name}</Title>
            <Rating>{splitRating[0]}<div className='dot'/><span>{splitRating[1]}</span></Rating>
          </TopContentWrapper>
          <MiddleContentWrapper>
            <Text title={director}>Directed by: <span>{director}</span></Text>
            <Text title={cast}>Cast: <span>{cast}</span></Text>
            <Text title={writers}>Written by: <span>{writers}</span></Text>
          </MiddleContentWrapper>
          <BottomContentWrapper>
            <Text>Watch On:</Text>
            <FootRow>
              <a href='#'>
                <ProviderLogo provider='netflix' />
              </a>
              <a href='#'>
                <ProviderLogo provider='primeVideo' />
              </a>
              <Menu>
                <div />
                <div />
                <div />
              </Menu>
            </FootRow>

          </BottomContentWrapper>
        </ContentContainer>
        <PostersContainer>
          <FrontPoster />
          <BackPoster />
        </PostersContainer>
      </Card>
    )
  }
}