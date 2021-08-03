import React, { useEffect, useState } from 'react';
function Loader(props) {

    const [loading, setLoading] = useState(false);

    function setTimer() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            props.handleLoading(false);
        }, 7200);
  
    }
    
    return (
        <div className="loader" >
            {loading ?
                <div className="compile-text-wrapper">
                    <p>{">. Anh"}</p>
                    <div className="compile-text-mask">
                        <div className="blip top"></div>
                        <div className="blip mid"></div>
                        <div className="blip bottom"></div>
                    </div>
                </div>
                : <div className="compile-text-wrapper" onClick={setTimer}>
                <p>Touch to compile</p>
                </div>}
        </div >
    )
}
export default Loader;
