import "./App.css";
import faker from "faker";
import axios from "axios";
import React from "react";
import lodash from "lodash";

faker.locale = "es";

function App() {
  const [productos, setProductos] = React.useState([]);

  async function obtenerProductos(e) {
    e.preventDefault();
    const response = await axios.get("http://localhost:4000/productos");
    setProductos(response.data);
  }

  async function generarProducto() {
    const producto = {
      nombre: faker.hacker.phrase(),
      descripcion: faker.lorem.paragraph(),
      imagen: faker.image.avatar(),
    };
    const response = await axios.post(
      "http://localhost:4000/productos",
      producto
    );
    console.log(response);
    if (response.status === 200) {
      const newProductos = lodash.cloneDeep(producto); // [...productos]
      newProductos.push(producto);
      setProductos(newProductos);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='form-group'>
          <label htmlFor='input'>Selecciona un producto</label>
          <form>
            <input type='number' min='1' name='input' />
            <button onClick={obtenerProductos}>Obtener</button>
          </form>
          <button onClick={generarProducto}>Generar</button>
        </div>
        <div>
          {productos.length > 1 &&
            noticias.map((producto, index) => {
              return (
                <div key={`not${index}`}>
                  <img
                    src={producto.imagen}
                    height='100px'
                    width='150px'
                    alt=''
                  />
                  <h3>{producto.titulo}</h3>
                  <text>{producto.cuerpo}</text>
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
