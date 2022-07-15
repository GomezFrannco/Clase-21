import Connection from "../config/connection.config.js";
import { Product } from "../services/dao/productsImpl.dao.js";

const db = Connection.getInstance();

export class GetControllers {
  static async getProducts(_req, res) {
    try {
      await db.connect();
      const product = await Product.getAll();
      if (product.length == 0) return res.status(204).json(product);
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    } finally {
      await db.disconnect();
    }
  }
  static async getProductById(req, res) {
    try {
      await db.connect();
      const product = await Product.getProduct(req.params.id);
      if (!product) return res.status(204).json(product);
      return res.status(200).json(product);
    } catch (err) {
      console.error(err);
    } finally {
      await db.disconnect();
    }
  }
}
export class PostControllers {
  static async postProduct(req, res) {
    try {
      await db.connect();
      const product = await Product.addProduct(req.body);
      if (!product) return res.status(400).json({error: new Error('Nothing to add')});
      return res.status(201).json(product);
    } catch (err) {
      console.error(err.message);
    } finally {
      await db.disconnect();
    }
  }
}
export class PutControllers {
  static async putProduct(req, res) {
    try {
      await db.connect();
      const product = await Product.updateProduct(req.params.id, req.body);
      if (!product) return res.status(400).json({error: new Error('Nothing to add')});
      return res.status(201).json(product);
    } catch (err) {
      console.error(err.message);
    } finally {
      await db.disconnect();
    }
  }
}
export class DeleteControllers {
  static async deleteProduct(req, res) {
    try {
      await db.connect();
      const product = await Product.removeProduct(req.params.id);
      if (!product) return res.status(400).json({error: new Error('Nothing to add')});
      return res.status(204).json({info: 'Producto borrado'});
    } catch (err) {
      console.error(err.message);
    } finally {
      await db.disconnect();
    }
  }
}
