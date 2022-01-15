const Todos = require("./todos.js");
const assert = require("assert").strict;
const fs = require("fs");

describe("Test de integración de tareas", () => {
  it("Debería crear el contenedor de productos vació", () => {
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });
  it("Deberia adicionar productos correctamente", () => {
    const todos = new Todos();
    todos.add("tarea1");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [
      { title: "tarea1", completed: false },
    ]);
  });
  it("Deberia marcar como vendido un producto", () => {
    const todos = new Todos();
    todos.add("producto1");
    todos.add("producto2");
    todos.complete("producto2");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "producto1", completed: false },
      { title: "producto2", completed: true },
    ]);
  });
});

describe("Comprobar errores", () => {
  it("Deberia dar un error cuando no hay productos", () => {
    const todos = new Todos();
    const errorEsperado = new Error("No hay productos");
    assert.throws(() => {
      todos.complete("producto");
    }, errorEsperado);
  });
  it("Deberia dar error cuando el producto no existe", () => {
    const todos = new Todos();
    todos.add("producto1");
    const errorEsperado = new Error("producto no encontrado");
    assert.throws(() => {
      todos.complete("producto");
    }, errorEsperado);
  });
});
