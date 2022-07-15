import mongoose from "mongoose";
import "./dotenv.config.js";

let instance = null;

export default class Connection {
  constructor() {
    this.db = mongoose;
    this.url = process.env.MONGO_URI;
    this.status = false;
  }
  async connect() {
    try {
      await this.db.connect(this.url);
      this.status = true;
      return console.log("💾 connected with MongoAtlas");
    } catch (error) {
      return console.error(error.message);
    }
  }
  async disconnect() {
    try {
      await this.db.connection.close();
      this.status = false;
      return console.log("❗disconnected from MongoAtlas");
    } catch (error) {
      return console.error(error.message);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new Connection();
    }
    return instance;
  }
}