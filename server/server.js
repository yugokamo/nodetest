// server.js

var http = require("http");
var form = require("fomidable");
var sys = require("sys");
function start(route, handle) {
  http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    var postData = "";
    request.addListener("data",function(postDataChunk){
      console.log("Recieved post data chunck");
      postData += postDataChunk;
    });
    request.addListener("end",function(){
      console.log("end post");
      route(handle, pathname, response, postData);
    });
  }).listen(8888);
  

  console.log("Server has started.");
}

exports.start = start;
