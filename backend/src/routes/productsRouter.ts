import { Router } from "express";
import { listCategories, listProductBySlug, listProducts } from "../controllers/productController";

const router = Router();

router.get("/", listProducts);
router.get("/categories", listCategories);
router.get("/:slug", listProductBySlug);

export default router;