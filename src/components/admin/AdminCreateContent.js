import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';



import Colorpicker from '../common/colorPicker/Colorpicker';
import Editor from '../common/editor/Editor';


function AdminCreateContent() {

    return (
        <div>AdminCreateContent
            <Row>
                <Col xs={12}>
                   <Editor/>
                </Col>
                {/* <Col xs={6}>
                    <textarea
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    />
                </Col> */}
            </Row>

        </div>
    )
}

export default AdminCreateContent