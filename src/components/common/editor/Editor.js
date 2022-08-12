import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function ContentEditor() {
    const [description, setDescription] = useState({
        htmlValue: "<p></p>\n",
        editorState: EditorState.createEmpty()
      });
    
      const onEditorStateChange = editorValue => {
        const editorStateInHtml = draftToHtml(
          convertToRaw(editorValue.getCurrentContent())
        );
    
        setDescription({
          htmlValue: editorStateInHtml,
          editorState: editorValue
        });
      };
  return (

    <div>
        <Editor
        toolbarHidden={false}
        editorState={description.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="hello placeholder"
      />
    </div>
  )
}

export default ContentEditor