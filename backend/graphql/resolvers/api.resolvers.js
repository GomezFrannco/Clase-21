import { productModel } from "../../models/products.schemas.js";

export const resolvers = {
  Mutation: {
    UpdateProduct: async (_, { _id, input }) => {
      return await productModel.findByIdAndUpdate(_id, input, { new: true });
    },
    AddProduct: async (_, { input }) => {
      return await productModel.create(input);
    },
    DeleteProduct: async (_, { _id }) => {
      return await productModel.findByIdAndDelete(_id);
    },
  },
  Query: {
    GetOne: async (_, { _id }) => {
      return await productModel.findById(_id);
    },
    GetAll: async () => {
      return await productModel.find();
    },
  },
};
