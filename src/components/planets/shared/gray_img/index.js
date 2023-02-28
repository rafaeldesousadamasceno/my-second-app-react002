import React from "react";
import './style.css'

function GrayImg(props) {
    return (
        <img className={props.gray ? "gray-img" : "color-img"} srcSet={props.img_url}></img>
    )
}

export default GrayImg;