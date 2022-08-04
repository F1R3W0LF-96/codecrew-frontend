import React from 'react'
import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingPage from '../landingPage/LandingPage';
import VideoBlog from '../videoblog/VideoBlog';
import Main from '../loginSignup/Main';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Content() {
  return (
    <Row>
    
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/home" element={<ComponentWithHeaderFooter>
            <LandingPage />
          </ComponentWithHeaderFooter>} />
          <Route path="/videoblog" element={<VideoBlog />} />
        </Routes>

    </Row>

  )
}

const ComponentWithHeaderFooter = (props) => (
  <div>
    <Header />
    <Col></Col>
      <Col xs={8}>
    {props.children}
    </Col>
    <Col></Col>
    <Footer />
  </div>
);

export default Content