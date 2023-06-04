const w = 200;
const h = 200;
const timeMult = 0.01; // interesting effect when timeMult = 0.01
let particles = [];
let points = [];
let maxParticles = 500;
let a = 0;
let frames = 360;

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

  particles.push(new Particle(0, 0, 205));
  particles.push(new Particle(w, 0, 215));
  particles.push(new Particle(0, h, 215));
  particles.push(new Particle(w, h, 205));

  let f = frameCount;
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(f * timeMult);
    particles[i].show(f * timeMult);
  }

  while (particles.length > maxParticles) {
    // remove this particle
    particles.shift();
  }
  a += 360 / frames;
}

function mousePressed() {
  save("spiral_particles.jpg");
}
