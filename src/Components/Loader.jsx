import React, { useEffect } from 'react';
function Loader(props) {


    useEffect(()=> {
        setTimeout(() => {
            props.handleLoading(false);
        }, 5200);
    });
    
    return (
        <div className="loader" >
                <div className="compile-text-wrapper">
                    <p>{">. Anh"}</p>
                    <div className="compile-text-mask">
                        <div className="blip top"></div>
                        <div className="blip mid"></div>
                        <div className="blip bottom"></div>
                    </div>
                </div>
        </div >
    )
}
export default Loader;
