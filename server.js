// var express = require('express');
// var app = express();
var oxford = require('project-oxford')
var client = new oxford.Client('c6a56dbc2117468ba20aed22858b8454');
var http = require('http')
var port = process.env.PORT || 1337;
var url = require('url');

var faceDetect = function(res) {
    client.face.detect({
    path: 'public/images/lebron.jpg',
    analyzesAge: true,
    analyzesGender: true,
    returnFaceId: true
    }).then(function (response) {
        console.log(response[0]);
        res.end('The age is: ' + response[0].faceId);
        console.log('The gender is: ' + response[0].faceAttributes.gender);
    });
    
    client.face.verify({
       faces: ["a838bef2-551d-482a-b641-bf59483b5b4b", "c4e0b188-b5bc-4255-9c48-6e5f23d26091"] 
    }).then(function (response) {
       console.log(response); 
    });
}

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  faceDetect(res);
}).listen(port);