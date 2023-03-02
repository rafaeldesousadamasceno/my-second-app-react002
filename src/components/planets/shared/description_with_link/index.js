import React from "react";

function DescriptionWithLink(props) {
    if (props.link) {
        return (
            <div>
                <p>{props.description}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
            </div>
        )
    } else {
        return (
            <div>
                <p><strong>{props.description}</strong></p>
            </div>
        )
    }

}

export default DescriptionWithLink;