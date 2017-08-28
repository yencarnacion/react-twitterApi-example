const express = require("express");
import routes from "./routes";
import { registerRoutes } from "./utils/registerRoutes";
import { getLatestTweets } from "./service/twitterServices";
import { promiseTimer } from "./utils/timer";
import { createTweets, updateLatestTweetId } from "./database/createTweets";
import { getLatestTweetId } from "./database/getTweets";

const app = express();
const router = express.Router();

const fetchIntervalSeconds = 5;
getLatestTweetId().then(id => {
  promiseTimer(
    getLatestTweets,
    fetchIntervalSeconds * 1000,
    id,
    (id, tweets) => { createTweets(tweets); updateLatestTweetId(id); });
});

registerRoutes(router, routes);

const port = process.env.KLAB_API_PORT | 8081;

app.use("/api", router);
app.listen(port);