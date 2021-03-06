export const search = (searchServer) => ({
  type: "get",
  url: "/search/",
  response: (req, res) => {
    searchServer.search(req.query.q)
      .then((results) => res.json(results.hits.hits.map(h => h._source)))
      .catch((err) => res.json({error: "Unable to access search server"}));
  },
});