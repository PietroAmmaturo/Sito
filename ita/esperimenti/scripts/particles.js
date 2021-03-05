const canvas = document.getElementById("particles1");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
console.log(1);

let particlesArray;

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
console.log(3);
//create particle
class Particle {
  constructor(x, y, directionX, directionY, size, color, speed) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.speed = speed;
  }
  // method to draw individual particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
    ctx.fillStyle = 'black';
    ctx.fill();
    //	console.log("draw ok");
    //	console.log(this.x);
    //	console.log(this.y);

  }
  // check particle position, check mouse position, move the particle, draw the particle
  update() {
    //check if particle is still within canvas
    if (this.x > canvas.width + 100 || this.x < -100) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height + 100 || this.y < -100) {
      this.directionY = -this.directionY;
    }

    //check collision detection - mouse position / particle position
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      //particles tend to go away from mouse
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
      if (this.directionX < 0 && (mouse.x - this.x) < 0)
        this.directionX = -this.directionX;
      if (this.directionX > 0 && (mouse.x - this.x) > 0)
        this.direction = -this.directionX;
      if (this.directionY < 0 && (mouse.y - this.y) < 0)
        this.directionY = -this.directionY;
      if (this.directionY > 0 && (mouse.y - this.y) > 0)
        this.directionY = -this.directionY;
    }
    // move particle
    this.x += this.directionX * this.speed;
    this.y += this.directionY * this.speed;
    // draw particle
    this.draw();
  }
}
//console.log(4);
// create particle array
function init() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 4000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 5) + 1;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) +
      size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) +
      size * 2);
    let directionX = (Math.random() * 5) - 2.5;
    let directionY = (Math.random() * 5) - 2.5;
    let color = '#8C5523';
    let speed = 0.5 + Math.random() * Math.random() * Math.random() * 3;
    //	console.log(size);

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color, speed));
  }
}
console.log(5);


// check if particles are close enough to draw a line between them
function connect() {
  let opacityValue = 1;
  let connectionNumber = 0;
  for (let a = 0; a < particlesArray.length; a++) {
    connectionNumber = 0;
    for (let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x)) +
        ((particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y));
      if (distance < (canvas.width / 7) * (canvas.height / 7) && connectionNumber < 50) {
        opacityValue = 1 - (distance / 20000)
        ctx.strokeStyle = 'rgba(140,85,31, ' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
        connectionNumber = connectionNumber + 1;
      }
    }
  }
}

// animation loop
function animate() {

  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    //	console.log(10);
    //	console.log(particlesArray[i].size);
  }
  connect();
}
// resize event
window.addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = this.innerHeight;
  mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
  init();
})
window.addEventListener('mouseout', function() {
  mouse.radius = 0;
})
window.addEventListener('mouseover', function() {
  mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
})


init();
animate();
