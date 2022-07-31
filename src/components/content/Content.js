import React from 'react'
import Container from 'react-bootstrap/Container';
import { Routes, Route, Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingPage from '../landingPage/LandingPage';
import VideoBlog from '../videoblog/VideoBlog';

function Content() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videoblog" element={<VideoBlog />} />
      </Routes>

        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Content