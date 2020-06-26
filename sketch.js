var socket = io();
var player;

const worldWidth = 37500;
const worldHeight = 37500;

function setup() {
  cursor(CROSS) //a cross cursor
  createCanvas(window.innerWidth, window.innerHeight);
  player = new Player(Math.floor(Math.random() * 750), Math.floor(Math.random() * 750));
  socket.on('pos', function drawScreen(msg) {  
    background(255, 230, 103);
    // fill(255, 230, 103);
    strokeWeight(4);
    fill(79, 79, 79);
    strokeWeight(2);
    circle((msg.x+20)-player.pos.x+window.innerWidth/2-20, (msg.y+20)-player.pos.y+window.innerHeight/2-20, 40);
    fill(209,191,120);
    ellipse(msg.x-player.pos.x+window.innerWidth/2, msg.y-player.pos.y+window.innerHeight/2, 32, 50);
    circle(msg.x-player.pos.x+window.innerWidth/2, msg.y-player.pos.y+window.innerHeight/2, 25);
    player.draw();
    player.displayWeapon();
});
}

function draw() {
  emitData();
//  textSize(50); //The title-
//  textStyle(BOLD);
//  text('Wild West Royalle', window.innerWidth/2,  890, window.innerHeight/2 + window.innerHeight/2-425, 500);
//  fill(97, 55, 0);
  player.update();
}


function emitData() { ;
  posData = {
    x: player.pos.x,  
    y: player.pos.y
  };
  socket.emit('pos', posData);
}
