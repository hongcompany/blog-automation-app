import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import DramaList from 'routes/DramaList';
import MyPost from 'routes/MyPost';
import Home from 'routes/Home';
import SignIn from 'routes/SignIn';
import MyError from 'routes/MyError';
import SignUp from 'routes/SignUp';
import DramaDetail from 'routes/DramaDetail';

type RouterProps = {
    isAuth: boolean
};

export default function Router({ isAuth } : RouterProps) {
    return (
        <HashRouter>
        {
            (isAuth) ? (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dramas">
                    <DramaList />
                </Route>
                <Route exact path="/dramas/:dramaId">
                    <DramaDetail />
                </Route>
                <Route path="/myposts/:postId">
                    <MyPost />
                </Route>
                <Route>
                    <MyError />
                </Route>
            </Switch>
            ) : (
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Redirect from="*" to="/" />
            </Switch>
            )
        }
        </HashRouter>
    )
}

Router.defaultProps = {
    isAuth: false
};