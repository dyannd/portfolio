import React from 'react';
import ProjectCard from './ProjectCard';
function Projects() {
    return (
        <section id="Projects" className="projects">
            <ProjectCard
                title="hcmusRobotics"
                id="hcmusrobotics"
                weblink="https://hcmusrobotics.netlify.app/"
                github="https://github.com/dyannd/hcmusrobotics"
                descriptions={[
                    "A landing page that I made for University of Science's Robotics & Iot lab. Their current website looks bland (https://ailab.hcmus.edu.vn/riot) and is only a child of AI-LAB website" +
                    ", so I made them a one-page website. I believe this was a good practice for my design eyes.",
                    "I used React and SCSS for the main stuffs. For the scrubbing animations, I practiced using GSAP's ScrollTrigger, which works very well with React.",
                    "Another improvement I want to make in the future is to implement this website with GatsbyJs, for better UX."
                ]}
            />
            <ProjectCard
                title="issueTracker"
                id="issuetracker"
                weblink="https://mernissuetracker.herokuapp.com/"
                github="https://github.com/dyannd/issue-tracker-MERN"
                descriptions={[
                    "A MERN stack app (with Socket.io) that I built to keep track of my projects, as well as team projects.",
                    "  Users can create a project and raise issues within that project. In addition, they can also add other people in the project as participants and assign them issues to be solved.The app also comes with real-time updates.",
                    "I learned a lot about what a basic full-stack app involves. Most importantly, I learned how React interacts with backend APIs to gather data. I am currently developing history and notification features."
                ]}
            />

            <ProjectCard
                title="lawsOfMotion"
                id="lawsofmotion"
                weblink="https://dyannd.github.io/LawsOfMotion/"
                github="https://github.com/dyannd/LawsOfMotion"
                descriptions={[
                    "A static web that I built to bring Newton's Laws of Motion to people in a more interactive manner, in the sense that it uses Pool to illustrate Physics. Go ahead and explore the app",
                    "  The tech stack used being HTML, CSS, Bootstrap, and jQuery. My main focus was to use CSS and jQuery to create interactive animations (i.e. The interaction between of the pool stick and the balls) . Furthermore, I also implemented Bootstrap for mobile-friendliness."
                ]}
            />

            <ProjectCard
                title="covidTracker"
                id="covidtracker"
                weblink="https://dyannd.github.io/covidtracker/"
                github="https://github.com/dyannd/covidtracker"
                descriptions={[
                    "A basic React app that I built to provide basic information of a country's pandemic situation including cases, recovered, and deaths by fetching pandemic information from a public API",
                    "This is my first attempt to use React in my application, as well as my first practice to make requests to public APIs.I mainly practiced with updating states and components when a new result from the API"
                    + "fetch is received, as well as using Axios to call APIs.",
                    "  Another great things that I learned was to implement transition between React states using Transition Group library."
                ]}
            />
        </section >
    )
}

export default Projects;