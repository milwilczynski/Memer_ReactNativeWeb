import React, {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import {UserContext} from "./UserContext";

const PrivateRoutes = ({component: Component, ...rest }) => {
    const {user} = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={props =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoutes