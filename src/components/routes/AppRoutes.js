import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import AdminCreateContent from '../admin/AdminCreateContent';
import ArticleList from '../article/ArticleList';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LandingPage from '../landingPage/LandingPage';
import Main from '../loginSignup/Main';
import VideoBlog from '../videoblog/VideoBlog';

function AppRoutes() {
  return (
  <Row>
         <Routes>
        <Route path="/login" element={<Main />} />
        <Route path="/adminSection" element={<ComponentWithHeaderFooter>
          <AdminCreateContent />
        </ComponentWithHeaderFooter>} />

        <Route path="/article-list" element={<ComponentWithHeaderFooter>
          <ArticleList />
        </ComponentWithHeaderFooter>} />

        <Route path="/" element={<ComponentWithHeaderFooter>
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
  

export default AppRoutes