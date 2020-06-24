var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/sketch.js', (req, res) => {
  res.sendFile(__dirname + '/sketch.js');
});

io.on('connection', (socket) => {
  console.log('A user connected');  
  socket.on('disconnect', () => {
    console.log('A User disconnected');
  });
});

http.listen(3000, () => {
  console.log('Listening on https://Laserio--jamesashwood.repl.co');
});