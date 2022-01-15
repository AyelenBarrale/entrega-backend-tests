const ApiProductos = require('../api/productos.api.js')

class ControladorProductos{
  constructor() {
    this.apiProductos = new ApiProductos()
  }

  obtenerTodos =async  (req,res) => {
    try {
      const response = await this.apiProductos.obtenerTodos()
      return res.status(200).json(response)
    } catch (error) {
      return console.log(error)
    }
  }

  obtenerProducto = async (req, res) => {
    try {
      const { id } = req.params
      const productos = await this.apiProductos.obtenerProducto(id)
      return res.status(200).json(productos)
    } catch (error) {
      return console.log(error)
    }
  }

  guardarProducto = async (req, res) => {
    try {
      const { body } = req
      const response = await this.apiProductos.guardarProducto(body)
      return res.status(200).json(response)
    } catch (error) {
      return console.log(error)
    }
  }


}

module.exports = ControladorProductos