import express from "express";
import apiRoutes from "./routes/api.routes.js";
import "./config/dotenv.config.js";

export class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", this.port || process.env.PORT);
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/api", apiRoutes);
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}

const server = new App();
server.listen();
