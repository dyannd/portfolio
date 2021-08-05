import React from 'react';

function Contacts() {
    return (
        <section id="Contacts" className="contacts"
            data-aos="pop-up" data-aos-offset="300"
            data-aos-duration="1000">
            <div className="contact-wrapper">
                <h1>Let's work <span>together</span></h1>
                <div className="link-wrapper">


                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anh-nguyen-13b9ba183/">
                        <i className="fab fa-linkedin-in"></i>
                    </a>


                    <a target="_blank" rel="noreferrer" href="https://github.com/dyannd">
                        <i className="fab fa-github"></i>
                    </a>


                    <a target="_blank" rel="noreferrer" href="mailto: anhdng8@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>

                </div>
                <p>© Anh D Nguyen 2021</p>
            </div>
        </section >
    )
}

export default Contacts;