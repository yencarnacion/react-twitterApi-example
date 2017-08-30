import { createDb } from "./database/createDb";
import { createServer } from "./api/server";
import { createSearchServer } from "./searchserver/initServer";
import fs from "fs";
import path from "path";

const emptyPromise = new Promise(r => r());

const databaseCreated = (fs.existsSync(path.join(__dirname, "./database/database.sqlite"))) ?
  createDb() :
  emptyPromise;

databaseCreated.then(createServer);

createSearchServer();