import request from "request";

export const startSearch = (dispatch) => (searchTerm) => {
  dispatch({type: "SearchStarted"});
  request({
    url: `http://localhost:8081/api/search?q=${searchTerm}`,
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin":  "http://localhost",
    }
  },
  (err, response, body) => {
    if (err)
      dispatch({type: "SearchFail", payload: err});
    else {
      dispatch({type: "SearchSuccess", payload: JSON.parse(body)});
    }
  });
}