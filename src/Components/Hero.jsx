import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx'
import Loader from './Loader.jsx';
import { Link } from 'react-scroll';
import pizza from './Pizza.mp4';
import bass from './Bass.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Hero() {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionText, setSectionText] = useState("<Home/>")
    const [trailHeight, setTrailHeight] = useState("");
    const [showHolo, setShowHolo] = useState(false);
    const [trailTop, setTrailTop] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [eyeMove, setEyeMove] = useState(true);
    const [ray, setRay] = useState(false);
    const [rayPos, setRayPos] = useState({ left: "200px", width: "" });
    const [showDes1, setShowDes1] = useState(false);
    const [showDes2, setShowDes2] = useState(false);
    const [showDes3, setShowDes3] = useState(false);

    useEffect(() => {


        if (!isLoading) {
            //add resize listener
            window.addEventListener("resize", () => {
                setWidth(window.innerWidth);
            });


            document.addEventListener('scroll', () => {
                //offset of About section relative to top.
                let about = document.getElementById("About");
                let ball = document.getElementsByClassName("discover-ball")[0];
                let header = document.getElementsByClassName("section-smallheader")[0];
                let glasses = document.getElementsByClassName("glasses")[0];
                let eyeball = document.querySelectorAll(".eyeball");
                let eye = document.querySelectorAll(".eye");
                let project = document.getElementById("Projects");
                let gallery = document.getElementById("Gallery");
                let contact = document.getElementById("Contacts");
                //offset of about section to client's top
                let offsetAbout = about.getBoundingClientRect().top + window.scrollY;
                //off set of the discover text relative to top.
                let offsetBall = ball.getBoundingClientRect().top + window.scrollY;
                let offsetProject = project.getBoundingClientRect().top + window.scrollY;
                //offset of glasses to client's left
                let offsetGlasses = glasses.getBoundingClientRect().left;
                let offsetHeader = header.getBoundingClientRect().left;
                let offsetGallery = gallery.getBoundingClientRect().top + window.scrollY;
                let offsetContact = contact.getBoundingClientRect().top + window.scrollY;
                //calculate the trail from home to about:
                let trailHeight = offsetAbout - (offsetBall + 10);
                setTrailTop(Math.floor(offsetBall + ball.clientHeight / 1.3) + "px");

                //when reaching the contact section
                if (window.scrollY >= offsetContact - 0.7*window.innerHeight ){
                    setSectionText("<Contacts/>");
                    if (window.innerWidth < 586) {
                        glasses.style.transform = "translateY(29vh) translateX(-1rem) scale(1.2, 1.2)";
                    } else {
                        glasses.style.transform = "translateY(29vh) translateX(-0.5rem) scale(1.2, 1.2)";
                    }
                    eye.forEach((eye) => eye.style.right = "0");
                    gallery.style.opacity = "0.2";
                } 
                //when reaching the gallery
                else if (window.scrollY >= offsetGallery - 1) {
                    setSectionText("<Gallery/>");
                    gallery.style.opacity = "1";
                    if (window.innerWidth < 586) {
                        glasses.style.transform = "translateY(0) scale(0.6, 0.6)";
                    }
                    else {
                        glasses.style.transform = "translateY(0) scale(0.8, 0.8)";
                    }
                    eye.forEach((eye) => eye.style.right = "-0.9rem");
                }
                //when reaching the project section
                else if (window.scrollY >= offsetProject - 1) {
                    setSectionText("<Projects/>");
                    setEyeMove(true);
                    setRay(false);
                }
                //when almost reaching the project section
                else if (window.scrollY >= 4 * offsetProject / 5) {
                    //make eyes look to the left and lock them
                    eyeball.forEach((eyeball) => eyeball.style.transform = "rotate(180deg)");
                    setSectionText("<About/>");
                    setEyeMove(false);
                    setRay(true);
                    setRayPos({
                        left: (offsetGlasses - offsetHeader) * (offsetProject - window.scrollY) / (0.2 * offsetProject) + "px",
                        width: 50 * (offsetProject - window.scrollY) / (0.2 * offsetProject) + "px"
                    });
                }
                //when reaching the about section;
                else if (window.scrollY >= offsetAbout - 1) {
                    setSectionText("<About/>");
                    setTrailHeight(0 + "px");
                    setShowHolo(false);
                    setEyeMove(true);
                    setRay(false);
                }
                //transform heading to a ball at the button
                else if (window.scrollY >= offsetBall - 25) {
                    setSectionText("holo");
                    setTrailHeight(Math.floor(trailHeight) + "px");
                    setShowHolo(true);
                }
                //at home
                else {
                    setSectionText("<Home/>");
                    setTrailHeight("0px");
                    setShowHolo(false);
                }
            })

        }

    }, [isLoading, width]);



    function handleMouseMove(e) {
        let eyeball = document.querySelectorAll(".eyeball");

        eyeball.forEach(eye => {
            //get its position relative to the viewport by using bounding rec + the radius 
            let eyeWindowX = eye.getBoundingClientRect().left + (eye.clientWidth) / 2;
            let eyeWindowY = eye.getBoundingClientRect().top + eye.clientWidth / 2;

            //get vector coordinates of the eyeball pointing towards the cursor
            let eyeX = e.clientX - eyeWindowX;
            let eyeY = e.clientY - eyeWindowY;

            //calculate the angle that eyeball needs to rotata;
            let angle = Math.atan2(eyeY, eyeX) * (180 / Math.PI);
            eye.style.transform = "rotate(" + angle + "deg)";
        })
    }

    return (
        <>
            {isLoading ?
                <Loader
                    handleLoading={(e) => setIsLoading(e)}
                /> :
                <div onMouseMove={eyeMove ? handleMouseMove : null}>
                    <Nav
                        section={sectionText}
                        ray={ray}
                        rayPos={rayPos}
                    />

                    <section id="Home" className="home">
                        <div className="heading-wrapper">
                            <h1>Anh D Nguyen</h1>
                            <figure className="hider"></figure>
                            <h5>Web Developer, Physics Enthusiast, Photographer and Videographer</h5>
                            <figure className="hider"></figure>

                            <div className="discover-ball">
                                <div></div><div></div><div></div>
                                <Link to="About"
                                    smooth="easeInOutCubic"
                                    duration={2500}>
                                    {!showHolo ? <i className="fas fa-play"></i> : null}
                                </Link>

                            </div>

                        </div>
                    </section>

                    <section className="trail-wrapper" style={{ top: trailTop }}>

                        <figure style={{ height: trailHeight }} id="trail">
                        </figure>
                        {showHolo ? <p>About</p> : null}

                    </section>
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
                                        <a href="https://drive.google.com/file/d/11n5ZBLcPqyndpKW5k_EEZjkyrMTxngD0/view?usp=sharing">
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
                                <p className="comment-description" data-aos="fade-up" data-aos-duration="1200">
                                    / /  I like to make things that are visually pleasing in general.
                                    When not doing Physics, I study programming, and take photo/video gigs.
                                </p>
                                <p className="comment-description" data-aos="fade-up" data-aos-duration="1400">
                                    / / I am currently learning web development, with a focus on front-end. I am
                                    familiarized with the MERN stack, but I
                                    be non-hesistant to explore any new technologies!
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
                                            <a href="https://drive.google.com/file/d/11n5ZBLcPqyndpKW5k_EEZjkyrMTxngD0/view?usp=sharing">
                                                resume
                                            </a>
                                        </button>
                                    </div> : null}

                            </div>
                        </div>
                    </section>
                    <section id="Projects" className="projects">
                        <div className="row">
                            <div className="project-wrapper"
                                data-aos="fade-right" data-aos-duration="1000"
                                data-aos-anchor-placement="center-bottom">
                                <div className="project">
                                    <div className="project-picture" id="issuetracker">
                                    </div>
                                    <div className="project-des" onMouseOver={() => setShowDes1(true)} onMouseLeave={() => setShowDes1(false)}>
                                        <div className="display-bar">
                                            <h1>issueTracker</h1>
                                            <div className="icon-wrapper">
                                                <a href="https://mernissuetracker.herokuapp.com/"><i className="fas fa-globe"></i></a>
                                                <a href="https://github.com/dyannd/issue-tracker-MERN"><i className="fab fa-github"></i></a>
                                            </div>

                                        </div>
                                        <div className="text-des" style={{ opacity: showDes1 ? "1" : "0" }}>
                                            <p>A MERN stack app (with Socket.io) that I built to keep track of my projects, as well as team projects. </p>
                                            <p>
                                                Users can create a project and raise issues within that project.
                                                In addition, they can also add other people in the project
                                                as participants and assign them issues to be solved. The app also comes with real-time updates.
                                            </p>
                                            <p>
                                                I learned a lot about what a basic full-stack app involves. Most importantly, I learned how React
                                                interacts with backend APIs to gather data.
                                                I am currently developing "modification history" and notification features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-wrapper"
                                data-aos="fade-left" data-aos-duration="1000"
                                data-aos-anchor-placement="center-bottom">
                                <div className="project">
                                    <div className="project-picture lawsofmotion" id="lawsofmotion">
                                    </div>
                                    <div className="project-des" onMouseOver={() => setShowDes2(true)} onMouseLeave={() => setShowDes2(false)}>
                                        <div className="display-bar">
                                            <h1>lawsOfMotion</h1>
                                            <div className="icon-wrapper">
                                                <a href="https://dyannd.github.io/LawsOfMotion/"><i className="fas fa-globe"></i></a>
                                                <a href="https://github.com/dyannd/LawsOfMotion"><i className="fab fa-github"></i></a>
                                            </div>

                                        </div>
                                        <div className="text-des" style={{ opacity: showDes2 ? "1" : "0" }}>
                                            <p>A static web that I built to bring Newton's Laws of Motion to people in a more interactive manner, in
                                                the sense that it uses Pool to illustrate Physics. </p>
                                            <p>
                                                The tech stack used being HTML, CSS, Bootstrap, and jQuery. I learned a lot on jQuery by using it to
                                                manipulate animations, as well as using Bootstrap for mobile-friendliness.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="project-wrapper"
                            data-aos="fade-right" data-aos-duration="1000"
                            data-aos-anchor-placement="center-bottom">
                            <div className="project">
                                <div className="project-picture covidtracker" id="covidtracker">
                                </div>
                                <div className="project-des" onMouseOver={() => setShowDes3(true)} onMouseLeave={() => setShowDes3(false)}>
                                    <div className="display-bar">
                                        <h1>covidTracker</h1>
                                        <div className="icon-wrapper">
                                            <a href="https://dyannd.github.io/covidtracker/"><i className="fas fa-globe"></i></a>
                                            <a href="https://github.com/dyannd/covidtracker"><i className="fab fa-github"></i></a>
                                        </div>

                                    </div>
                                    <div className="text-des" style={{ opacity: showDes3 ? "1" : "0" }}>
                                        <p>A basic React app that I built to provide basic information of a country's pandemic situation including
                                            cases, recovered, and deaths by fetching pandemic information API from a public API </p>
                                        <p>
                                            This is my attempt to use React in my application, as well as my first practice to make requests
                                            to public APIs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section id="Gallery" className="gallery">
                        <div className="video-wrapper">
                            <div className="video-frame">
                                <video controls src={pizza}>
                                    Your browser does not support the video tag.
                                </video>
                                <div className="shadow" data-aos="color-reveal" data-aos-duration="1000"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className="text-holder" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
                                        <h1>pizza</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video-wrapper" >
                            <div className="video-frame">
                                <video controls src={bass}>
                                    Your browser does not support the video tag.
                                </video>
                                <div className="shadow" data-aos="color-reveal" data-aos-duration="1000" data-aos-delay="200"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <div className="text-holder" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">
                                        <h1 >bass</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="Contacts" className="contacts" data-aos="pop-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <div className="contact-wrapper">
                            <h1>Let's work <span>together</span></h1>
                            <div className="link-wrapper">

                                <div className="discover-ball">
                                    <div></div><div></div><div></div>
                                    <a href="https://www.linkedin.com/in/anh-nguyen-13b9ba183/">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className="discover-ball">
                                    <div></div><div></div><div></div>
                                    <a href="https://github.com/dyannd">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className="discover-ball">
                                    <div></div><div></div><div></div>
                                    <a href="mailto: anhdng8@gmail.com">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>

                            </div>
                            <p>© Anh D Nguyen 2021</p>
                        </div>
                    </section>

                </div>}
        </>
    )
}

export default Hero;