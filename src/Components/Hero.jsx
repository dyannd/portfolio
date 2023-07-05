import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import About from './About';
import Contacts from './Contacts';
import Home from './Home';
import Loader from './Loader.jsx';
import Nav from './Nav.jsx';
import Projects from './Projects';

function Hero() {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionText, setSectionText] = useState("Home")
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (!isLoading) {
            //add resize listener
            window.addEventListener("resize", () => {
                setWidth(window.innerWidth);
            });

            //query for the sections
            let about = document.getElementById("About");
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

                //when reaching the PROJECT section
                else if (window.scrollY >= offsetProject - 1) {
                    setSectionText("Projects");
                }

                //close the brackets getting past ABOUT
                else if (window.scrollY >= 4 * offsetProject / 5) {
                    setSectionText("");
                }

                //when reaching the about section;
                else if (window.scrollY >= offsetAbout - 1) {
                    setSectionText("About");
                }

                //SCROLLING PAST HOME SECTION
                else if (window.scrollY >= 4 * offsetAbout / 5) {
                    setSectionText("");
                }
                //at home
                else {
                    setSectionText("Home");
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
                        <Home />
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