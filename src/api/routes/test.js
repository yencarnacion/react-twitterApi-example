export const test = {
  type: "get",
  url: "/test/",
  response: (req, res) => res.json({message: "Successful test"}),
}