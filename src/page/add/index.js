import React, { Component } from 'react'
import styled from 'styled-components'
import { themeColor, boxShadow } from '../../constants'

const Main = styled.div`
  width: 100%;
  padding: 0 50px;
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
const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  width: 350px;
  border-bottom: 2px solid #c0c0c0;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 50px;
`
const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  color: #c0c0c0;
  font-size: 18px;
  letter-spacing: 2.2px;
  &::placeholder {
    color: #c0c0c0;
  }
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
  render() {
    return (
      <Main>
        <TopWrapper>
          <SearchContainer>
            <IconContainer>
              <svg xmlns='http://www.w3.org/2000/svg' fill='#c0c0c0' width='36' height='36' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>
            </IconContainer>
            <SearchInput type='text' placeholder='Search your watchlist'></SearchInput>
          </SearchContainer>
          <AddNewBtn>+ add new</AddNewBtn>
        </TopWrapper>
      </Main>
    )
  }
}