import { API } from "../../backend";

// NOTE: Helpers for Categories section

// 1. Create a category
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        return response.json()
    })
        .catch(err => {
            console.log(err)
        });
}

export const getCategory = (categoryId) => {
    return fetch(`${API}/category/${categoryId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .catch(error => console.log(error))
}

export const getAllCategories = () => {
    return fetch(`${API}/categories/all`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .catch(error => console.log(error))
}

export const updateCategory = (userId, token, categoryId, category) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: category
    })
}

export const deleteCategory = (categoryId, userId, token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.json())
    .catch(error => console.log(error))
}

// NOTE: Helpers for Products section

// 1. Create a Product
export const createProduct = (userId, token, product) => {
    console.log(product)
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => response.json())
        .catch(error => console.log(error))
}

// 2. Get a Product by ProductId
export const getProduct = productId => {
    return fetch(`${API}/product/get/${productId}`, {
        method: "GET"
    }).then(response => response.json())
        .catch(error => console.log(error))
}

// 3. Get All Products
export const getAllProducts = () => {
    return fetch(`${API}/products/all`, {
        method: "GET"
    }).then(response => response.json())
        .catch(error => console.log(error))
}

// 4. Update a Product detail by ProductId
export const updateProduct = (userId, token, productId, product) => {
    return fetch(`${API}/product/update/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => response.json())
        .catch(error => console.log(error))
}

// 5. Delete a Product by ProductId
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/delete/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response.json())
        .catch(error => console.log(error))
};