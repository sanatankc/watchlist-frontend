import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from '../../components/SearchBar'
import MovieSearchCard from './components/MovieSearchCard'
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

export default class AddPage extends Component {
  constructor(props) {
    super(props)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  state={
    searchText: '',
  }

  onSearchChange(e) {
    this.setState({ searchText: e.target.value })
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
          />
        </SearchWrapper>
        <MovieSearchCard />
      </Main>
    )
  }
}
