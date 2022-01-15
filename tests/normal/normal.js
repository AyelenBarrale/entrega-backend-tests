const Todos = require("./todos.js");

const todos = new Todos();

console.log(todos.list());
todos.add("producto1");
console.log(todos.list());
todos.add("producto2");
console.log(todos.list());
todos.complete("producto1");
console.log(todos.list());
