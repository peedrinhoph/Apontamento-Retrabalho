import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RetrabForm from './pages/RetrabForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    component={RetrabForm}
                    exact
                />
            </Switch>
        </BrowserRouter>
    )
}