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
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategory';
import AddProduct from './admin/AddProduct';
import ManageProduct from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import UpdateCategory from './admin/UpdateCategory';


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
                <AdminRoute path="/admin/add/category" component={AddCategory} />
                <AdminRoute path="/admin/categories" component={ManageCategories} />
                <AdminRoute path="/admin/add/product" component={AddProduct} />
                <AdminRoute path='/admin/products' component={ManageProduct} />
                <AdminRoute path='/admin/product/update/:productId' component={UpdateProduct} />
                <AdminRoute path="/admin/category/update/:categoryId" component={UpdateCategory} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;