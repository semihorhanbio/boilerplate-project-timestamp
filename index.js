// index.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date?", (req, res) => {
  let date = new Date(req.params.date);

  if(!req.params.date) {
    date = new Date();
  }

  if(Number(req.params.date)) {
    date = new Date(Number(req.params.date));
  }

  date.toDateString() === "Invalid Date" ? 
  res.json({"error": "Invalid Date"}): 
  res.json({"unix": date.valueOf(), "utc": date});
});



// listen for requests :)
app.listen(8000, function () {
  console.log('Your app is listening on port ' + 8000);
});
