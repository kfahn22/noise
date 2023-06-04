const w = 400;
const h = 400;
const timeMult = 0.009; // interesting effect when timeMult = 0.01
let particles = [];
let maxParticles = 100;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  colorMode(HSL);
}

function draw() {
  background(0, 0, 0, 0.05);
  // if (particles.length < maxParticles) {
  //   let p = new Particle(width / 2, height / 2);
  //   particles.push(p);
  // }
  let angle = random(0, 360);
  let speed = random(0, 2);
  for (let i = 0; i < 1; i++) {
    
    let p = new Particle(w / 2 + i*10, h / 2 + i*10, random(360), random(1, 2));
    particles.push(p);
  }

  let f = frameCount;
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(f*timeMult);
    particles[i].show(f*timeMult);
  }

  while (particles.length > maxParticles) {
    // remove this particle
    particles.shift();
  }
}
