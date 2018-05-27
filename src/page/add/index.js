import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from '../../components/SearchBar'
import MovieSearchCard from './components/MovieSearchCard'
import searchTMDB from './utils/searchTMDB'
import { themeColor, boxShadow } from '../../constants'

const Main = styled.div`
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
`
const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`
const MovieSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const MovieSearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
`
export default class AddPage extends Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onMovieSearch = this.onMovieSearch.bind(this)
  }

  state={
    searchText: '',
  }

  onSearchChange(e) {
    this.setState({ searchText: e.target.value })
  }

  async onMovieSearch(e) {
    console.log(await searchTMDB(this.state.searchText))
  }

  render() {
    return (
      <Main>
        <SearchWrapper>
          <SearchBar
            width='100%'
            maxWidth='450px'
            placeholder='Add a movie to your watchlist'
            onChange={this.onSearchChange}
            value={this.state.searchText}
            onEnter={this.onMovieSearch}
          />
        </SearchWrapper>
        <MovieSearchContainer>
          <MovieSearchWrapper>
            <MovieSearchCard />
            <MovieSearchCard />
            <MovieSearchCard />
          </MovieSearchWrapper>
        </MovieSearchContainer>
      </Main>
    )
  }
}
