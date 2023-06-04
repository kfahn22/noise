const w = 400;
const h = 400;
const timeMult = 0.01; // interesting effect when timeMult = 0.01
let particles = [];
let points = [];
let maxParticles = 500;
let a = 1;
let frames = 120;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0,
    };
    saveGif("GIF/swirl.gif", frames, options);
  }
}

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  colorMode(HSL);
}

function draw() {
  // add alpha to background to keep trail
  background(0, 0, 0, 0.1);

  // particles.push(new Particle(120, 120, 205));
  // particles.push(new Particle(w - 120, 120, 210));
  // particles.push(new Particle(120, h - 120, 215));
  // particles.push(new Particle(w - 120, h - 120, 220));
particles.push(new Particle(0, 0, 200));
particles.push(new Particle(w, 0, 220));
particles.push(new Particle(0, h, 220));
particles.push(new Particle(w, h, 200));

  let f = frameCount;
  for (let i = 0; i < particles.length; i++) {
    //particles[i].update(a, f * timeMult);
    particles[i].update(a * timeMult);
    particles[i].show(f * timeMult);
  }

  while (particles.length > maxParticles) {
    // remove this particle
    particles.shift();
  }
  a += 60 / frames;
}

function mousePressed() {
  save("spiral_particles.jpg");
}
