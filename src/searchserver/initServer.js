import elasticsearch from "elasticsearch";
import { Database } from "sqlite3";

const client = elasticsearch.Client({
  host: "localhost:9200",
});

const createIndexIfNew = (index) =>
  client.indices.exists({index})
    .then((exists) => !exists && client.indices.create({ index }));

export const createSearchServer = () => {
  createIndexIfNew("tweets");
}