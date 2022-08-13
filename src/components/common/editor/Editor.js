import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "./Editor.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button } from "react-bootstrap";
import axios from "axios";


function ContentEditor() {
  const [description, setDescription] = useState({
    htmlValue: "<p></p>\n",
    editorState: EditorState.createEmpty()
  });
  const [title, setTitle] = useState("");
  const [artdescription, setArtDescription] = useState("");
const [topic, setTopic] = useState("");
const [subtopic, setSubtopic] = useState("");



  const onEditorStateChange = editorValue => {
    const editorStateInHtml = draftToHtml(
      convertToRaw(editorValue.getCurrentContent())
    );

    setDescription({
      htmlValue: editorStateInHtml,
      editorState: editorValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
    console.log(description.htmlValue);
    const payload = {
      "title": title,
      "topic": topic,
      "subtopic": subtopic,
      "description": artdescription,
      "body": description.htmlValue,
      "createdBy": "62f772ee48774d641e2cb2e4"
    }
    axios.post('https://ad08-2409-4056-99-ed86-526-be8c-50b8-9cb1.ngrok.io/api/article', payload).then(res => {
      console.log(res);
    }
    ).catch(err => {
      console.log(err);
    }
    );
  }
  return (

    <div>
      <input type="text" name="title" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" name="topic" placeholder="Topic" onChange={(e)=>setTopic(e.target.value)} />
      <input type="text" name="subtopic" placeholder="Subtopic" onChange={(e)=>setSubtopic(e.target.value)} />
      <input type="text" name="description" placeholder="Description" onChange={(e)=>setArtDescription(e.target.value)} />


      <Editor
        toolbarHidden={false}
        editorState={description.editorState}
        onEditorStateChange={onEditorStateChange}
        placeholder="hello placeholder"
      />
      <textarea
        disabled
        value={description.htmlValue}

      >
      </textarea>
      <br />
      <Button onClick={(e) => {
        handleSubmit(e);
      }}>Submit Article
      </Button>
    </div>
  )
}

export default ContentEditor