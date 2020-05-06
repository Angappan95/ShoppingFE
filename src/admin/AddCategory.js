import React, { useState } from 'react';
import Base from '../core/Base';
import { getUserToken } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';


const AddCategory = () => {

    const [name, setName] = useState("Category 112")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const { user, token } = getUserToken()

    const handleChange = event => {
        setError(false)
        setName(event.target.value)

    }

    const handleSubmit = event => {
        event.preventDefault()

        // Firing backend request
        createCategory(user._id, token, {name}).then(data => {
            if (data.error) {
                setError(true)
            } else {
                setSuccess(true)
                setName("")
            }
        }
            
        )
    }

    const successMsg = () => {
        if(success) {
            return <h4 className="text-success">Category is added successfully</h4>
        }
    }

    const errorMsg = () => {
        if (error) {
            return <h4 className="text-danger">Unable to add Category</h4>
        }
    }

    const buidCategoryForm = () => (
        <form>
            <div className="form-group">
                <p className="lead">Category Name</p>
                <input type="text"
                    className="form-control my-3"
                    value={name}
                    placeholder="Category name goes here"
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <button className="btn btn-outline-success mr-4 rounded" onClick={handleSubmit}>Create Category</button>
                <button className="btn btn-outline-danger rounded">
                    <Link to="/admin/dashboard">Go Back</Link>
                </button>
            </div>
        </form>
    )

    return (
        <Base title="Add category" description="Place to add Categories for your product">
            <div className="row bg-success rounded">
                <div className="container p-2 bg-warning">
                    {successMsg()}
                    {errorMsg()}
                    {buidCategoryForm()}
                </div>
            </div>
        </Base>
    );
}



export default AddCategory;