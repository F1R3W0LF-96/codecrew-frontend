import React, { useState } from 'react'
import "./ContactList.css"
import dummyImage from "../../../assets/hacker.gif"
import skullImage from "../../../assets/skull.png"
import { Col, Row } from 'react-bootstrap'
import { formatAMPM } from '../../../helpers/HelperFunctions'
import { chatStatus } from '../../../helpers/Constant'

function ContactList() {
  const [contactList, setContactList] = useState([
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.SENT
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.RECIEVED
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.READ
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.SENT
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.RECIEVED
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.READ
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.SENT
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.RECIEVED
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.READ
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.SENT
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.RECIEVED
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.READ
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.SENT
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.RECIEVED
    },
    {
      name: "Test contact",
      image: skullImage,
      date: new Date(),
      lastMessage: "message",
      lastMessageStatus: chatStatus.READ
    },
  ])

  return (
    <div className='contactList'>
      <div className='chat-header'>
        <img className='user-profile' src={dummyImage} height={30} width={30} />
      </div>
      <div className='chats'>

      
      {contactList && contactList.length > 0 ?
        contactList.map((contactDetails) => {
          return (
            <Row className='chat-wrapper'>
              <Col className="col-sm-2 user-image">
                <img className='user-chat' src={contactDetails.image} height={35} width={35} />
              </Col>

              <Col className="col-sm-10 chat-name">
                <div className='contact-main'>

                  <p className='contact-name'>
                    {contactDetails.name}
                  </p>
                  <p className='chat-time'>
                    {formatAMPM(contactDetails.date)}
                  </p>
                </div>
                <div className='last-chat'>
                  test
                  {contactDetails.lastMessageStatus === chatStatus.SENT ?
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    : contactDetails.lastMessageStatus === chatStatus.RECIEVED ?
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      : <i class="fa fa-envelope-open-o" aria-hidden="true"></i>

                  }
                </div>
              </Col>

            </Row>
          )
        })
        : "No data available"}

</div>

    </div>
  )
}

export default ContactList