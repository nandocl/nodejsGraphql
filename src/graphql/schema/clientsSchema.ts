export const clientsSchema = `
  type Client {
    id: Int
    name: String
    age: Int
  }

  type Query {
    clients: [Client]
    client(id: Int): Client
  }

  type Mutation {
    addClient(id: Int, name: String, age: Int): Client
    updateClient(id: Int, name: String, age: Int): Client
    deleteClient(id: Int): Client
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;