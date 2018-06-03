import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import logo from '../../logo.png'
import { boxShadow } from '../../constants'
import isAuthenticated from '../../isAuthenticated'
import Dropdown from '../Dropdown'

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
  position: relative;
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
    },
    '/add': {
      logoTranslateX: '0px'
    }
  }
  return (
    <Wrapper>
      <Logo src={logo} translateX={routeSwitch[pathname].logoTranslateX}></Logo>
      {isAuthenticated() &&
        <ProfileMenu className='profile-menu'>
          <Dropdown
            parentClass='profile-menu'
            width='250px'
            items= {[
              { label: 'Watched Movies', onClick: () => {}},
              { label: 'Watch a random movie', onClick: () => {}},
              { label: 'Profile', onClick: () => {}},
              { label: 'Logout', onClick: () => {} }
            ]}
          />
        </ProfileMenu>
      }
    </Wrapper>
)}

export default withRouter(NavBar)
