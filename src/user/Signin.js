import React from 'react';
// import { Link } from 'react-router-dom';
import Base from '../core/Base';


const Signin = () => {

    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password password" />
                    </form>
                    <button type="submit" className="btn btn-success btn-block">Submit</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title='Signin' description='User Signin page'>
            {signinForm()}
            </Base>
        </div>
    );
}

export default Signin;