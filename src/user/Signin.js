import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { signin, authenticate } from '../auth/helper';


const Signin = () => {

    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
        success: false
    })

    const {email, password} = value

    const handleChange = name => event => {
        setValue({...value, error: false, [name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        signin({email, password})
        .then(data => {
            setValue({...value, error:false, success: true})
            // authenticate(data)
        })
        .catch(error => {
            setValue({...value, error: error, success: false})
            console.log(error)
        }
        )
    }

    const signinForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form className="form-group">
                        <label className="text-light">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your mail id" onChange={handleChange("email")} />
                    </form>
                    <form className="form-group">
                        <label className="text-light">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password here" onChange={handleChange("password")}/>
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
            {signinForm()}
            </Base>
        </div>
    );
}

export default Signin;