import React, { Fragment } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import { stateToHTML } from 'draft-js-export-html'
import 'draft-js/dist/Draft.css'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.onChange = this.onChange.bind(this)
    this.focus = this.focus.bind(this)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }

  componentDidMount() {
    this.focus()
    document.querySelector('.' + this.props.containerClassName)
      .addEventListener('click', this.focus)
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  onChange(editorState) {
    this.setState({
      editorState,
    }, () => {
      console.log(stateToHTML(this.state.editorState.getCurrentContent()))
    })
  }

  focus() {
    this.editor.focus()
  }

  render() {
    const { editorState } = this.state
    return (
      <Fragment>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          ref={element => { this.editor = element }}
          placeholder="Write here..."
        />
      </Fragment>
    )
  }
}

export default MyEditor
