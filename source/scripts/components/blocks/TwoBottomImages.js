import React from "react";

export default (props) => {
    return (
        <div className={`block block--side ${props.top && "block--top"} ${props.only && "block--only"} ${props.dark && "block--dark"}`}>
            <h1 className="block__title">
                {props.title}
            </h1>

            <p className="block__description">
                {props.description1}
            </p>

            <div className="block__two-images">
                <img
                    src={props.image1}
                />

                <img
                    src={props.image2}
                />
            </div>

            <p className="block__description">
                {props.description2}
            </p>
        </div>
    );
};
