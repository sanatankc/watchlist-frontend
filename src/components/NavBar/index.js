import React from 'react'
import styled from 'styled-components'
import logo from '../../logo.png'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  width: 100vw;
  box-shadow: 5px 2px 15px 0 rgba(46,61,73,.1);
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
