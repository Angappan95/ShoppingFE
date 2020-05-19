import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Link, Redirect } from 'react-router-dom';
import { getAllCategories, createProduct } from './helper/adminapicall';
import { getUserToken } from '../auth/helper';

const AddProduct = () => {

    const { user, token } = getUserToken()

    const [value, setValue] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        categories: [],
        category: "",
        error: "",
        success: "",
        isRedirected: false,
        isloaded: false,
        formdata: new FormData(),
        createdProduct: ""
    })

    const { name, description, price, stock, categories, category, error, success, formdata, createdProduct } = value



    const handleChange = item => event => {
        const val = item === "photo" ? event.target.files[0] : event.target.value
        formdata.set(item, val)

        setValue({ ...value, error: false, [item]: val })
    }

    const onSubmit = event => {
        event.preventDefault()

        setValue({ ...value, error: "", success: false, loading: true })
        createProduct(user._id, token, formdata).then(data => {
            if (data.error) {
                setValue({ ...value, error: data.error, success: false })
            } else {
                setValue({
                    ...value,
                    name: "",
                    description: "",
                    price: "",
                    stock: "",
                    category: "",
                    success: true,
                    loading: false,
                    isloaded: true,
                    createdProduct: data.name
                })
            }
        }).catch(error => console.log(error))
    }



    const successMsg = () => (
        <div className="alert alert-success mt-3" style={{ display: success ? "" : "none" }}>
            Product is created successfully. {createdProduct}
        </div>)

    const errorMsg = () => (
        <div className="alert alert-danger mt-3" style={{ display: error ? "" : "none" }}>
            Error with Product creation. {error}
        </div>
    )

    const createProductForm = () => (
        <form >
            <div className="font-weight-bold text-warning">Post photo</div>
            <div className="form-group">
                <label className="btn btn-block btn-success">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image"
                        placeholder="choose a file"
                    />
                </label>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("name")}
                    name="photo"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                />
            </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange("description")}
                    name="photo"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("price")}
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                />
            </div>
            <div className="form-group">
                <select
                    onChange={handleChange("category")}
                    className="form-control"
                    placeholder="Category"
                    value={category}
                >
                    <option>Select</option>
                    {categories.map((item, index) => (
                        <option key={index} value={item._id}>{item.category}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange("stock")}
                    type="number"
                    className="form-control"
                    placeholder="Stock"
                    value={stock}
                />
            </div>

            <button type="submit" onClick={onSubmit} className="btn btn-outline-success rounded">
                Create Product
          </button>
        </form>
    );

    const preload = () => {
        getAllCategories().then(data => {
            if (data.error) {
                setValue({ ...value, error: data.error })
            } else {
                setValue({ ...value, categories: data, formdata: new FormData() })
            }
        })
    }

    const timeout = () => {
        setTimeout(() => {
            console.log("Gotcha")
            return <Redirect to="/admin/dashboard"></Redirect>
        }, 5000)
    }

    useEffect(() => {
        preload()
        timeout()
    }, [])


    return (
        <Base className="container bg-info-outline p-4" title="Add Product" description="Add your new Products here!">
            <button className="btn btn-outline-secondary text-white rounded">
                <Link to="/admin/dashboard">Go Back</Link>
            </button>
            <div className="container p-4">
                {successMsg()}
                {errorMsg()}
                {createProductForm()}
            </div>
            <p className="text-white">{JSON.stringify(value)}</p>
        </Base>
    );
}

export default AddProduct;