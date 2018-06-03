import React, { Component } from 'react'
import styled from 'styled-components'
import { boxShadow, themeColor } from '../../../../constants'
import DropDown from '../Dropdown'
import netflixLogo from './netflix.png'
import amazonLogo from './primevideo.png'
import placeholderImage from './placeholder.png'

const providerSpecificCss = props => {
  if (props.provider === 'netflix') return `
    background: url('${netflixLogo}');
    width: 50px;
    height: 14px;
  `
  if (props.provider === 'amazon') return `
    background: url('${amazonLogo}');
    width: 64.5px;
    height: 18px;
  `
}
const Card = styled.div`
  display: flex;
  width: 550px;
  height: 280px;
  border-radius: 4px;
  box-shadow: ${boxShadow};
  background: white;
  margin-top: 30px;
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
  border: 4px;
  overflow: none;
`
const BackPoster = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 166px;
  height: 250px;
  background: url('${props => props.image}');
  background-size: cover;
  filter: url('#bluish');
`
const FrontPoster = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  width: 166px;
  height: 250px;
  background: url('${props => props.image}');
  background-size: cover;
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
  text-transform: capitalize;
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
  margin-top: 5px;
  align-items: center;
`
const ProviderLogo = styled.div`
  width: 64.5px;
  height: 18px;
  margin-right: 10px;
  ${providerSpecificCss}
  background-size: cover;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  margin-left: auto;
  transition: 0.3s all ease-in-out;
  div.dot {
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
  constructor(props) {
    super(props)
    this.onMoveToWatched = this.onMoveToWatched.bind(this)
    this.onEdit = this.onEdit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onMoveToWatched() {
    console.log('moveToWatched')
  }

  onEdit() {
    console.log('edit')
  }

  onDelete() {
    console.log('delete')
  }

  render() {
    const {
      tmdbId,
      name,
      imdbRating,
      director,
      writers,
      cast,
      netflix,
      amazon,
      image
    } = this.props
    const splitRating = imdbRating.split('.')
    const poster = image
      ? `https://image.tmdb.org/t/p/w200_and_h300_bestv2/${image}`
      : placeholderImage

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
              {netflix &&
                <a href={netflix} target='_blank'>
                  <ProviderLogo provider='netflix' />
                </a>
              }
              {amazon &&
                <a href={amazon} target='_blank'>
                  <ProviderLogo provider='amazon' />
                </a>
              }
              <Menu className={`card-dropdown-${tmdbId}`}>
                <div className='dot' />
                <div className='dot' />
                <div className='dot' />
                <DropDown
                  parentClass={`card-dropdown-${tmdbId}`}
                  items= {[
                    { label: 'Move to watched', onClick: this.onMoveToWatched},
                    { label: 'Edit', onClick: this.onEdit },
                    { label: 'Delete', onClick: this.onDelete }
                  ]}
                />
              </Menu>
            </FootRow>

          </BottomContentWrapper>
        </ContentContainer>
        <PostersContainer>
          <FrontPoster image={image && `https://image.tmdb.org/t/p/w200_and_h300_bestv2/${image}`}/>
          <BackPoster image={image && `https://image.tmdb.org/t/p/w200_and_h300_bestv2/${image}`} />
        </PostersContainer>
      </Card>
    )
  }
}
