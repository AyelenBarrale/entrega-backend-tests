const ProductosFactoryDAO = require("../model/DAOs/productosFactory.js");

class ApiProductos {
  constructor() {
    console.log(process.env.TIPO_PERSISTENCIA);
    this.productosDAO = ProductosFactoryDAO.get(process.env.TIPO_PERSISTENCIA);
  }

  async obtenerTodos() {
    return this.productosDAO.obtenerTodos();
  }

  async obtenerProducto(id) {
    return this.productosDAO.obtenerProducto(id);
  }

  async guardarProducto(producto) {
    return this.productosDAO.guardarProducto(producto);
  }
}

module.exports = ApiProductos;
