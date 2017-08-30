import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./frontend/containers/App";
import * as elasticsearch from "elasticsearch";

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

ReactDOM.render(<App />, document.getElementById("content"));