import React from 'react';
import pizza from './Pizza.mp4';
import bass from './Bass.mp4';
function Gallery() {
    return (
        <section id="Gallery" className="gallery">
            <div className="video-wrapper">
                <div className="video-frame">
                    <video controls src={pizza}>
                        Your browser does not support the video tag.
                    </video>
                    <div className="shadow" data-aos="color-reveal" data-aos-duration="1000"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="text-holder" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
                            <h1>pizza</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-wrapper" >
                <div className="video-frame">
                    <video controls src={bass}>
                        Your browser does not support the video tag.
                    </video>
                    <div className="shadow" data-aos="color-reveal" data-aos-duration="1000" data-aos-delay="200"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="text-holder" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">
                           <h1>bass</h1> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;