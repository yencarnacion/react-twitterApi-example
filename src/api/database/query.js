import path from "path";
import { Database } from "sqlite3";

export const getDatabase = () => new Promise((resolve, reject) => {
  const db = new Database(path.join(__dirname, "../../database/database.sqlite"));
  resolve(db).then(db.close);
});