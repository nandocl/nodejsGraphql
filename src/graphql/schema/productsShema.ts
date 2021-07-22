export const productsShema = `
  type Product {
    id: Int!
    description: String
    price: Int
  }

  type Query {
    products: [Product]
    product(id: Int!): Product
  }

  type Mutation {
    addProduct(id: Int, description: String, price: Int): Product
    updateProduct(id: Int, description: String, price: Int): Product
    deleteProduct(id: Int): Product
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;