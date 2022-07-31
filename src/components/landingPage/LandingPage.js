import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/green.webp';
import img2 from '../../assets/Technical.jpeg';
import Loader from '../common/loader/Loader';
import Loader2 from '../common/loader/Loader2';


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
                        className="d-block w-100"
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
        <div>
            {loading ? <Loader/> :
            <>
            <Carousel>{renderCarousel()}</Carousel>
            <Container>
                <Row>
                    <h1>Welcome to Code Crew</h1>


                </Row>
            </Container>
            </>
            
            }
        
           
        </div>


    )
}

export default LandingPage