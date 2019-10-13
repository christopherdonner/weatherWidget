var http = require("http");
var fs = require("fs");

const port = 3100

var server=http.createServer(doThings)

function doThings(req, res){

    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

    case "/":
      return displayRoot(path, req, res);

    default:
      return displayRoot(path, req, res);
    }
}
function displayRoot(url, req, res)
{
    fs.readFile(`${__dirname}/index.html`, function(err, data){
        res.writeHead(200, {
            "content-type":"text/html"
        })
    res.end(data)
    })
}

server.listen(port, function() {
    console.log("Server is listening on PORT: " + port);
  });