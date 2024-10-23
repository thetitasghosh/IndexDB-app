import Dexie from "dexie";
// import {useLiveQuery} from 'dexie-react-hooks'

const IndexDB = new Dexie("TestTodoDB");
IndexDB.version(1).stores({
  todos: "id,todo,checked",
});
export default IndexDB;
