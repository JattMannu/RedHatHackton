const http = require('http');
const handler = require('./request-handler');

const port = 8080;
const ip =  '127.0.0.1';
const server = http.createServer(handler.handlerRequest);


if(module.parent){
  module.exports = server;
}else{
  server.listen(port , ip);
  console.log(`Listening on http://${ip}:${port}`);
}
