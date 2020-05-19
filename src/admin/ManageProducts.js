import React, { useState, useEffect } from 'react';
import Base from '../core/Base';
import { Form, Button } from 'react-bootstrap';

import { getAllProducts } from './helper/adminapicall';


const ManageProduct = () => {

    const name = [1, 2, 3, 4]

    const [value, setValue] = useState({
        products: {
            "data": [
                {
                    "sold": 0,
                    "_id": "5e94a4877552417f1be66f7c",
                    "name": "Product 1",
                    "price": 1000,
                    "__v": 0
                },
                {
                    "sold": 0,
                    "_id": "5e94a6a60e020f7fca6cd00e",
                    "name": "Product 1",
                    "price": 1000,
                    "__v": 0
                }]
            }
    })

    const {products} = value

    const test_fn = () => {
        const {data} = products
        console.log(data, products)
        data.map(item => {
            const {_id} = item
            console.log(_id)
        })

    }

    const preLoad = () => {
        getAllProducts().then(data => {
            if (data.error) {
                setValue({ ...value, error: true })
            } else {
                setValue({ ...value, products: data })
            }
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        // preLoad()
    })

    const deleteProductForm = () => (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Product</Form.Label>
                <Form.Control as="select">
                    {
                       test_fn()
                    }
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

    return (
        <Base className="container bg-info-outline p-4" title="Manage Product" description="Manage your Product here!">
            {deleteProductForm()}
        </Base>
    )
}

export default ManageProduct;