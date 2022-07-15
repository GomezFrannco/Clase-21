import axios from "axios";

class GetAxios {
  static async getAll() {
    const response = await axios.get('http://localhost:8080/api/products')
    return console.log(response.data);
  }
  static async getById(id) {
    const response = await axios.get(`http://localhost:8080/api/products/id/${id}`);
    return console.log(response.data);
  }
}
class PostAxios {
  constructor() {
    this.axios = axios;
  }
  static async postProduct(product) {
    if (product) {
      const response = await axios.post('http://localhost:8080/api/products', product);
      return console.log(response.data);
    }
  }
}
class PutAxios {
  constructor() {
    this.axios = axios;
  }
  static async putProduct(id, update) {
    const response = await axios.put(`http://localhost:8080/api/products/${id}`, update);
    return console.log(response.data);
  }
}
class DeleteAxios {
  constructor() {
    this.axios = axios;
  }
  static async deleteProduct(id) {
    const response = await axios.delete(`http://localhost:8080/api/products/${id}`);
    return console.log(response.data);
  }
}