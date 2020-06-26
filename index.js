var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/sketch.js', (req, res) => {
  res.sendFile(__dirname + '/sketch.js');
});

app.get('/player.js', (req, res) => {
  res.sendFile(__dirname + '/player.js');
});

app.get('/Develop.js', (req, res) => {
  res.sendFile(__dirname + '/Develop.js');
});

io.on('connection', (socket) => {
  console.log('A user connected');  
  socket.on('disconnect', () => {
    console.log('A User disconnected');
  });
  socket.on('pos', (pos) => {
    console.log('Position: X: ' + pos.x + ' Y: ' + pos.y);
    socket.on('pos', (msg) => {
      socket.broadcast.emit('pos', msg);
    });
  });
});

http.listen(3000, () => {
  console.log('Listening on https://WildWestIO--iogame.repl.co');
});
