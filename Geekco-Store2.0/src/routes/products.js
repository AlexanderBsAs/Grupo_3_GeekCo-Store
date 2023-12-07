const express = require("express");
const router = express.Router();
const {
  carrito,
  detalles,
  productDetail,
  dashboard,
  formUpdate,
  edit,
} = require("../controllers/productsController");

router.get("/carrito", carrito);
// router.get('/detalles',detalles );
router.get("/detalles/:idProducto", productDetail);
router.get("/dashboard", dashboard)
router.get('/dashboard/:id/update',formUpdate);
router.get("/dashboard/:id/edit", edit);

module.exports = router;


