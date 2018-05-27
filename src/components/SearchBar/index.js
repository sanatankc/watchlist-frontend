import React from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  display: flex;
  height: 50px;
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
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
  color: #333;
  font-size: 18px;
  letter-spacing: 2.2px;
  &::placeholder {
    color: #c0c0c0;
  }
`

const SearchBar = props => (
  <SearchContainer {...props}>
    <IconContainer>
      <svg xmlns='http://www.w3.org/2000/svg' fill='#c0c0c0' width='36' height='36' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>
    </IconContainer>
    <SearchInput
      type='text'
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.valued}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (props.onEnter) {
            props.onEnter()
          }
        }
      }}
    >
    </SearchInput>
  </SearchContainer>
)

export default SearchBar
