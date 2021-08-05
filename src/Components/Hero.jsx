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
AOS.init();
function Hero() {
    const [isLoading, setIsLoading] = useState(true);
    const [sectionText, setSectionText] = useState("Home")
    const [trailHeight, setTrailHeight] = useState("");
    const [showHolo, setShowHolo] = useState(false);
    const [trailTop, setTrailTop] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [showDes1, setShowDes1] = useState(false);
    const [showDes2, setShowDes2] = useState(false);
    const [showDes3, setShowDes3] = useState(false);

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
            let gallery = document.getElementById("Gallery");
            let contact = document.getElementById("Contacts");

            document.addEventListener('scroll', () => {
                //offset of the sections to the client's top
                let offsetAbout = about.getBoundingClientRect().top + window.scrollY;
                let offsetBall = ball.getBoundingClientRect().top + window.scrollY;
                let offsetProject = project.getBoundingClientRect().top + window.scrollY;
                let offsetGallery = gallery.getBoundingClientRect().top + window.scrollY;
                let offsetContact = contact.getBoundingClientRect().top + window.scrollY;

                //calculate the trail from home to about:
                let trailHeight = offsetAbout - (offsetBall + 10);
                setTrailTop(Math.floor(offsetBall + ball.clientHeight / 1.3) + "px");

                //when reaching the contact section
                if (window.scrollY >= offsetContact - 0.6 * window.innerHeight) {
                    transformBracket(0, 0);
                    header.style.width = "6.8rem";
                    setSectionText("Contacts");
                    //bring the glasses above the contact text
                    if (window.innerWidth < 586) {
                        glasses.style.transform = "translateY(29vh) translateX(0.5vh) scale(1.2, 1.2)";
                    } else {
                        glasses.style.transform = "translateY(29vh) translateX(1.2vh) scale(1.2, 1.2)";
                    }
                    //make the eye looks to the center
                    eye.forEach((eye) => eye.style.right = "0");
                    //make opacity of gallery low
                    gallery.style.opacity = "0.2";
                }
                //close the brackets
                else if (window.scrollY >= offsetContact - 0.8 * window.innerHeight) {
                    transformBracket("2.3rem", "-2.3rem");
                    header.style.width = "6.5rem";
                    setSectionText("");
                    //bring the glasses back to the navbar
                    if (window.innerWidth < 586) {
                        glasses.style.transform = "translateY(0) scale(0.6, 0.6)";
                    }
                    else {
                        glasses.style.transform = "translateY(0) scale(0.8, 0.8)";
                    }
                }
                //when reaching the gallery
                else if (window.scrollY >= offsetGallery - 1) {
                    transformBracket(0, 0);
                    setSectionText("Gallery");
                    //take glasses back to original pos
                    if (window.innerWidth < 586) {
                        glasses.style.transform = "translateY(0) scale(0.6, 0.6)";
                    }
                    else {
                        glasses.style.transform = "translateY(0) scale(0.8, 0.8)";
                    }
                    //make the eye looks normally
                    eye.forEach(eye => eye.style.right = "-0.9rem");
                    //make opacity of gallery back to normal
                    gallery.style.opacity = "1";
                }
                //close the brackets
                else if (window.scrollY >= 4 * offsetGallery / 5) {
                    transformBracket("2.3rem", "-2.3rem");
                    setSectionText("");
                }
                //when reaching the project section
                else if (window.scrollY >= offsetProject - 1) {
                    transformBracket(0, 0);
                    header.style.width = "6.5rem";
                    setSectionText("Projects");
                }
                //close the brackets
                else if (window.scrollY >= 4 * offsetProject / 5) {
                    transformBracket("1.8rem", "-1.8rem");
                    header.style.width = "5.5rem";
                    setSectionText("");
                }
                //when reaching the about section;
                else if (window.scrollY >= offsetAbout - 1) {
                    transformBracket(0, 0);
                    setSectionText("About");
                    //set trail back to none and hide the holo ball
                    setTrailHeight(0 + "px");
                    setShowHolo(false);
                }
                //transform heading to a ball at the button
                else if (window.scrollY >= offsetBall - 25) {
                    transformBracket(0, 0);
                    //make the holo appears instead of "HOme"
                    setSectionText("holo");
                    setShowHolo(true);
                    //make the "path" appear
                    setTrailHeight(Math.floor(trailHeight) + "px");
                }
                //close the brackets
                else if (window.scrollY >= offsetBall - 125) {
                    setSectionText("");
                    transformBracket("1.8rem", "-1.8rem");
                }
                //at home
                else {
                    setSectionText("Home");
                    transformBracket(0, 0);
                    setTrailHeight("0px");
                    setShowHolo(false);
                }
            })

        }

    }, [isLoading, width]);

    function transformBracket(left, right) {
        document.getElementsByClassName("bracket-left")[0].style.transform = "translateX(" + left + ")";
        document.getElementsByClassName("bracket-right")[0].style.transform = "translateX(" + right + ")";
    }

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
                    <Nav section={sectionText} />
                    <Home showHolo={showHolo} />
                    <section className="trail-wrapper" style={{ top: trailTop }}>
                        <figure style={{ height: trailHeight }} id="trail">
                        </figure>
                        {showHolo ? <p>About</p> : null}
                    </section>
                    <About width={width} />
                    <Projects
                        showDes1={showDes1}
                        showDes2={showDes2}
                        showDes3={showDes3}
                        setShowDes1={setShowDes1}
                        setShowDes2={setShowDes2}
                        setShowDes3={setShowDes3}
                    />
                    <Gallery />
                    <Contacts />
                </div>}
        </>
    )
}

export default Hero;