import { Schema, model } from 'mongoose';

const clientSchema = new Schema({
    id: Number,
    name: String,
    age: Number
});

export default model('Client', clientSchema)