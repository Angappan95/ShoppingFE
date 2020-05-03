import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup';
import Signin from './user/Signin';
import Profile from './user/Profile'
import UserDashBoard from './user/UserDashBoard'
import AdminDashBoard from './user/AdminDashBoard'
import PrivateRoute from './auth/helper/PrivateRoutes';
import AdminRoute from './auth/helper/AdminRoutes';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/user/signup' component={Signup} />
                <Route path='/user/signin' component={Signin} />
                <PrivateRoute path='/user/profile' component={Profile} />
                <PrivateRoute path='/user/dashboard' component={UserDashBoard} />
                <AdminRoute path='/admin/dashboard' component={AdminDashBoard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;