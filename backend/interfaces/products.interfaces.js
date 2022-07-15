// this class simulates an interface and is used to be implemented with DAO pattern
export default class ProductInterface {
  async addProduct(product) {}
  async getProduct(id) {}
  async getAll() {}
  async updateProduct(id, update) {}
  async removeProduct(id) {}
}
