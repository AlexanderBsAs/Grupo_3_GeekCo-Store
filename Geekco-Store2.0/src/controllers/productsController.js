const fs = require("fs");
const path = require("path");
let json = fs.readFileSync(
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
    const id= +req.params.id
    let productos=products.find((elemento)=>{
     
        return elemento.id==id
    
    })
  console.log(productos)

res.render("products/productEdit",{productos,id})


    /*     const id = req.params.id;
    const producto = req.body
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products[i] = producto;
        break;
      }
    }
    const updatedJson = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname, "../database/products.json"), updatedJson, "utf-8");
    */ /* res.redirect("/");  */
  },
  update: (req,res)=>{
    const { nombre, precio, stock, descuento, plataforma, categoria, descripcion, imagen}=req.body
    const id= req.params.id
    let nuevobjeto={
     id,
     nombre,
     precio,
     stock,
     descuento,
     plataforma,
     categoria,
     descripcion,
     imagen
    }
    let producto=products.map((elemento)=>{
      if(elemento.id==id){
        nuevobjeto.imagen=elemento.image
       
        return nuevobjeto
      }
     
    return elemento
    }) 
    console.log(producto)
/*  console.log(producto) */
/* console.log(producto) */
    let json2=JSON.stringify(producto)
/*     console.log(json2) */
  /*  fs.writeFileSync(json,json2,"utf-8")  */
   console.log(req.body)
    res.send("editado")
  }
};

module.exports = productsController;