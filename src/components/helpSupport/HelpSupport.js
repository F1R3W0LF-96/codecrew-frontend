import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ContactList from './contactList.js/ContactList'
import "./HelpSupport.css"

function HelpSupport() {
    return (
      
            <Row className='chat-main'>
                <Col className='col-md-4 contact-list'>
                   <ContactList/>
                </Col>
                <Col className='col-md-8 contacts'>
                    right bar
                </Col>
            </Row>

    )
}

export default HelpSupport