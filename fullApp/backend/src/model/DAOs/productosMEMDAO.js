const productosDTO = require('../DTOs/productosDTO.js')
const productosBaseDAO = require('./productosBaseDAO')

class ProductosMemDAO extends productosBaseDAO{
  constructor() {
    super()
    this.productos = [
      {
        nombre: "microondas",
        descripcion: "bgh 23 litros",
        imagen: "https://ichef.bbci.co.uk/news/640/cpsprodpb/183B1/production/_113494299_gettyimages-489937746.jpg",
        _id: 1,
        fyh: "1/13/2022, 08:20:53 AM"
      },
     {
        nombre: "lavarropas",
        descripcion: "Aurora 8 kg",
        imagen: "https://aurora.vteximg.com.br/arquivos/ids/155554-1000-1000/7795473024181.jpg?v=637516769590700000",
        _id: 2,
        fyh: "1/13/2022, 08:20:53 AM"
      }
    ]
  }

  obtenerTodos = () => {
    return this.productos
  }

  obtenerProducto = (_id) => {
    try {
      const indice = this.getIndex(_id, this.productos)
      return indice >=0 ? [this.productos[indice]]:[]
    } catch (error) {
      console.log(error)
      return []
    }
  }

  guardarProducto = (producto) => {
    try {
      const productoDTO = productosDTO(producto, this.getNextId(this.productos), new Date().toLocaleString())
      this.productos.push(productoDTO)
      return productoDTO
    } catch (error) {
      console.log(error)
      return {}
    }
  }
  
  actualizarProducto = (_id, producto) => {
    try {
      const productoDTO = productosDTO(producto, this.getNextId(this.productos), new Date().toLocaleString())
      const indice = this.getIndex(_id, this.productos)
      if (indice >= 0) {
        const productoActualizado = {
          ...this.productos[indice],
          ...productoDTO
        }
        this.productos[indice] = productoActualizado
        return productoActualizado
      } 
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  borrarProducto = (_id) => {
    try {
      return this.productos.splice(this.getIndex(_id,this.productos),1)[0]
    } catch (error) {
      console.log(error)
      return {}
    }
  }

}

module.exports = ProductosMemDAO