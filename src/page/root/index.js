import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import MoviesContainer from './components/MoviesContainer'
import Youtube from '../../components/Youtube'
import { themeColor, boxShadow } from '../../constants'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 50px 50px;
  box-sizing: border-box;
`
const TopWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 margin-top: 45px;
 height: 50px;
`

const AddNewBtn = styled.button`
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${themeColor};
  padding: 10px 20px;
  background: white;
  font-size: 18px;
  border-radius: 20px;
  box-shadow: ${boxShadow};
  letter-spacing: 2.2px;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: ${themeColor};
    color: #fff;
  }
`

export default class RootPage extends Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.openTrailer = this.openTrailer.bind(this)
    this.closeTrailer = this.closeTrailer.bind(this)
  }

  state = {
    searchText: '',
    shouldTrailerShow: false,
    trailerId: '',
  }
  onSearchChange(e) {
    this.setState({searchText: e.target.value})
  }

  openTrailer(trailerId) {
    this.setState({
      shouldTrailerShow: true,
      trailerId,
    })
  }

  closeTrailer() {
    this.setState({
      shouldTrailerShow: false
    })
  }

  render() {
    return (
      <Main>
        <Youtube
          ytId={this.state.trailerId}
          shouldShow={this.state.shouldTrailerShow}
          closeTrailer={this.closeTrailer}
        />
        <TopWrapper>
          <SearchBar
            width='350px'
            placeholder='Search your watchlist'
            onChange={this.onSearchChange}
            value={this.state.searchText}
          ></SearchBar>
          <Link to='/add'>
            <AddNewBtn>+ add new</AddNewBtn>
          </Link>
        </TopWrapper>
        <MoviesContainer openTrailer={this.openTrailer} />
      </Main>
    )
  }
}