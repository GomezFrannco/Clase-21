import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from '../resolvers/api.resolvers.js';

const typeDefs = `
  type Product {
    _id: ID
    title: String
    description: String
    code: String
    thumbnail: String
    price: Int
    stock: Int
  }
  input ProductAdd {
    title: String!
    description: String!
    code: String!
    thumbnail: String!
    price: Int!
    stock: Int!
  }
  input Update {
    title: String
    description: String
    thumbnail: String
    price: Int
    stock: Int
  }
  type Mutation {
    AddProduct(input: ProductAdd): Product
    DeleteProduct(_id: ID!): Product
    UpdateProduct(_id: ID!, input: Update): Product
  }
  type Query {
    GetOne(_id: ID!): Product
    GetAll: [Product]
  }
`

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
})

