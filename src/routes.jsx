import React, { useState, useEffect } from "react";
import { Router, Link, Redirect, navigate } from '@reach/router';
import CircularProgress from '@mui/material/CircularProgress';

import { auth, onAuthStateChanged } from './firebase';

const Home = React.lazy(() => import("./views/Home"));
// const Register = React.lazy(() => import("./views/Register"));
// const Login = React.lazy(() => import("./views/Login"));
// const Dashboard = React.lazy(() => import("./views/Dashboard"));
 const NotFound = React.lazy(() => import("./views/404"));

function PrivateRoute({ component: Component, ...rest }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("user", user)
            setIsAuthenticated(!!user);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress disableShrink />
            </div>
        )
    }

    if (!isAuthenticated) {
        // Usuário não autenticado, redireciona para a página de login
        return <Redirect to="/login" noThrow />;
    }

    // Usuário autenticado, renderiza o componente privado
    return <Component {...rest} />;
}

export default function Routes() {
    return (
        <Router>
            <Home path="/" />

            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            <NotFound default />
        </Router>
    );
}