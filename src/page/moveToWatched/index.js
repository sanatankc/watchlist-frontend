import React, { Component } from 'react'
import styled from 'styled-components'
import { Mutation, withApollo } from 'react-apollo'
import { EditorState, RichUtils } from 'draft-js'
import { Redirect } from 'react-router-dom'
import { stateToHTML } from 'draft-js-export-html'
import GET_WATCHLIST from '../../gql/getWatchlist'
import gql from 'graphql-tag'
import Editor from './Editor'
import { boxShadow, themeColor } from '../../constants'

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
  height: 80px;
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
  height: 55px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  width: calc(100vw - 20px);
  padding: 10px 0;
  box-sizing: border-box;
  .public-DraftEditor-content {
    box-sizing: border-box;
    min-height: calc(100vh - 250px);
    width: 100%;
    line-height: 1.58;
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
  align-items: center;
`
const SaveButton = styled.div`
  outline: none;
  border: none;
  background: ${themeColor};
  color: white;
  font-size: 16px;
  letter-spacing: 2.2px;
  padding: 10px 30px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${boxShadow};
`
const CancelButton = styled(SaveButton)`
  color: ${themeColor};
  background: white;
  margin-right: 20px;
`

const UPDATE_MOVIE = (tmdbId, isInWatchList, notes) => gql`mutation {
    updateUserMovie(tmdbId: "${tmdbId}", isInWatchList: ${isInWatchList}, notes: "${notes}") {
      tmdbId
      notes
      isInWatchList
    }
}`

class MoveToWatched extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    success: false,
  }
  onEditorChange = this.onEditorChange.bind(this)

  onEditorChange(editorState) {
    this.setState({ editorState })
  }

  saveAndMove = async () => {
    const { tmdbId } = this.props.location.state
    const notes = stateToHTML(this.state.editorState.getCurrentContent())
    const { client } = this.props
    const { data: { updateUserMovie } } = await client.mutate({
      mutation: UPDATE_MOVIE(tmdbId, false, notes)
    })

    try {
      const { getAddedMovies } = client.readQuery({ query: GET_WATCHLIST })
      console.log(getAddedMovies)
      const filterWatchedMovie = getAddedMovies.filter(movie => movie.tmdbId !== updateUserMovie.tmdbId)
      client.writeQuery({
        query: GET_WATCHLIST,
        data: { getAddedMovies: filterWatchedMovie}
      })
    } catch(e) {
      console.log(`Can't write to RootQuery`)
    }

    this.setState({ success: true })
  }

  render() {
    if (this.state.success) return <Redirect to='/' />
    if (!this.props.location.state) return <Redirect to='/' />

    const { name } = this.props.location.state
    return (
      <Main>
        <TitleArea>
          <Wrapper>
            <TitleTag>Move To Watched</TitleTag>
            <Hr />
            <Title>Notes/Opinion/Review about {name}</Title>
          </Wrapper>
        </TitleArea>
        <EditorContainer className='editor-container'>
          <EditorWrapper>
            <Editor
              containerClassName='editor-container'
              editorState={this.state.editorState}
              onEditorChange={this.onEditorChange}
            />
          </EditorWrapper>
        </EditorContainer>
        <Footer>
          <FooterWrapper>
            <SaveButton onClick={this.saveAndMove}>save</SaveButton>
            <CancelButton>cancel</CancelButton>
          </FooterWrapper>
        </Footer>
      </Main>
    )
  }
}

export default withApollo(MoveToWatched)
