import React from 'react';
import { Link } from 'react-scroll';
function Home() {
    return (
        <section id="Home" className="home">
            <div className="heading-wrapper">
                <h1>Anh D Nguyen</h1>
                <figure className="hider"></figure>

                <div className="main-button">
                    <Link to="About"
                        smooth="easeInOutCubic"
                        duration={800}>
                        <p>about me <i className="fa-solid fa-arrow-right"></i></p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home;