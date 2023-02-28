import React from "react";

function DescriptionWithLink(props) {
    if (props.link_url) {
        return (
            <div>
                <p>{props.description}</p>
                <p>
                    <a href={props.link_url}>{props.link_url}</a>
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