import React, { Fragment } from 'react';
import Base from '../core/Base';

const AdminDashBoard = () => {
    return (
        <Fragment>
            <Base title="AdminDashBoard Page">
                <div className="row">
                    <div className="col-md-6 offset-lg-3 text-center">
                        <p>AdminDashBoard Page</p>
                    </div>
                </div>
            </Base>
        </Fragment>
    );
}

export default AdminDashBoard;