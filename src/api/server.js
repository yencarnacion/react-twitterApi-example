import express from "express";
import routes from "./routes";
import { registerRoutes } from "./utils/registerRoutes";
import { getLatestTweets } from "./service/twitterServices";
import { promiseTimer } from "./utils/timer";
import { createTweets, updateLatestTweetId } from "./database/createTweets";
import { getLatestTweetId } from "./database/getTweets";
import { initSearchServer } from "./elasticsearch";
import cors from "cors";

export const createServer = () => {
  const app = express();
  app.use(cors());
  const router = express.Router();
  const searchServer = initSearchServer();

  const fetchIntervalSeconds = 5;
  getLatestTweetId().then(id => {
    promiseTimer(
      getLatestTweets,
      fetchIntervalSeconds * 1000,
      id,
      (id, tweets) => {
        createTweets(tweets);
        updateLatestTweetId(id);
        searchServer.load(tweets);
      },
      (err) => console.log(`Unable to connect to twitter: ${err}`));
  });

  registerRoutes(router, routes(searchServer));

  const port = process.env.KLAB_API_PORT | 8081;

  app.use("/api", router);
  app.listen(port);
}