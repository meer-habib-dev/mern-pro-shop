import express from "express";
import Product from "../modals/productsModal.js";
import expressAsyncHandler from "express-async-handler";
const router = express.Router();

// @des	        fetch all products
// @route	    get/api/products
// @access	    public
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @des	        fetch single products
// @route	    get/api/products/:id
// @access	    public
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default router;
