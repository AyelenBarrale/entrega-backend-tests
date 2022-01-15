const express = require('express')
const ControladorProductos = require('../controlador/productos.controller.js')

const router = express.Router()

class RouterProductos{
  constructor() {
    this.controladorProductos = new ControladorProductos()
  }
  start() {
    router.get('/',this.controladorProductos.obtenerTodos)
    router.get('/:id',this.controladorProductos.obtenerProducto)
    router.post('/',this.controladorProductos.guardarProducto)
    // router.put('/',)
    // router.delete('/',)
    return router
  }

}

module.exports = RouterProductos