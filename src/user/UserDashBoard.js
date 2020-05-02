import React, { Fragment } from 'react';
import Base from '../core/Base';

const UserDashBoard = () => {
    return (
        <Fragment>
            <Base title="UserDashBoard Page">
                <div className="row">
                    <div className="col-md-6 offset-lg-3 text-center">
                        <p>UserDashBoard Page</p>
                    </div>
                </div>
            </Base>
        </Fragment>
    );
}

export default UserDashBoard;