var http = require('http');
const https = require('https');

function getResponse(callback){
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
      console.log("==============================================");
      console.log(chunk);
      console.log(data);
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //console.log(JSON.parse(data).explanation);
      //res.end(JSON.parse(data).explanation);
      return callback(data);
    });

  }).on("error", (err) => {
    //console.log("Error: " + err.message);
    callback("Error: " + err.message);
  });
}

http.createServer(function (req, res) {
  getResponse(function (msg) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    alert("Hello! I am an alert box!!");
    res.end(msg);
  });

}).listen(8080);
