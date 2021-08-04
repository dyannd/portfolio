import React from 'react';

function Projects(props) {
    const { showDes1, setShowDes1, showDes2, setShowDes2, showDes3, setShowDes3 } = props;
    return (
        <section id="Projects" className="projects">
            <div className="project-wrapper"
                data-aos="fade-right" data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom">
                <div className="project">
                    <div className="picture-wrapper">
                        <div className="project-picture" id="issuetracker">
                        </div>
                    </div>
                    <div className="project-des" onMouseOver={() => setShowDes1(true)} onMouseLeave={() => setShowDes1(false)}>
                        <h1>issueTracker</h1>

                        <div className="icon-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://mernissuetracker.herokuapp.com/"><i className="fas fa-globe"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/dyannd/issue-tracker-MERN"><i className="fab fa-github"></i></a>
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
                    <div className="picture-wrapper">
                        <div className="project-picture lawsofmotion" id="lawsofmotion">
                        </div>
                    </div>
                    <div className="project-des" onMouseOver={() => setShowDes2(true)} onMouseLeave={() => setShowDes2(false)}>
                        <h1>lawsOfMotion</h1>

                        <div className="icon-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://dyannd.github.io/LawsOfMotion/"><i className="fas fa-globe"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/dyannd/LawsOfMotion"><i className="fab fa-github"></i></a>

                        </div>
                        <div className="text-des" style={{ opacity: showDes2 ? "1" : "0" }}>
                            <p>A static web that I built to bring Newton's Laws of Motion to people in a more interactive manner, in
                                the sense that it uses Pool to illustrate Physics. Go ahead and explore the app :)</p>
                            <p>
                                The tech stack used being HTML, CSS, Bootstrap, and jQuery. My main focus was to use CSS and jQuery to create
                                interactive animations. Furthermore, I also implemented Bootstrap for mobile-friendliness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-wrapper"
                data-aos="fade-right" data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom">
                <div className="project">
                    <div className="picture-wrapper">
                        <div className="project-picture covidtracker" id="covidtracker">
                        </div>
                    </div>
                    <div className="project-des" onMouseOver={() => setShowDes3(true)} onMouseLeave={() => setShowDes3(false)}>
                        <h1>covidTracker</h1>
                        <div className="icon-wrapper">
                            <a target="_blank" rel="noreferrer" href="https://dyannd.github.io/covidtracker/"><i className="fas fa-globe"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/dyannd/covidtracker"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="text-des" style={{ opacity: showDes3 ? "1" : "0" }}>
                            <p>A basic React app that I built to provide basic information of a country's pandemic situation including
                                cases, recovered, and deaths by fetching pandemic information API from a public API </p>
                            <p>
                                This is my first attempt to use React in my application, as well as my first practice to make requests
                                to public APIs. I mainly practiced with updating states and components when a new result from the API 
                                fetch is received, as well as using Axios to call APIs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;