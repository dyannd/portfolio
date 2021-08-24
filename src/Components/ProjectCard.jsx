import React, { useState } from 'react';

function ProjectCard(props) {
    const { id, title, weblink, github, descriptions } = props
    const [showDes, setShowDes] = useState(false);
    return (
        <div className="project-wrapper"
            data-aos="fade-right" data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom">
            <div className="project">
                <div className="picture-wrapper">
                    <div className="project-picture" id={id}>
                    </div>
                </div>
                <div className="project-des" onMouseOver={() => setShowDes(true)} onMouseLeave={() => setShowDes(false)}>
                    <h1>{title}</h1>

                    <div className="icon-wrapper">
                        <a target="_blank" rel="noreferrer" href={weblink}><i className="fas fa-globe"></i></a>
                        <a target="_blank" rel="noreferrer" href={github}><i className="fab fa-github"></i></a>
                    </div>
                    <div className="text-des" style={{ opacity: showDes ? "1" : "0" }}>
                        {descriptions.map(des => <p>{des}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;