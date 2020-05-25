import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { getAllProducts, deleteProduct } from './helper/adminapicall';
import { Link } from 'react-router-dom';
import { getUserToken } from '../auth/helper';


const ManageProduct = () => {
    const [value, setValue] = useState([])

    const {token, user} = getUserToken()

    const preLoad = () => {
        getAllProducts().then(item => {
            if (item.error) {
                console.log("Something went wrong" + item.error)
            } else {
                setValue(item)
            }
        }).catch(error => console.log(error))
    }

    const displayProductList = () => {
        let data = value["data"]
        if (data) {
            // console.log(data)
            return data.map((item, index) => {
                const { _id, name } = item
                return (<div key={index} className="row text-center mb-2 ">
                    <div className="col-4">
                        <h3 className="text-white text-left">{name}</h3>
                    </div>
                    <div className="col-4">
                        <Link
                            className="btn btn-success"
                            to={`/admin/product/update/${_id}`}>
                            <span className="">Update</span>
                        </Link>
                    </div>
                    <div className="col-4">
                        <button onClick={() => { deleteThisProduct(_id)}} className="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>)
            })
        }
    }

    const deleteThisProduct = productId => {
        deleteProduct(productId, user._id, token).then( item => {
            if (item.error) {
                console.log("Something went wrong" + item.error)
            } else {
                preLoad()
            }
        }
        ).catch()
    }

    useEffect(() => {
        preLoad()
    }, [])

    const deleteProductForm = () => (
        <React.Fragment>
            <h2 className="mb-4">All products:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">Total 3 products</h2>
                    {displayProductList()}
                </div>
            </div>
        </React.Fragment>
    )

    return (
        <Base className="container bg-info-outline p-4" title="Manage Product" description="Manage your Product here!">
            {}
            {deleteProductForm()}
        </Base>
    )
}

export default ManageProduct;