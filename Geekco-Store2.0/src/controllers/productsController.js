const fs = require("fs");
const path = require("path");
const json = fs.readFileSync(
  path.join(__dirname, "../database/products.json"),
  "utf-8"
);
const products = JSON.parse(json);

const productsController = {
  carrito: (req, res) => {
    res.render("products/productCart");
  },
  productDetail: (req, res) => {
    const id = req.params.idProducto;
    const producto = products.find((element) => element.id == id);
    res.render("products/productDetail", { producto, products });
  },
  dashboard: (req, res) => {
    res.render("products/dashboard", { title: "dashboard", products });
  },
  formUpdate: (req, res) => {
    res.render("products/formUpdate") 
  
  },
  edit: (req, res) => {

    res.render("products/productEdit",{products})
    const id = req.params.id;
    const producto = req.body
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i] = producto;
        break;
      }
    }
    const updatedJson = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname, "../database/products.json"), updatedJson, "utf-8");
     res.redirect("/");
  },
};

module.exports = productsController;