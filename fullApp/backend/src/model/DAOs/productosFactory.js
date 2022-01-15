const ProductosMemDAO = require('./productosMEMDAO.js')
const ProductosFileDAO = require('./productosFileDAO.js')
const ProductosMongoDAO = require('./productosMongoDAO.js')

const rutaArchivoProductos = require('../../../productos.txt')
const cnxStr = process.env.MONGO_URI;

class ProductosFactoryDAO{
  static get(tipo) {
    switch (tipo){
      case "MEM":
        return new ProductosMemDAO()
      case "FILE":
        return new ProductosFileDAO(rutaArchivoProductos)
      case "MONGO":
       return new ProductosMongoDAO(cnxStr) 
      default:
        return new ProductosMemDAO()
     }
   }
}

module.exports= ProductosFactoryDAO