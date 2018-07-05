import React from "react";

import { resetElementObjects, addElement, onScroll } from "./../scrollTransition";

import Ice from "./../../../assets/ice.jpg";

export default class Dashboard extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div className="dashboard">

                <h1 className="dashboard__title">Dashboard</h1>

                <img
                    src={Ice}
                />

            </div>
        )
    };
};
