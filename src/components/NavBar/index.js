import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.png'
import { boxShadow } from '../../constants'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  width: 100vw;
  box-shadow: ${boxShadow};
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
`
const Logo = styled.img`
  height: 25px;
  transition: -0.3s transform ease-in-out;
  transform: translateX(${props => props.center ? 'calc(50vw - 86px - 20px)' : '0px' })
`

const NavBar = props => {
  return (
    <Wrapper>
      <Logo src={logo} center></Logo>
    </Wrapper>
)}

export default NavBar
