import { getDatabase } from "./query";

export const createTweets = (tweets) => {
  tweets.length > 0 && getDatabase().then(db => db.exec(insertTweetSql(tweets)));
}

export const updateLatestTweetId = (tweetId) =>
  getDatabase().then(db => db.exec(updateIdSql(tweetId)));

const insertTweetSql = (tweets) =>
  `INSERT OR REPLACE INTO Tweets (TweetId, TweetText)
   VALUES ${tweets.map((t) => `(${t.id}, '${t.text}')`)};`;

const updateIdSql = (tweetId) =>
  `UPDATE LatestTweetId SET TweetId = ${tweetId};`;