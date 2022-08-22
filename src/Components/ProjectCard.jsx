import React, { useState } from 'react';

function ProjectCard(props) {
    const { id, title, weblink, github, descriptions } = props
    const [showDes, setShowDes] = useState(false);
    return (
        <div className="project-wrapper"
            id={id}
            data-aos="fade-right" data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom">

            <div className="project">
                <div className="picture-wrapper" style={{ filter: showDes ? "grayscale(0%)" : "grayscale(100%)" }} onMouseOver={() => setShowDes(true)} onMouseLeave={() => setShowDes(false)}>
                    <div className="project-des" >
                        <div className="icon-wrapper">
                            <h1
                                onClick={() => window.open(github, "_blank")}
                                className="github-link"
                            >
                                {'GITHUB '}
                                <i className="fa-solid fa-arrow-right"></i> </h1>
                        </div>
                    </div>
                </div>


                <h1
                    onClick={() => window.open(weblink, "_blank")}
                    className="project-title"
                >
                    {title + " "}
                    <i className="fa-solid fa-arrow-right"></i>
                </h1>
            </div>

        </div>
    )
}

export default ProjectCard;