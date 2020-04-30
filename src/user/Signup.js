import React from 'react';
// import { Link } from 'react-router-dom';
import Base from '../core/Base';


const Signup = () => {
    const signupForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className="form-group">
                        <label className="text-light">Name</label>
                        <input type="text" className="form-control" />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" placeholder="Enter a secure password" />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Retype your password"/>
                    </form>
                    <button type="submit" className="btn btn-success btn-block">Submit</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title='Signup' description='User signup page'>
                {signupForm()}
            </Base>
        </div>
    );
}

export default Signup;