import React, { useState } from 'react';
import Base from '../core/Base';
import { signin, authenticate, getUserToken } from '../auth/helper';
import { Redirect } from 'react-router-dom';


const Signin = () => {

    const [value, setValue] = useState({
        email: "test421@gmail.com",
        password: "123",
        error: "",
        success: false,
        didRedirect: false,
        loading: false
    })

    const { email, password, error, success, didRedirect, loading } = value
    const { user } = getUserToken()

    const handleChange = name => event => {
        setValue({ ...value, error: false, [name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValue({ ...value, error: data.error, success: false })
                } else {
                    authenticate(data, () => {
                        setValue({ ...value, didRedirect: true, loading: true, error: false, success: true })
                    })
                }
            })
            .catch(error => {
                setValue({ ...value, error: error, success: false })
                console.log(error)
            }
            )
    }

    const perfomRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard"/>
            } else {
                return <Redirect to="/user/dashboard"/>
            }
        }
    }

    const loadingMsg = () => {
        return loading && (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-center">
                    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>Login Successful. You will be redirected soon</div>
                </div>
            </div>
        )
    }

    const errMsg = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-center">
                    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>Login Failed. Please try again</div>
                </div>
            </div>
        )
    }

    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your mail id" value={email} onChange={handleChange("email")} />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password here" value={password} onChange={handleChange("password")} />
                    </form>
                    <button type="submit" className="btn btn-success btn-block" onClick={handleSubmit}>Submit</button>
                    <p>{JSON.stringify(value)}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title='Signin' description='User Signin page'>
                {loadingMsg()}
                {errMsg()}
                {perfomRedirect()}
                {signinForm()}
            </Base>
        </div>
    );
}

export default Signin;