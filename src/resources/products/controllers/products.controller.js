//const products = []
//se guardará en memoria....pero en realidad usaremos db

import { ProductModel } from '../models/products.model.js'


export const createProduct = async (req, res) => {
    const body = req.body
    //products.push (body)
    const newProduct = await ProductModel.create (body)
    res.json(newProduct)
}


export const getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}


export const getProductById = async (req, res) => {
    const id = req.params.id
    const product = await ProductModel.findById (id)
    res.json(product)
}


export const updateProductById = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const productUpdated = await ProductModel.findByIdAndUpdate (id, body, {new: true})
    //products [productUpdate] = body
    res.json( productUpdated )
}


export const deleteProductById = async (req, res) => {
    const id = req.params.id
    const productRemoved = await ProductModel.findByIdAndDelete (id)
    //const productRemoved = products.splice (productIndex, 1) [0]
    res.json(productRemoved)

}