import React, { Fragment } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import { stateToHTML } from 'draft-js-export-html'
import 'draft-js/dist/Draft.css'

class MyEditor extends React.Component {
  constructor(props) {
    super(props)
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


  focus() {
    this.editor.focus()
  }

  render() {
    return (
      <Fragment>
        <Editor
          editorState={this.props.editorState}
          onChange={this.props.onEditorChange}
          handleKeyCommand={this.handleKeyCommand}
          ref={element => { this.editor = element }}
          placeholder="Write here..."
        />
      </Fragment>
    )
  }
}

export default MyEditor
