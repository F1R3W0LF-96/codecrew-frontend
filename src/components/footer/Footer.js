import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Footer.css"

function Footer() {
    return (
        <>
            <div class="footer-bottom">
                <div class="footer-content">
                    <h3>Code Crew Developer</h3>
                    <p>
                        We are a team of developers who are passionate about creating beautiful and functional websites.

                    </p>

                    <ul class="socials">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                    </ul>
                    {/* <!-- add all information --> */}
                    </div>
                    <p>copyright &copy;2022 Code Crew All Rights Reserved.<br /><a href="#">Code Crew developer</a>  </p>
                    <div class="footer-menu">
                        <ul class="f-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>

        </>
    )
}

export default Footer