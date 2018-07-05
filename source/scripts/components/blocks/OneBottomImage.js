import React from "react";

export default (props) => {
    return (
        <div className={`block block--side ${props.top && "block--top"} ${props.only && "block--only"} ${props.dark && "block--dark"}`}>
            <h1 className="block__title">
                {props.title}
            </h1>

            <p className="block__description">
                {props.description}
            </p>

            <img
                className="block__one-image"
                src={props.image}
            />
        </div>
    );
};
