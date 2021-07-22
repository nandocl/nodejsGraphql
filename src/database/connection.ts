import mongoose from 'mongoose';

export class Database{
    static runDatabase(){
        mongoose.connect("mongodb://localhost:27017/graphql", {
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
            useFindAndModify: false 
        }).then((_) => {
            console.log('Conectado a mongodb');
        },(err) => {
            console.log('Error ====== ' + err)
        });
    }
}