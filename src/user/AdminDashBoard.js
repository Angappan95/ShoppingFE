import React, { Fragment } from 'react';
import Base from '../core/Base';
import { getUserToken } from '../auth/helper';
import { Link } from 'react-router-dom';

const AdminDashBoard = () => {

    const { user: { name, email, role } } = getUserToken()

    const adminLeftSide = () => {
        return (
            <div className="card">
                <div className="card-header bg-dark text-success text-center">Admin Navigation</div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/add/category" className="nav-link text-success">Add Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="admin/category" className="nav-link text-success">Modify Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/add/product" className="nav-link text-success">Add Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/product/" className="nav-link text-success">Modify Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-success">Manage Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    // const getKeys = values => values.map(value => (
    //     <li className="list-group-item">
    //         <span className="badge badge-info">{value}</span>
    //     </li>)
    // );

    const getValues = values => values.map(value => (
        <li className="list-group-item">
            <span className="badge badge-info">{value}</span>
        </li>)
    );


    const adminRightSide = () => {
        return (
            <div className="card">
                <div className="card-header bg-dark text-success text-center">Profile Information</div>
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group">
                            <li className="list-group-item ">
                                <span className="badge badge-info text-dark text-xl-center">Name</span>
                            </li>
                            <li className="list-group-item">
                                <span className="badge badge-info">Email</span>
                            </li>
                            <li className="list-group-item">
                                <span className="badge badge-info">Role</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <ul className="list-group text-dark text-center text-lg">
                            {getValues([name, email, role])}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <Base title="Dashboard for Admin" description="Manage your items">
                <div className="jumbotron bg-light p-3">
                    <div className="row">
                        <div className="col-3">
                            {adminLeftSide()}
                        </div>
                        <div className="col-9">
                            {adminRightSide()}
                        </div>
                    </div>
                </div>
            </Base>
        </Fragment>
    );
}

export default AdminDashBoard;