import ProductInterface from "../../interfaces/products.interfaces.js";
import { productModel } from "../../models/products.schemas.js";

class ProductDAO extends ProductInterface {
  constructor() {
    super();
    this.db = productModel;
  }
  async addProduct(product) {
    try {
      return await this.db.create(product);
    } catch (error) {
      console.log(error.message);
    }
  }
  async getProduct(id) {
    try {
      return await this.db.findOne({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  }
  async getAll() {
    try {
      return await this.db.find();
    } catch (error) {
      console.log(error.message);
    }
  }
  async updateProduct(id, update) {
    try {
      return await this.db.findOneAndUpdate({ _id: id }, update);
    } catch (error) {
      console.log(error.message);
    }
  }
  async removeProduct(id) {
    try {
      return await this.db.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const Product = new ProductDAO();
