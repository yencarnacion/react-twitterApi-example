import elasticsearch from "elasticsearch";
import { flatten } from "lodash";

export const initSearchServer = () => {
  const client = elasticsearch.Client({
    host: "localhost:9200",
  });

  return {
    load: (tweets) => tweets.length > 0 &&
      client.bulk({
        body: flatten(tweets.map(t => [{index: { _index: "tweets", _type: "tweet", _id: t.id}}, t])),
      }),
    search: (search) => client.search({
      index: "tweets",
      type: "tweet",
      q: `text:${search}`
    }),
  };
}