import express from "express";
import apiRoutes from "./routes/api.routes.js";
import "./config/dotenv.config.js";
import { graphqlHTTP } from "express-graphql";
import schema from './graphql/schema/api.schema.js'
import Connection from "./config/connection.config.js";

const db = Connection.getInstance();

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
    this.app.use("/graphql", graphqlHTTP({
      graphiql: true,
      schema: schema
    }))
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}

const server = new App();
const connected = async () => await db.connect();
connected()
server.listen();
