import {Schema, model } from 'mongoose';

let ProdSchema = new Schema({
    id: Number,
    description: String,
    price: Number
});

export default model('Product', ProdSchema);