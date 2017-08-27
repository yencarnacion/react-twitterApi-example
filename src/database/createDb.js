import { Database } from "sqlite3";
import * as path from "path";
import * as fs from "fs";

const db = new Database(path.join(__dirname, "./database.sqlite"));

fs.readFile(path.join(__dirname, "00_schema.sql"), (err, data) =>
  db.exec(data.toString()));