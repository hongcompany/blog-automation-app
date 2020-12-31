import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DramaList from 'routes/DramaList';
import DramaPosting from 'routes/DramaPosting';
import Home from 'routes/Home';
import Login from 'routes/Login';
import MyError from 'routes/MyError';
import SignUp from 'routes/SignUp';

type RouterProps = {
    isAuth: boolean
};

export default function Router({ isAuth } : RouterProps) {
    return (isAuth) ? (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/drama">
                <DramaList />
            </Route>
            <Route path="/drama/posting">
                <DramaPosting />
            </Route>
            <Route>
                <MyError />
            </Route>
        </Switch>
    ) : (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Redirect from="*" to="/" />
        </Switch>
    )
}

Router.defaultProps = {
    isAuth: false
};