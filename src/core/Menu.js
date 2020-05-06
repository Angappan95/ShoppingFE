import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, getUserToken, isAuthenticated } from '../auth/helper';


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#45CE30" }
    }
    return { color: "#F3B63A" }
}

const Menu = ({ history }) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark" style={{ borderRadius: 5 }}>
                <li className="nav nav-item">
                    <Link style={currentTab(history, '/')} className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav nav-item">
                    <Link style={currentTab(history, '/cart')} className="nav-link" to='/cart'>Cart</Link>
                </li>
                {isAuthenticated() && getUserToken().user.role === 0 && (
                    <li className="nav nav-item">
                        <Link style={currentTab(history, '/user/dashboard')} className="nav-link" to='/user/dashboard'>DashBoard</Link>
                    </li>
                )}
                {isAuthenticated() && getUserToken().user.role === 1 && (
                    <li className="nav nav-item">
                        <Link style={currentTab(history, '/admin/dashboard')} className="nav-link" to='/admin/dashboard'>Admin DashBoard</Link>
                    </li>
                )}
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav nav-item">
                            <Link style={currentTab(history, '/user/signin')} className="nav-link" to='/user/signin'>SignIn</Link>
                        </li>
                        <li className="nav nav-item">
                            <Link style={currentTab(history, '/user/signup')} className="nav-link" to='/user/signup'>SignUp</Link>
                        </li>
                    </Fragment>
                )}

                {getUserToken() && (
                    <li className="nav nav-item">
                        <span className="nav-link text-warning" onClick={() => {
                            signout(() => {
                                history.push('/')
                            })
                        }}>SignOut</span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default withRouter(Menu);