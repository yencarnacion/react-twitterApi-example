import { getDatabase } from "./query";

export const getLatestTweetId = () => new Promise ((resolve, reject) => 
  getDatabase().then(db => {
    db.get(getLatestTweetSql, (err, row) => resolve(row.TweetId));
  }));

const getLatestTweetSql = 'SELECT TweetId FROM LatestTweetId LIMIT 1;';