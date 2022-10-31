import React from "react";
import '../../css/Slider.css';
// import './Slider_action.js';

export default function Slider() {  
    var html = <div className="slider">
                    <div className="slide">
                        <img  src="https://source.unsplash.com/random?landscape,mountain"
                        alt=""
                        />
                    </div>

                    <div className="slide">
                        <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
                    </div>

                    <div className="slide">
                        <img src="https://source.unsplash.com/random?landscape,night" alt="" />
                    </div>
                    <div className="slide">
                        <img src="https://source.unsplash.com/random?landscape,city" alt="" />
                    </div>

                    <button className="btn btn-slider btn-next" id="btn-next">{`>`}</button>
                    <button className="btn btn-slider btn-prev" id="btn-prev">{`<`}</button>
                </div>;

    return html;
}
