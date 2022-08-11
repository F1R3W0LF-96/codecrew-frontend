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
import AdminCreateContent from '../admin/AdminCreateContent';

function Content() {
  return (
    <Row>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adminSection" element={<ComponentWithHeaderFooter>
          <AdminCreateContent />
        </ComponentWithHeaderFooter>} />

        <Route path="/home" element={<ComponentWithHeaderFooter>
          <LandingPage />
        </ComponentWithHeaderFooter>} />
        <Route path="/videoblog" element={<ComponentWithHeaderFooter>
          <VideoBlog />
        </ComponentWithHeaderFooter>} />
      </Routes>

    </Row>

  )
}

const ComponentWithHeaderFooter = (props) => (
  <div>
    <Header />
    <Row>

      <Col ></Col>
      <Col xs={8} style={{ minHeight: "100vh" }}>
        {props.children}
      </Col>
      <Col></Col>
    </Row>
    <Footer />
  </div>
);

export default Content