import React from "react";

export default (props) => {
    return (
        <div className={`block block--side ${props.top && "block--top"} ${props.only && "block--only"} ${props.dark && "block--dark"}`}>
            <h1 className="block__title">
                Our team
            </h1>

            <div className="block__rows">
                {
                    props.rows.map((row) => {
                        return (
                            <div className="block__row block__row--icon">
                                <img src={row.icon} />
                                <div className="block__row--icon__right">
                                    <h2>{row.title}</h2>
                                    <p>{row.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
