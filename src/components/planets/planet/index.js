import React from "react";
import DescriptionWithLink from "../shared/description_with_link";
import GrayImg from "../shared/gray_img";

function Planet(props) {
    return (
        <div>
            <h4>{props.nome}</h4>
            <DescriptionWithLink description={props.description} link_url={props.link_url}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;