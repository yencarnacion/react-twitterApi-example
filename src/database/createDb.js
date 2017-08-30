import { Database } from "sqlite3";
import * as path from "path";
import * as fs from "fs";

const db = new Database(path.join(__dirname, "./database.sqlite"));

export const createDb = () => new Promise((resolve, reject) =>
  fs.readFile(
    path.join(__dirname, "00_schema.sql"),
    (err, data) => {
      if (err) return reject(err);
      db.exec(data.toString(), (err) => {
        if (err) return reject(err);
        resolve();
      })
    }));