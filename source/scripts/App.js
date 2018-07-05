import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";

export const App = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Dashboard} />
        <Route component={Dashboard} />
    </Switch>
);
