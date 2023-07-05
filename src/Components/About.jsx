import { Col, Row } from 'antd';
import React from 'react';
import ava from '../styles/images/newava.jpg';
function About({ width }) {
    return (
        <Row id="About" className="about" gutter={[0, 50]}>
            <Col className="picture-wrapper" data-aos="fade-right" data-aos-duration="1500"
                xs={24} xl={10}
                data-aos-anchor-placement="center-bottom" style={{ position: "relative" }}>
                <div className="profile-picture">
                    <img src={ava} alt="" />
                    <div></div><div></div>
                </div>
            </Col>

            <Col className="profile-description-wrapper"
                xs={24} xl={14}>
                <div className="profile-description">
                    <p className="main-description" data-aos="fade-up" data-aos-duration="1000">
                        I'm Anh, a 22 years-old Engineering student who loves to explore new concepts.
                        I love doing works involving problem-solving/critical-thinking, and also make things aesthetically pleasing too {":)"}
                    </p>
                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1400">
                        // I am currently learning web development, with a
                        focus on the MERN stack, but I would
                        be non-hesistant to explore any new technologies!
                    </p>
                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1200">
                        //  I like to make things that are visually pleasing in general.
                        When not doing school stuff, I study programming, and take photo/video gigs. Also, I love keyboards!
                    </p>

                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1600">
                        // What I know:
                    </p>
                    <div className="stack-icon" data-aos="fade-up" data-aos-duration="1800">
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-react"></i>
                            <p>React.js</p>
                        </Col>
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-js-square"></i>
                            <p>Javascript</p>
                        </Col>
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-html5"></i>
                            <p>HTML</p>
                        </Col>
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-css3-alt"></i>
                            <p>CSS</p>
                        </Col>
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-python"></i>
                            <p>Python</p>
                        </Col>
                        <Col className="icon-wrapper" span={4}>
                            <i className="fab fa-java"></i>
                            <p>Java</p>
                        </Col>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default About;