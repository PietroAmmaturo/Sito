const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
console.log(1);

let drawX = 0;
let drawY = 0;
let bubbleNumber = 1;
let bubbleArray;
bubbleArray = [200];
//get mouse position
let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80)
}
console.log(2);
window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  }
);

function randomColor() {
  let rand = (Math.random() * 12);
  if (rand < 4)
    ctx.fillStyle = 'rgba(255, 240, 0, 0.6)'; //giallo
  else if (rand < 7)
    ctx.fillStyle = 'rgba(255, 0, 255, 0.8)'; //viola
  else if (rand < 10)
    ctx.fillStyle = 'rgba(100, 255, 200, 1)'; //verde
  else if (rand < 13)
    ctx.fillStyle = 'rgba(150, 50, 50, 0.4)'; //bordeaux
}
console.log(3);
//create particle
class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  // method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x * (Math.random() * Math.random()), this.y * (Math.random() * Math.random()), this.size, 0, Math.PI * 0.01, true);
    randomColor();
    ctx.fill();
    console.log(4);
  }
  // check particle position, check mouse position, move the particle, draw the particle
  update() {
    bubbleNumber = bubbleNumber % 200;
    bubbleArray[bubbleNumber] = new Particle(mouse.x + (Math.random()),
      mouse.y + (Math.random() * 20) - (Math.random() * 20), Math.random() *
      Math.random() * 20);
    bubbleNumber++;
    this.draw();
    drawX = mouse.x;
    drawY = mouse.y;
  }

  update1(i) {
    bubbleArray[i].size = bubbleArray[i].size / (200 / i);
  }
}


// animation loop
function animate() {

  setInterval(function() {
    c()
  }, 20);

  function c() {
    requestAnimationFrame(animate);
    for (let i = 0; i < bubbleArray.length; i++) {
      bubbleArray[i].update1(i);
      bubbleArray[i].update();
    }
  }
}
// resize event
animate();
