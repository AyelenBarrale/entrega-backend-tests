const productosDTO = require('../DTOs/productosDTO.js')
const productosBaseDAO = require('./productosBaseDAO')

class ProductosMemDAO extends productosBaseDAO{
  constructor() {
    super()
    this.productos=[]
  }

  obtenerTodos
  obtenerProducto
  guardarProducto
  actualizarProducto
  borrarProducto

}

module.exports = ProductosMemDAO