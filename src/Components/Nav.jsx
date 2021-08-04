import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-scroll';

function Nav(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const prevPath = useRef("");
    useEffect(() => {
        setCurrentPath(props.section);
        prevPath.current = currentPath;
    }, [props.section, currentPath]);


    return (
        <div className="nav" >
            <div className="smallheader-wrapper">
                <div className="section-smallheader">
                    <p className="bracket bracket-left">{"<"}</p>
                    <TransitionGroup className="main-text">
                        <CSSTransition key={currentPath} classNames="merge" timeout={300}>
                            {currentPath === "holo" ? <figure className="holo-dot"></figure>
                                :<p >{currentPath}</p>}
                        </CSSTransition>
                    </TransitionGroup>
                    <p className="bracket bracket-right">{"/>"}</p>
                </div>
            </div>



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
        </div >
    )
}

export default Nav;