import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/green.webp';
import img2 from '../../assets/Technical.jpeg';
import Loader from '../common/loader/Loader';
import Loader2 from '../common/loader/Loader2';
import "./LandingPage.css";


const images = [
    {
        src: img1,
        altText: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        caption: 'First slide label'
    },
    {
        src: img2,
        altText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        caption: 'Second slide label'
    },
]



function LandingPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);
    const renderCarousel = () => {
        return images.map((image, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 img-fluid"
                        src={image.src}
                        alt={image.altText}
                    />
                    <Carousel.Caption>
                        <h3>{image.caption}</h3>
                        <p>{image.altText}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }
    return (
        <div >
            {loading ? <Loader /> :
                <>
                    <h1>Welcome to Code Crew</h1>
                    <Carousel>{renderCarousel()}</Carousel>
                    <Container>

                        <Row className='blog-Desc' >
                        <h1>How this all started</h1>

                            Code Crew was part of the team that created the CodeCrew website.
                            The website is a blog where you can read about the latest news and updates
                            about the company.
                        </Row>
                        <Row className='blog-Desc'>
                            The website is built with React and is hosted on Netlify. The website is
                            responsive and works on all devices. The main purpose of the website is to
                            provide a platform for the company to share their knowledge and experience.
                        </Row>
                        <Row className='blog-Desc'>
                            <h1>About Code Crew</h1>
                            <p>
                                Code Crew is a software development team that specializes in
                                creating web applications. The company is based in the India
                                and is based in the India. The company is a part of the
                                CodeCrew team.
                            </p>
                        </Row>
                        <Row className='blog-Desc'>
                            <h1>About the Team</h1>
                            <p>
                                The team is a group of software developers that are
                                passionate about creating web applications. The team is
                                based in the India and is based in the India.
                            </p>

                        </Row>

                    </Container>
                </>

            }


        </div>


    )
}

export default LandingPage