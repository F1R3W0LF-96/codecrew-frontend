import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/green.webp";
import img2 from "../../assets/Technical.jpeg";
import Loader from "../common/loader/Loader";
import Loader2 from "../common/loader/Loader2";
import "./LandingPage.css";
import { SlickCarousel } from "./SlickCarousel";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const landingPageData = [
    {
      heading: "How this all started",
      description: `Code Crew was part of the team that created the CodeCrew website. The website is a blog where you can read about the latest news and updates about the company. The website is built with React and is hosted on Netlify. The
        website is responsive and works on all devices. The main purpose
        of the website is to provide a platform for the company to share
        their knowledge and experience.`,
    },
    {
      heading: "About Code Crew",
      description: ` Code Crew is a software development team that specializes in
      creating web applications. The company is based in the India and
      is based in the India. The company is a part of the CodeCrew
      team.`,
    },
    {
      heading: "About the Team",
      description: `The team is a group of software developers that are passionate
      about creating web applications. The team is based in the India
      and is based in the India`,
    },
  ];
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-light">Welcome to Code Crew</h1>
          <SlickCarousel />
          <Container>
            {landingPageData.map((data, idx) => {
              return (
                <>
                  <Row className="blog-Desc" key={idx}>
                    <h1 className="text-light">{data.heading}</h1>
                    <p className="text-light">{data.description}</p>
                  </Row>
                </>
              );
            })}
          </Container>
        </>
      )}
    </div>
  );
}

export default LandingPage;
