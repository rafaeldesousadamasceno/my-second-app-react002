import React from "react";

function DescriptionWithLink(props) {
    return (
        <div>
            <p>{props.description}</p>
            <p>
                <a href={props.link_url}>{props.link_url}</a>
            </p>
        </div>
    )
}

export default DescriptionWithLink;