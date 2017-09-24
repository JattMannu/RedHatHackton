var http = require("https");

var options = {
  "method": "GET",
  "hostname": "things.apps.bosch-iot-cloud.com",
  "port": null,
  "path": "/api/2/things?ids=rhh%3AFCD6BD100DDC",
  "headers": {
    "x-cr-api-token": "b24bd872c1a64a2cbf00187b67e209fc",
    "authorization": "Basic UkhIXHJoaDIwMTc6RGV2aWNlSHViQFJISDIwMTc=",
    "cache-control": "no-cache",
    "postman-token": "a792eeaa-1053-cca3-17d9-c5831dcf31fb"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
