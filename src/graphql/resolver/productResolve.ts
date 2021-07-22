import { ProductController } from '../../controllers/product.controller';
import { IProduct } from '../../interfaces/Iproduct';

export const productResolve = {
    Query: {
      products: async () => {
        let productos: IProduct[]|null = await ProductController.getProducts();
          return productos;
      },
      product: async (_: any, args: IProduct) => {
        let product: IProduct|null = await ProductController.getProduct(args.id);
        return product;
      },
    },
    Mutation: {
        addProduct: async (_: any, args: IProduct) => {
            let product: IProduct|null = await ProductController.saveProduct(args);
            return product;
        },
        updateProduct: async (_: any, args: IProduct) => {
            let product: IProduct|null = await ProductController.updateProduct(args);
            return product;
        },
        deleteProduct: async (_: any, args: IProduct) => {
            let delProd: IProduct|null = await ProductController.deleteProduct(args.id);
            return delProd;
        }
    }
  }