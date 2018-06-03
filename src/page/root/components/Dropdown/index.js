import React, { Component } from 'react'
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
  transform: ${props => props.isVisible ? 'scale(1)': 'scale(0)'} ;
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

class DropDown extends Component {
  constructor(props) {
    super(props)
    this.onMenuClick = this.onMenuClick.bind(this)
    this.onOutsideClick = this.onOutsideClick.bind(this)
  }

  state = {
    isVisible: false,
    shouldOutSideClick: false
  }

  onOutsideClick(event) {
    if (!this.state.shouldOutSideClick) return
    if (!this.menu.contains(event.target)) {
      this.closeDropdown()
    }
  }

  componentDidMount() {
    this.menu = document.querySelector(`.${this.props.parentClass}`)
    this.menu.addEventListener('click', this.onMenuClick)
    document.addEventListener('click', this.onOutsideClick)
  }

  onMenuClick() {
    if (this.state.isVisible) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  openDropdown() {
    this.setState({ isVisible: true, shouldOutSideClick: true })
  }

  closeDropdown() {
    this.setState({ isVisible: false, shouldOutSideClick: false })
  }

  render() {
    return (
      <Container isVisible={this.state.isVisible} innerRef={container => {this.container = container}}>
        {this.props.items.map(item => (
          <Item key={item.label} onClick={item.onClick}>{item.label}</Item>
        ))}
      </Container>
    )
  }
}


export default DropDown
