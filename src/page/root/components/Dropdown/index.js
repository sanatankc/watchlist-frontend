import React from 'react'
import styled from 'styled-components'
import { boxShadow } from '../../../../constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 10px);
  right: 30%;
  box-shadow: ${boxShadow};
  background: white;
  width: 190px;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
  transition: 0.2s all ease-in-out;
  transform: ${props => props.show ? 'scale(1)': 'scale(0)'} ;
  transform-origin: top;
`
const Item = styled.div`
  width: 100%;
  padding: 10px 0;
  background: white;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: aliceblue;
  }
`

const DropDown = props => {
  console.log(props)
  return <Container show={props.show}>
    <Item>Move to watched</Item>
    <Item>Edit</Item>
    <Item>Delete</Item>
  </Container>
}


export default DropDown
