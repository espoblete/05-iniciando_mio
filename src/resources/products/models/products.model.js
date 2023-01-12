import mongoose from "mongoose";

//definir esquema de mongoose --> estrucutura del product. ID se genera automaticamente
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100
    },
    price: {
        type: Number,
        required: true
    }
})

//creamos instancia del modelo
export const ProductModel = new mongoose.model('Product', productSchema)