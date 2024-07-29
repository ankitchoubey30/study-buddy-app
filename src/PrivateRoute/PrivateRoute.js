import React from "react";
import { Route, Redirect } from "react-router";

export default function PrivateRoute({component:component, ...rest}) {

    const isAuthenticated = localStorage.getItem("isLoggedIn");

    function routingConfig() {
        if (isAuthenticated) {
            return <Route {...rest}  component={component}></Route>;
        } else {
           return <Redirect to = {"/login"}/>
        }
    }
    return routingConfig();
}