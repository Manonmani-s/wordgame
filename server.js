//Import the module
const express = require("express");
const liveReload = require("livereload");
const connectLiveReload = require("connect-livereload");

//Creating the 2 Servers-The purpose of expressServer is to listen to the port

const Server = express();
const liveReloadServer = liveReload.createServer();

//Use the middleware

//to connect the express Server with the livereloadserver we should use the middleware connectliveReload()
Server.use(connectLiveReload());

//to handle all get requests from a static path we should use the middleware express.ststic('staticpath')
Server.use(express.static("public"));

//to watch the live changes on the static path
liveReloadServer.watch("public");

//Define the port to which the expressServer would listen to
const port = 5050;
Server.listen(port, function () {
  console.log(`Server is listening to the port ${port}`);
});
