import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    max: 200,
  },
  code: {
    type: String,
    required: true,
    max: 50,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

export const productModel = new mongoose.model("ProductsApi", product_schema);
