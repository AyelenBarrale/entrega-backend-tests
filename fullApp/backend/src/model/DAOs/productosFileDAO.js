const fs = require("fs");
const productosDTO = require("../DTOs/productosDTO.js");
const productosBaseDAO = require("./productosBaseDAO");

class ProductosMemDAO extends productosBaseDAO {
  #ready = false;

  constructor(ruta) {
    super();
    this.productos = [
      /* {
        nombre: "microondas",
        descripcion: "bgh 23 litros",
        imagen:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/183B1/production/_113494299_gettyimages-489937746.jpg",
        _id: 1,
        fyh: "1/13/2022, 08:20:53 AM",
      },
      {
        nombre: "lavarropas",
        descripcion: "Aurora 8 kg",
        imagen:
          "https://aurora.vteximg.com.br/arquivos/ids/155554-1000-1000/7795473024181.jpg?v=637516769590700000",
        _id: 2,
        fyh: "1/13/2022, 08:20:53 AM",
      }, */
    ];
    this.ruta = ruta;
  }

  async init() {
    try {
      await fs.promises.readFile(this.ruta, "utf-8");
      this.#ready = true;
      console.log("productos dao en archivo -> listo");
    } catch (error) {
      await fs.promises.writeFile(this.ruta, "[]");
      this.#ready = true;
      console.log("productos dao en archivo -> listo");
    }
  }

  disconnect() {
    console.log("productos dao en archivo -> cerrado");
  }

  #leerArchivo = async () => {
    const texto = await fs.promises.readFile(this.ruta, "utf-8");
    this.productos = JSON.parse(texto);
  };

  #escribirArchivo = async () => {
    const texto = JSON.stringify(this.productos, null, 2);
    await fs.promises.writeFile(this.ruta, texto);
  };

  obtenerTodos = async () => {
    await this.#leerArchivo();
    return this.productos;
  };

  obtenerProducto = async (_id) => {
    try {
      await this.#leerArchivo();
      const indice = this.getIndex(_id, this.productos);
      return indice >= 0 ? [this.productos[indice]] : [];
    } catch (error) {
      return [];
    }
  };

  guardarProducto = async (productoNuevo) => {
    try {
      await this.#leerArchivo();
      const productoDTO = productosDTO(
        productoNuevo,
        this.getNextId(this.productos),
        new Date().toLocaleString()
      );
      this.productos.push(productoDTO);
      await this.#escribirArchivo();
      return productoDTO;
    } catch (error) {
      console.log(error);
      return {};
    }
  };
}

module.exports = ProductosMemDAO;
