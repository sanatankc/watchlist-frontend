import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter, Redirect, Link } from 'react-router-dom'
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

class  NavBar extends Component {
  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout() {
    localStorage.setItem('access_token', '')
    this.props.history.push('/login')
  }

  render()  {
    const { pathname } = this.props.location
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
        <Link to='/'>
          <Logo src={logo} translateX={routeSwitch[pathname].logoTranslateX}></Logo>
        </Link>
        {isAuthenticated() &&
          <ProfileMenu className='profile-menu'>
            <Dropdown
              parentClass='profile-menu'
              width='250px'
              items= {[
                { label: 'Watched Movies', onClick: () => {}},
                { label: 'Watch a random movie', onClick: () => {}},
                { label: 'Profile', onClick: () => {}},
                { label: 'Logout', onClick: this.onLogout }
              ]}
            />
          </ProfileMenu>
        }
      </Wrapper>
    )
  }
}

export default withRouter(NavBar)
