const express = require("express");
const router = express.Router();
const {
  carrito,
  detalles,
  productDetail,
  dashboard,
  formUpdate,
  edit,
  update
} = require("../controllers/productsController");

router.get("/carrito", carrito);
// router.get('/detalles',detalles );
router.get("/detalles/:idProducto", productDetail);
router.get("/dashboard", dashboard)
router.get('/dashboard/:id/update',formUpdate);
router.get("/dashboard/:id/edit", edit);
router.put("/dashboard/:id/edit", update)

module.exports = router;


