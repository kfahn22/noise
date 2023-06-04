const w = 400;
const h = 400;
const timeMult = 0.01; // interesting effect when timeMult = 0.01
let particles = [];
let points = [];
let maxParticles = 500;
let a = 0;
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

  particles.push(new Particle(120, 120, 204));
  particles.push(new Particle(w - 120, 120, 210));
  particles.push(new Particle(120, h - 120, 270));
  particles.push(new Particle(w - 120, h - 120, 300));

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
