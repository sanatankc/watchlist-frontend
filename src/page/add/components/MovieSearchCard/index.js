import React from 'react'
import styled from 'styled-components'
import { boxShadow, themeColor } from '../../../constants'

const Card = styled.div`
  background: white;
  box-shadow: ${boxShadow};
  width: 340px;
  border-radius: 4px;
  overflow: hidden;
`
const PostersWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 335px;
`
const BackgroundPoster = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  top: 0;
  left: 0;
  background: url("https://image.tmdb.org/t/p/w200/hYtmqHbCuemuA6ICUylWRfP7bR6.jpg");
  filter: url(#bluish);
`

const FrontPoster = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  bottom: 0;
  right: 0;
  box-shadow: -5px 0px 25px 0 rgba(46, 61, 73, 0.4);
  background: url("https://image.tmdb.org/t/p/w200/hYtmqHbCuemuA6ICUylWRfP7bR6.jpg");
`
const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`

const Title = styled.div`
  font-size: 18px;
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
  font-size: 18px;
  padding: 10px 0;
  background: ${themeColor};
  color: white;
  letter-spacing: 2.2px;
  margin-top: 20px;
  cursor: pointer;
`

const MovieSearchCard = () => (
  <Card>
    <PostersWrapper>
      <BackgroundPoster />
      <FrontPoster />
    </PostersWrapper>
    <TitleWrapper>
      <Title>A Day in the Family but let's emulate fake long title</Title>
    </TitleWrapper>
    <WatchListBtn>+ Add to Watchlist</WatchListBtn>
  </Card>
)

export default MovieSearchCard