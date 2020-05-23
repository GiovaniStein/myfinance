import React,{ useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import {useUserAuth} from '../../context/AppContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const {userAuth} = useUserAuth();


    return (
        <Route
            {...rest}
            render={props =>
                userAuth ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
            }
        />
    )
}

export default PrivateRoute;
