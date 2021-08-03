import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

function Nav(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const [ray, setRay] = useState("");
    const [rayWidth, setRayWidth] = useState("");
    const [rayLeft, setRayLeft] = useState("");
    const prevPath = useRef("");
    useEffect(() => {
        setCurrentPath(props.section);
        prevPath.current = currentPath;
    }, [props.section, currentPath]);

    useEffect(() => {
        setRay(props.ray);
    }, [props.ray]);

    useEffect(() => {
        setRayWidth(props.rayPos.width);
        setRayLeft(props.rayPos.left);

    }, [props.rayPos]);



    return (
        <div className="nav" >
            <TransitionGroup className="smallheader-wrapper">
                <CSSTransition key={currentPath} classNames="merge" timeout={300}>
                    <div className="section-smallheader">
                        {currentPath === "holo" ? <figure className="holo-dot"></figure>
                            : currentPath === "ray" ? prevPath.current : currentPath}
                    </div>
                </CSSTransition>
            </TransitionGroup>
            {ray ?
                <div className="ray" style={{ left: rayLeft, width: rayWidth }}></div>
                : null}

            <div className="glasses">
                <div className="glass glass-left">
                    <div className="eyeball">
                        <div className="eye">
                        </div>
                    </div>
                </div>
                <div className="glass-connector"></div>
                <div className="glass glass-right">
                    <div className="eyeball">
                        <div className="eye">
                        </div>
                    </div>
                </div>
            </div>

            <div className={openMenu ? "slide-menu openmenu" : "slide-menu collapse "}>
                <div className="menu-list-wrapper">
                    <ul >
                        <li className={openMenu ? "slideleft" : "slideright"}
                            style={{ transitionDelay: "0" }}
                        >
                            <Link to="Home"
                                smooth="easeInOutCubic"
                                duration={2500}
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}> Home
                            </Link>
                        </li>
                        <li className={openMenu ? "slideleft" : "slideright"}
                            style={{ transitionDelay: "0.03s" }}
                        >
                            <Link to="About"
                                smooth="easeInOutCubic"
                                duration={2500}
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}> About
                            </Link>
                        </li>
                        <li className={openMenu ? "slideleft" : "slideright"}
                            style={{ transitionDelay: "0.06s" }}
                        >
                            <Link to="Projects"
                                smooth="easeInOutCubic"
                                duration={2500}
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}>
                                Projects
                            </Link>
                        </li>
                        <li className={openMenu ? "slideleft" : "slideright"}
                            style={{ transitionDelay: "0.09s" }}
                        >
                            <Link to="Gallery"
                                smooth="easeInOutCubic"
                                duration={2500}
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}>Gallery</Link>

                        </li>
                        <li className={openMenu ? "slideleft" : "slideright"}
                            style={{ transitionDelay: "0.11s" }}
                        >
                            <Link to="Contacts"
                                smooth="easeInOutCubic"
                                duration={2500}
                                onClick={() => {
                                    setOpenMenu(prev => !prev);
                                }}>Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="nav-select">
                <button className="drawer-button"
                    onClick={() => {
                        setOpenMenu(prev => !prev);
                    }}>
                    <div className="stick-figure">
                        <div className={openMenu ? "stick mid open" : "stick mid"}
                            style={{ backgroundColor: openMenu ? "#12111a" : "" }}>
                        </div>
                        <div className={openMenu ? "stick top open" : "stick top "}
                            style={{ backgroundColor: openMenu ? "#12111a" : "" }}>
                        </div>
                        <div className={openMenu ? "stick bottom open" : "stick bottom"}
                            style={{ backgroundColor: openMenu ? "#12111a" : "" }}>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Nav;