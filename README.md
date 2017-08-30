# React Twitter API example
React example using Twitter API and Elasticsearch

## Setup
Project requires elastic-search running on your local machine. Download/installation instructions can be found on thee elasticsearch website. 

After that, simply run:
```
npm install
```

## Start project
Run:
```
npm run run-server -- --p [password]
```
This will:
1. Initialise the search server indices
2. Create the database if it doesn't exist yet
3. Start the api server

To start the front end run:
```
npm run start
```

Then the front end should be reachable at localhost:3000

## About
The server fetches tweets for a given hashtag at regular intervals, from Twitter's REST API.
On fetching tweets, it loads them into a persistent (sqlite) database, and into a search server (elasticsearch) client.
To search the search server, a rest api route is provided, under api/search?q=[query].
There is a simple React frontend to access the api route, and display the results on the page.