import React from "react";
import DescriptionWithLink from "../shared/description_with_link";
import GrayImg from "../shared/gray_img";

function Planet(props) {
    /* const names = ['Lua', 'MySQL', 'Java', 'JS']
    const satelites = names.map((elemento) =>
        <li>Satélite {elemento}</li>
    )*/


    let title;
    if (props.titleUnderline) {
        title = <h4><u>{props.nome}</u></h4>
    } else {
        title = <h4>{props.nome}</h4>
    }

    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link_url={props.link_url} />
            <GrayImg img_url={props.img_url} gray={props.gray} />

            <h4>Satélites: </h4>
            <ul>
                {['Lua', 'MySQL', 'Java', 'JS'].map((elemento) =>
                    <li>Satélite {elemento}</li>
                )}
            </ul>

        </div>
    )
}

export default Planet;