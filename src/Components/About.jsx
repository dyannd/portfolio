import React from 'react';
function About({width}) {
    return (
        <section id="About" className="about">
            <div className="picture-wrapper" data-aos="fade-right" data-aos-duration="1500"
                data-aos-anchor-placement="center-bottom" style={{ position: "relative" }}>
                <div className="profile-picture">
                </div>
                {width <= 586 ?
                    <div className="button-wrapper" data-aos="fade-right" data-aos-duration="1700"
                        data-aos-anchor-placement="center-bottom"
                        style={{ position: "absolute", left: "2rem", bottom: "0.5rem", transform: "scale(0.9,0.9)" }}>
                        <button className="button-colorfill">
                            <a
                                target="_blank" rel="noreferrer"
                                href="https://drive.google.com/file/d/11n5ZBLcPqyndpKW5k_EEZjkyrMTxngD0/view?usp=sharing">
                                resume
                            </a>
                        </button>
                    </div>
                    : null}

            </div>

            <div className="profile-description-wrapper">
                <div className="profile-description">
                    <p className="main-description" data-aos="fade-up" data-aos-duration="1000">
                        I'm Anh, a 21 years-old Physics student who loves to explore new concepts.
                        I love doing works involving problem-solving and critical-thinking.
                    </p>
                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1400">
                        / / I am currently learning web development, with a 
                        focus on the MERN stack, but I would
                        be non-hesistant to explore any new technologies!
                    </p>
                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1200">
                        / /  I like to make things that are visually pleasing in general.
                        When not doing Physics, I study programming, and take photo/video gigs.
                    </p>
                 
                    <p className="comment-description" data-aos="fade-up" data-aos-duration="1600">
                        / / What I know:
                    </p>
                    <div className="stack-icon" data-aos="fade-up" data-aos-duration="1800">
                        <div className="icon-wrapper">
                            <i className="fab fa-react"></i>
                            <p>React.js</p>
                        </div>
                        <div className="icon-wrapper">
                            <i className="fab fa-js-square"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="icon-wrapper">
                            <i className="fab fa-html5"></i>
                            <p>HTML</p>
                        </div>
                        <div className="icon-wrapper">
                            <i className="fab fa-css3-alt"></i>
                            <p>CSS</p>
                        </div>
                        <div className="icon-wrapper">
                            <i className="fab fa-python"></i>
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="stack-icon single-stack" >
                        <div className="icon-wrapper" data-aos="fade-up" data-aos-duration="2000">
                            <i className="fas fa-camera-retro"></i>
                            <p className="art-stack">
                                Lightroom, CaptureOne, Davinci Resolve
                            </p>
                        </div>
                    </div>
                    {width > 586 ?
                        <div className="stack-icon single-stack button-stack" data-aos="fade-up" data-aos-duration="2000">
                            <button className="button-colorfill">
                                <a target="_blank" rel="noreferrer"
                                    href="https://drive.google.com/file/d/11n5ZBLcPqyndpKW5k_EEZjkyrMTxngD0/view?usp=sharing">
                                    resume
                                </a>
                            </button>
                        </div> : null}

                </div>
            </div>
        </section>
    )
}

export default About;