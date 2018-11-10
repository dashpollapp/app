import { SQLite } from "expo";
import PouchDB from "pouchdb-react-native";
import SQLiteAdapterFactory from "pouchdb-adapter-react-native-sqlite";
import find from "pouchdb-find";
import upsert from "pouchdb-upsert";

const SQLiteAdapter = SQLiteAdapterFactory(SQLite);

PouchDB.plugin(SQLiteAdapter);
PouchDB.plugin(find);
PouchDB.plugin(upsert);
const db = new PouchDB("dashpoll.db", { adapter: "react-native-sqlite" });
export default db;
