import styled, { keyframes } from 'styled-components'
import { navHeight, boxShadow, themeColor } from '../../constants'

export const shake = keyframes`
  8%, 41% {
    transform: translateX(-10px);
  }
  25%, 58% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-5px);
  }
  92% {
    transform: translateX(5px);
  }
  0%, 100% {
    transform: translateX(0);
  }
`
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - ${navHeight}px);
`
export const Card = styled.div.attrs({className: 'card'})`
  width: 470px;
  height: 440px;
  box-shadow: ${boxShadow};
  border-radius: 5px;
  overflow: hidden;
  &.shake {
    animation: ${shake} 0.4s linear;
  }
`
export const CardHead = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid ${themeColor};
`
export const CardHeadItem = styled.button`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${props => props.isActive ? themeColor : '#fff'};
  color: ${props => props.isActive ? '#fff' : themeColor};
  letter-spacing: 2.2px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &:hover {
    background: ${themeColor};
    color: #fff;
    opacity: ${props => props.isActive ? '1' : '0.8'};
  }
`
export const CardBody = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  justify-content: space-between;
  &:before,
  &:after {
    content: '';
    display: block;
  }
`
export const Input = styled.input`
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #c0c0c0;
  outline: none;
  letter-spacing: 2.2px;
  padding: 10px;
  &::placeholder {
    color: #c0c0c0;
  }
  &:focus {
    border-bottom: 2px solid ${themeColor};
    color: ${themeColor};
    &::placeholder {
      color: ${themeColor};
    }
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: #3ba6f8;
  color: white;
  font-size: 16px;
  letter-spacing: 2.2px;
  padding: 14px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 25px 0 rgba(46, 61, 73, 0.2);
`
