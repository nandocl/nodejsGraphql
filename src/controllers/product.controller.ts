import productModel from '../database/models/product.model';
import { IProduct } from '../interfaces/Iproduct';

export class ProductController{
    static async getProducts(): Promise<IProduct[]|null>{
        try{
            let products: IProduct[] | null = await productModel.find();
            return products;
        }catch(err){
            return null;
        }
    }

    static async getProduct(id: Number): Promise<IProduct|null>{
        try{
            let product: IProduct|null = await productModel.findOne({id: id});
            return product;
        }catch(err){
            return null;
        }
    }

    static async saveProduct(product: IProduct): Promise<IProduct|null>{
        try{
            let newProduct = new productModel(product);
            let np = await newProduct.save();
            return np;
        }catch(err){
            return null;
        }
    }

    static async updateProduct(product: IProduct): Promise<IProduct|null>{
        try{
            let prod: IProduct|null = await productModel.findOneAndUpdate({id:product.id}, product, {new: true});
            return prod;
        }catch(err){
            return null;
        }
    }

    static async deleteProduct(id: Number): Promise<IProduct|null>{
        try{
            let delProd: IProduct|null = await productModel.findOneAndDelete({id: id});
            return delProd;
        }catch(err){
            return null;
        }
    }
}