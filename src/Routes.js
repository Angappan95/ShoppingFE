import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup';
import Signin from './user/Signin';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/user/signup' component={Signup} />
                <Route path='/user/signin' component={Signin} />
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;