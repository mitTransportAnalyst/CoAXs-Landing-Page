/**
 * Created by xinzheng on 4/20/17.
 */



const path = require('path');
const express = require('express');

//
// const app = express();
// const indexPath = path.join(__dirname, '/public/index.html');
// const publicPath = express.static(path.join(__dirname, '/public'));
//
// app.use(publicPath);
// app.get('/', function (_, res) { res.sendFile(indexPath) });
//


const app = express();
const port = process.env.PORT || 8080;
const public_path = express.static(__dirname + '/public');
const index_path = __dirname + '/public/index.html';

app.use(public_path);

app.get('*', function (request, response) {
  response.sendFile(index_path, function (error) {
    if (error) {
      console.log(error);
    }
  });
});

app.listen(port, function() {
  console.log("App is running on port " + port);
});

