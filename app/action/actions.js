import IndexDB from "../../lib/IndexDB";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function CreateTodo(formData) {
  let todo = formData.get("todo");
  let checked = false;
  let id = Date.now() + "-" + Math.floor(Math.random() * 10000);
  await delay(1000);
  await IndexDB.todos.add({ id, todo, checked });
  //   alert("Add new todo");
}
export async function DeleteTodo(id) {
  await IndexDB.todos.delete(id);
}
export async function CheckedTodo(id, status) {
  await IndexDB.todos.update(id, { checked: status });
}
