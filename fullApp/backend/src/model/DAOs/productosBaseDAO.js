class ProductosBaseDAO{

  getNextId(productos) {
    let max=0
    productos.map(productos => {
      if (productos._id > max) {
        max=productos._id
      }
    })
    return max+1
  }

  getIndex(_id, productos) {
    let index =-1
    productos.map((productos, _index) => {
      if(productos._id.toString() === _id.toString()) index= _index
    })

    return index
  }

  obtenerTodos() {
    console.log('No implementado')
    
  }

  obtenerProducto() {
    console.log('No implementado')
  }
  guardarProducto() {
    console.log('No implementado')
  }
  actualizarProducto() {
    console.log('No implementado')
  }
  borrarProducto() {
    console.log('No implementado')
  }
}

module.exports = ProductosBaseDAO