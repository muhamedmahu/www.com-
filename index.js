var express = require('exapress')
var app = exapress()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

server.listen(3000)
app.get('/', function(request, respons) {
    respons.sendFile(__dirname + '/index.html')
})