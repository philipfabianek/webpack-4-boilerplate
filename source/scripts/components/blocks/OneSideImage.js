import React from "react";

export default (props) => {
    return (
        <div className={`block block--side ${props.top && "block--top"} ${props.only && "block--only"} ${props.dark && "block--dark"}`}>
            <div className="block--side__content">
                <div className="block--side__right">
                    {
                        props.rows.map((row, index) => {
                            return (
                                <div className={`block__row ${index === 0 && "block__row--top"}`}>
                                    <h2>{row.title}</h2>
                                    <p>{row.description}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="block--side__left">
                    <img
                        src={props.image}
                    />
                </div>
            </div>
        </div>
    );
};
