import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
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
  transition: 0.1s transform ease-in-out;
  transform: translateX(${props => props.translateX })
`

const ProfileMenu = styled.div`
  height: 35px;
  width: 35px;
  background: #222;
  border-radius: 50%;
  cursor: pointer;
`

const NavBar = props => {
  const { pathname } = props.location
  const routeSwitch = {
    '/': {
      logoTranslateX: '0px'
    },
    '/login': {
      logoTranslateX: 'calc(50vw - 86px - 20px)'
    }
  }
  console.log(pathname)
  return (
    <Wrapper>
      <Logo src={logo} translateX={routeSwitch[pathname].logoTranslateX}></Logo>
      <ProfileMenu />
    </Wrapper>
)}

export default withRouter(NavBar)
