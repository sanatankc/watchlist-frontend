import React, { Component } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`
const Youtube = styled.iframe`
  width: 640px;
  height: 360px;
  border: none;
`

export default class extends Component {
  render() {
    return (
      this.props.shouldShow
        ? <Overlay>
            <Youtube
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${this.props.ytId}?autoplay=1`}
              frameborder="0"
              allowFullScreen
              tabIndex="0"
            />
          </Overlay>
        : null
    )
  }
}
