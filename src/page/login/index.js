import React, { Component } from 'react'
import styled from 'styled-components'
import { navHeight, boxShadow, themeColor } from '../../constants'

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - ${navHeight}px);
`
const Card = styled.div`
  width: 470px;
  height: 440px;
  box-shadow: ${boxShadow};
  border-radius: 5px;
  overflow: hidden;
`
const CardHead = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${themeColor};
`
const CardHeadItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${props => props.isActive ? themeColor : '#fff'};
  color: ${props => props.isActive ? '#fff' : themeColor};
  letter-spacing: 2.2px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: ${themeColor};
    color: #fff;
    opacity: ${props => props.isActive ? '1' : '0.8'};
  }
`


class Login extends Component {
  constructor(props) {
    super(props)
    this.onLoginHeadClick = this.onLoginHeadClick.bind(this)
    this.onSignupHeadClick = this.onSignupHeadClick.bind(this)
  }

  state = {
    cardState: 'LOGIN'
  }

  onLoginHeadClick() {
    if (this.state.cardState === 'LOGIN') return
    this.setState({cardState: 'LOGIN'})
  }

  onSignupHeadClick() {
    if (this.state.cardState === 'SIGNUP') return
    this.setState({cardState: 'SIGNUP'})
  }

  render() {
    return (
      <Main>
        <Card>
          <CardHead>
            <CardHeadItem isActive={this.state.cardState === 'LOGIN'} onClick={this.onLoginHeadClick}>Login</CardHeadItem>
            <CardHeadItem isActive={this.state.cardState === 'SIGNUP'} onClick={this.onSignupHeadClick}>Signup</CardHeadItem>
          </CardHead>
        </Card>
      </Main>
    )
  }
}

export default Login
