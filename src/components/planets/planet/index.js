import React from "react";
import DescriptionWithLink from "../shared/description_with_link";
import GrayImg from "../shared/gray_img";

function Planet(props) {
    let title;
    if (props.titleUnderline) {
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link_url={props.link_url} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <hr />
        </div>
    )
}

export default Planet;