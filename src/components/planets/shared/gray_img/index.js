import React from "react";
import './style.css'

function GrayImg(props) {
    return (
        <img className="gray-img" srcSet={props.img_url}></img>
    )
}

export default GrayImg;