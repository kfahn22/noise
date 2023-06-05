const w = 800;
const h = 400;
const timeMult = 0.01; 
let particles = [];
let maxParticles = 1000;
let a = 0;
let frames = 360;
let n = 4; // number of spirals


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

  for (let i = 0; i < n; i++) {
    particles.push(new Particle((w * i) / 4, 0, 190 + i * 5));
    particles.push(new Particle(0, (h * i) / 4, 190 + i * 5));
    particles.push(new Particle((w * i) / 4, h, 190 + i * 5));
    particles.push(new Particle(w, (h * i) / 4, 190 + i * 5));
  }

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
