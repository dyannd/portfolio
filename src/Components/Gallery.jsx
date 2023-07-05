import React from 'react';
function Gallery() {


    return (
        <section id="Gallery" className="gallery">
            <div className="video-wrapper">
                <div className="video-frame">
                    <iframe title="jsx-a11y/iframe-has-title" allowFullScreen="allowFullScreen" 
                        src="https://www.youtube.com/embed/BhQLT-Y0xSw">
                    </iframe>
                    <div className="animation-wrapper" data-aos="color-reveal" data-aos-duration="1000"
                        data-aos-anchor-placement="bottom-bottom">
                        <div className="text-holder" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
                            <h1>pizza</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="video-wrapper" >
                <div className="video-frame">
                    <iframe title="jsx-a11y/iframe-has-title" allowFullScreen="allowFullScreen"
                        src="https://www.youtube.com/embed/HFNMyestz4g">
                    </iframe>
                    <div className="animation-wrapper" data-aos="color-reveal" data-aos-duration="1000" data-aos-delay="200"
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