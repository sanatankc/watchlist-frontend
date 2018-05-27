import React from 'react'
import styled from 'styled-components'
import { boxShadow, themeColor } from '../../../../constants'

const Card = styled.div`
  background: white;
  box-shadow: ${boxShadow};
  width: 270px;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 40px;
`
const PostersWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`
const BackgroundPoster = styled.div`
  position: absolute;
  width: 150px;
  height: 225px;
  top: 0;
  left: 0;
  background: url("${props => props.image}");
  background-size: cover;
  filter: url(#bluish);
`

const FrontPoster = styled.div`
  position: absolute;
  width: 150px;
  height: 225px;
  bottom: 0;
  right: 0;
  box-shadow: -5px 0px 25px 0 rgba(46, 61, 73, 0.4);
  background: url("${props => props.image}");
  background-size: cover;
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
  background: ${themeColor};
  color: white;
  letter-spacing: 2.2px;
  margin-top: 20px;
  cursor: pointer;
`

const MovieSearchCard = props => (
  <Card>
    <PostersWrapper>
      <BackgroundPoster image={props.image} />
      <FrontPoster image={props.image} />
    </PostersWrapper>
    <TitleWrapper>
      <Title>{props.movieName}</Title>
    </TitleWrapper>
    <WatchListBtn>+ Add to Watchlist</WatchListBtn>
  </Card>
)

export default MovieSearchCard