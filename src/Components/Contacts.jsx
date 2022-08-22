import React from 'react';

function Contacts() {
    return (
        <section id="Contacts" className="contacts"
            data-aos="pop-up" data-aos-offset="300"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000">
            <div className="contact-wrapper">
                <h1>Let's work <span>together</span></h1>
                <div className="link-wrapper">


                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anh-nguyen-13b9ba183/">
                        {'LinkedIn '} <i className="fa-solid fa-arrow-right"></i>
                    </a>


                    <a target="_blank" rel="noreferrer" href="https://github.com/dyannd">
                        {'Github '} <i className="fa-solid fa-arrow-right"></i>
                    </a>


                    <a target="_blank" rel="noreferrer" href="mailto:anhdng8@gmail.com">
                        {'E-mail '} <i className="fa-solid fa-arrow-right"></i>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1GDmu2euJoRUbRYr_YZTY4VTh0qqEncVD/view?usp=sharing">
                        {'Resume '} <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>
                <p>© Anh D Nguyen 2022</p>
            </div>
        </section >
    )
}

export default Contacts;