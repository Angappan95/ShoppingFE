import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { signup } from '../auth/helper';


const Signup = () => {

    const [val, setVal] = useState({
        name: "",
        email: "",
        password: "",
        password_cnf: "",
        error: "",
        success: false
    })

    const { name, email, password, password_cnf, success, error } = val

    const handleChange = name => event => {
        setVal({ ...val, error: false, [name]: event.target.value })
    }


    const handleSubmit = event => {
        if (password_cnf === password) {
            event.preventDefault()
            setVal({ ...val, error: false })
            signup({ name, email, password })
                .then(data => {
                    if (data.error) {
                        setVal({ ...val, error: data.error, success: false })
                        // console.log(`Line no. 33 | ${JSON.stringify(val)}`)
                    } else {
                        setVal({
                            ...val,
                            name: "",
                            email: "",
                            password: "",
                            password_cnf: "",
                            error: "",
                            success: true
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            event.preventDefault()
            setVal({ ...val, error: "Password doesn't match" })
            // console.log(`Line no. 52 | ${JSON.stringify(val)}`)
        }
    }

    const successMsg = () => {
        return (<div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
                    New Account is added Successfully. <Link to='/user/signin'>Please login with your credentials</Link> </div>
            </div>
        </div>)
    }

    const errorMsg = () => {
        return (<div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    Unable to Signup. Please try again! {error}</div>
            </div>
        </div>)
    }

    const validatePwd = () => {
        // console.log(`Line no. 76 | ${JSON.stringify(val)}`)
        return (<div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
                    Password doesn't match. Please try again.</div>
            </div>
        </div>) 
        }


    const signupForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className="form-group">
                        <label className="text-light">Name</label>
                        <input type="text" value={name} className="form-control" placeholder="Name" onChange={handleChange("name")} />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Email</label>
                        <input type="text" value={email} className="form-control" placeholder="Email-address" onChange={handleChange("email")} />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" value={password} className="form-control" placeholder="Enter a secure password" onChange={handleChange("password")} />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Confirm Password</label>
                        <input type="password" value={password_cnf} className="form-control" placeholder="Retype your password" onChange={handleChange("password_cnf")} />
                    </form>
                    <button type="submit" className="btn btn-success btn-block" onClick={handleSubmit}>Submit</button>
                    {JSON.stringify(val)}
                </div>
            </div>
        )
    }

    return (
        <div>
            <Base title='Signup' description='User signup page'>
                {successMsg()}
                {errorMsg()}
                {validatePwd()}
                {signupForm()}
            </Base>
        </div>
    );
}

export default Signup;