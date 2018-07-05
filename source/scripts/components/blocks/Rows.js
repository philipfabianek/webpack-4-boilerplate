import React from "react";

export default (props) => {
    return (
        <div className={`block block--side ${props.top && "block--top"} ${props.only && "block--only"} ${props.dark && "block--dark"}`}>
            <h1 className="block__title">
                {props.title}
            </h1>

            <div className="block__rows">
                {
                    props.rows.map((row) => {
                        return (
                            <div className="block__row">
                                <h2>{row.title}</h2>
                                <p>{row.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
