import React, { Component } from 'react'
import {  withApollo } from "react-apollo"
import gql from "graphql-tag"
import { Redirect } from 'react-router-dom'
import {
  Main,
  Card,
  CardHead,
  CardHeadItem,
  CardBody,
  Input,
  Button
} from './login.style'

class Login extends Component {
  constructor(props) {
    super(props)
    this.onLoginHeadClick = this.onLoginHeadClick.bind(this)
    this.onSignupHeadClick = this.onSignupHeadClick.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  state = {
    cardState: 'LOGIN',
    username: '',
    password: '',
    success: false
  }

  onLoginHeadClick() {
    if (this.state.cardState === 'LOGIN') return
    this.setState({cardState: 'LOGIN'})
  }

  onSignupHeadClick() {
    if (this.state.cardState === 'SIGNUP') return
    this.setState({cardState: 'SIGNUP'})
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value })
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  onLogin() {
    const { username, password } = this.state
    this.props.client.mutate({
      mutation: gql`mutation {
        login(username: "${username}", password: "${password}")
      }`,
    }).then(result => this.saveToken(result.data.login))
  }

  onSignUp(e) {
    const { username, password } = this.state
    this.props.client.mutate({
      mutation: gql`mutation {
        signup(username: "${username}", password: "${password}")
      }`,
    }).then(result => this.saveToken(result.data.signup))
  }

  saveToken(token) {
    localStorage.setItem('access_token', token)
    this.setState({success: true})
  }

  shakeForm() {
    const card = document.querySelector('.card')
    card.classList.add('shake')
    card.addEventListener('animationend', () => {
      card.classList.remove('shake')
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    if (this.state.username === '' || this.state.password === '') {
      this.shakeForm()
      return
    }

    if (this.state.cardState === 'LOGIN') {
      this.onLogin()
    } else {
      this.onSignUp()
    }
  }

  render() {
    if (this.state.success) {
      return <Redirect to='/' />
    }

    return (
      <Main>
        <Card>
          <CardHead>
            <CardHeadItem
              isActive={this.state.cardState === 'LOGIN'}
              onClick={this.onLoginHeadClick}
            > LOGIN
            </CardHeadItem>
            <CardHeadItem
              isActive={this.state.cardState === 'SIGNUP'}
              onClick={this.onSignupHeadClick}
            > SIGN UP
            </CardHeadItem>
          </CardHead>
          <CardBody onSubmit={this.onFormSubmit}>
            <Input
              placeholder='username'
              type='username'
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
            <Input
              placeholder='password'
              type='password'
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <Button type='submit'>
              {this.state.cardState === 'LOGIN'
                ? 'LOGIN'
                : 'SIGN UP'
              }
            </Button>
          </CardBody>
        </Card>
      </Main>
    )
  }
}

export default withApollo(Login)
