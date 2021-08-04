import React from 'react';
import { Link } from 'react-scroll';
function Home({showHolo}){
    return (
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
    )
}

export default Home;