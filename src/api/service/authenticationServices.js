import request from "request";

export const authenticatedGet = (apiKey, apiSecret, url) => {
  const tokenRequestDetails = {
    url,
    method: "POST",
    auth: {
      user: apiKey,
      pass: apiSecret,
    },
    form: {
      grant_type: "client_credentials",
    },
  }
  return (apiUrl) => new Promise((resolve) => {
    request(tokenRequestDetails, (err, res) => {
      //console.log(err);
      const token = JSON.parse(res.body).access_token;
      const requestDetails = {
        url: apiUrl,
        method: "GET",
        auth: {
          bearer: token,
        },
      };
      request(requestDetails, (err, res) => {
        resolve(res);
      })
    });
  });
};