import React, { useState, useEffect } from 'react';
import Nav from './Nav.jsx'
import Loader from './Loader.jsx';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Gallery from './Gallery';
import Contacts from './Contacts';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionText, setSectionText] = useState("Home")
    const [trailHeight, setTrailHeight] = useState("");
    const [showHolo, setShowHolo] = useState(false);
    const [trailTop, setTrailTop] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (!isLoading) {
            //add resize listener
            window.addEventListener("resize", () => {
                setWidth(window.innerWidth);
            });

            //query for the sections
            let about = document.getElementById("About");
            let ball = document.getElementsByClassName("discover-ball")[0];
            let header = document.getElementsByClassName("smallheader-wrapper")[0];
            let glasses = document.getElementsByClassName("glasses")[0];
            let eye = document.querySelectorAll(".eye");
            let project = document.getElementById("Projects");
            let contact = document.getElementById("Contacts");

            document.addEventListener('scroll', () => {
                //offset of the sections to the client's top
                let offsetAbout = about.getBoundingClientRect().top + window.scrollY;
                let offsetProject = project.getBoundingClientRect().top + window.scrollY;
                let offsetContact = contact.getBoundingClientRect().top + window.scrollY;

                //when reaching the contact section
                if (window.scrollY >= offsetContact - 0.5 * window.innerHeight) {
                    setSectionText("Contacts");
                    project.style.opacity = "0.1";
                }

                //close the brackets getting past PROJECT
                else if (window.scrollY >= 4 * offsetContact / 5) {
                    setSectionText("");
                    project.style.opacity = "1";
                }

                //when reaching the PROJECT section (formerly Gallery)
                else if (window.scrollY >= offsetProject - 1) {
                    setSectionText("Projects");
                }

                //close the brackets getting past ABOUT
                else if (window.scrollY >= 4 * offsetProject / 5) {
                    // transformBracket("1.8rem", "-1.8rem");
                    // header.style.width = "5.5rem";
                    setSectionText("");
                }

                //when reaching the about section;
                else if (window.scrollY >= offsetAbout - 1) {
                    // transformBracket(0, 0);
                    setSectionText("About");
                    //set trail back to none and hide the holo ball
                    setTrailHeight(0 + "px");
                    setShowHolo(false);
                }

                //SCROLLING PAST HOME SECTION
                else if (window.scrollY >= 4 * offsetAbout / 5) {
                    setSectionText("");
                    // transformBracket("1.8rem", "-1.8rem");
                }
                //at home
                else {
                    setSectionText("Home");
                    // transformBracket(0, 0);
                    setTrailHeight("0px");
                    setShowHolo(false);
                }
            })

        }

    }, [isLoading, width]);
    //start ANIMATE ON SCROLL LIBRARY
    useEffect(() => {

        AOS.init({
            // Global settings:
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            once: true, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
    }, [])

    //make the eyes follow the cursor
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
                <div onMouseMove={handleMouseMove}>
                    <Nav section={sectionText} width={width} />
                    <div className="hero-contents">
                        <Home showHolo={showHolo} />
                        {/* <section className="trail-wrapper" style={{ top: trailTop }}>
                            <figure style={{ height: trailHeight }} id="trail">
                            </figure>
                            {showHolo ? <p>About</p> : null}
                        </section> */}
                        <About width={width} />
                        <Projects />
                        {/* <Gallery /> */}
                        <Contacts />
                    </div>
                </div>}
        </>
    )
}

export default Hero;