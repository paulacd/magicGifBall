// HTTP Portion
var fs = require('fs'); // Using the filesystem module

var express = require('express');
var app = express();
var server = require('http').Server(app);
//var httpServer = http.createServer(requestHandler);

// ------------------------------
// This is Pi-specific. Comment it out for local testing
// var Gpio = require('onoff').Gpio;
// ------------------------------

// ------------------------------
// This is Pi-specific. Comment it out for local testing
// var button = new Gpio(18, 'in', 'rising'); //reads the pin value
// var power = new Gpio(19, 1); //sets the pin to HIGH (acting as power)
// ------------------------------

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(server);
server.listen(8080);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', function (socket) {

    console.log("We have a new client: " + socket.id);

    // ------------------------------
    // This is Pi-specific. Comment it out for local testing
    // button.watch(function(err, value) {
    //     if (err) console.log(err);

    //     io.sockets.emit('message', value);
    //     console.log(value);
    // });
    // ------------------------------

    // ------------------------------
    // This is local-specific. Comment it out for running on the Pi
    var randomValues = [0, 1];
    // io.sockets.emit('message', randomValues[Math.floor(Math.random() * randomValues.length)]);

    // socket.on('message', function(data){
        setInterval(function() {
            io.sockets.emit('message', randomValues[Math.floor(Math.random() * randomValues.length)])
    }, 1000);
    // });
   

    // ------------------------------

    socket.on('disconnect', function() {
        console.log("Client has disconnected");
    });
});
