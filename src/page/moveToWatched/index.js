import React, { Component } from 'react'
import styled from 'styled-components'
import Editor from './Editor'
import { boxShadow } from '../../constants'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 60px);
`
const TitleArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`
const Wrapper = styled.div`
  max-width: 700px;
  width: calc(100% - 20px);
  height: 100%;
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
  box-shadow: ${boxShadow};
`
const EditorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  overflow: scroll;
`
const EditorWrapper = styled.div`
  max-width: 700px;
  width: calc(100vw - 20px);
  padding: 10px 0;
  box-sizing: border-box;
  .public-DraftEditor-content {
    box-sizing: border-box;
    min-height: calc(100vh - 210px);
    width: 100%;
  }
`
const TitleTag = styled.div`
  margin-top: 20px;
  color: #837878;
  font-size: 14px;
`
const Hr = styled.div`
  width: 30px;
  height: 3px;
  background: #837878;
  border-radius: 10px;
  margin-top: 2px;
`
const Title = styled.div`
  margin-top: 10px;
  font-size: 20px;
`
const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row-reverse;
`

class MoveToWatched extends Component {
  render() {
    return (
      <Main>
        <TitleArea>
          <Wrapper>
            <TitleTag>Move To Watched</TitleTag>
            <Hr />
            <Title>Notes/Opinion/Review about The Godfather</Title>
          </Wrapper>
        </TitleArea>
        <EditorContainer className='editor-container'>
          <EditorWrapper>
            <Editor containerClassName='editor-container' />
          </EditorWrapper>
        </EditorContainer>
        <Footer>
          <FooterWrapper>
            <div>
              <button>save</button>
              <button>cancel</button>
            </div>
          </FooterWrapper>
        </Footer>
      </Main>
    )
  }
}

export default MoveToWatched
