import express from "express";
import * as api from "../controllers/api.controllers.js";

const router = express.Router();

router.route("/products")
  .get(api.GetControllers.getProducts)
  .post(api.PostControllers.postProduct);
router.route("/products/id/:id")
  .get(api.GetControllers.getProductById)
  .put(api.PutControllers.putProduct)
  .delete(api.DeleteControllers.deleteProduct);

export default router;
