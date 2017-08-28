import { orderBy } from "lodash";
import { authenticatedGet } from "./authenticationServices";
import { decrypt } from "../utils/decrypt";
import { getPassword } from "../utils/getPassword";
import { URL } from "url";

const apiUrl = "https://api.twitter.com/oauth2/token";
const apiKey = "EHYQNI4520JXpXAxtcu0wuPlZ";
const apiSecret = decrypt(
  "e7e0b388ea2465a54fd15f7ab1774efbbdb2722900202cf577accbc4b99bdfcc99fccf8ba849e9d3b20d7f023cb8f176ce49",
  getPassword());

const get = authenticatedGet(apiKey, apiSecret, apiUrl);

export const getLatestTweets = (latestId) => {
  const url = new URL("https://api.twitter.com/1.1/search/tweets.json");
  url.searchParams.append("q", "%23apitest");
  url.searchParams.append("count", "100");
  url.searchParams.append("since_id", latestId);

  return new Promise((resolve, reject) => {
    get(url.toString())
      .then((response) => {
        const result = JSON.parse(response.body);
        const tweets = parseResponse(result);
        const newId = tweets.length > 0 ? orderBy(tweets, "id", "desc")[0].id : latestId;
        resolve({newValue: newId, result: tweets});
      });
  });
}

const parseResponse = (twitterJsonResult) => twitterJsonResult.statuses.map(r => ({
  id: r.id,
  text: r.text,
}));