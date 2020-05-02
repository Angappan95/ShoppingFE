import React, { Fragment } from 'react';
import Base from '../core/Base';

const Profile = () => {
    return (
        <Fragment>
            <Base title="Profile Page">
                <div className="row">
                    <div className="col-md-6 offset-lg-3 text-center">
                        <p>Profile Page</p>
                    </div>
                </div>
            </Base>
        </Fragment>
    );
}

export default Profile;