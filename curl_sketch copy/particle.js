// From // Daniel Shiffman
// http://codingtrain.com/
// https://youtu.be/UcdigVaIYAk

class Particle {
  constructor(_x, _y, _z, _angle, _speed) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.pos = createVector(this.x, this.y, this.z);
    this.angle = _angle;
    this.speed = random(1, 2);
    this.vel = createVector(
      cos(this.angle) * this.speed,
      sin(this.angle) * this.speed
    );
    this.noiseForce = 1;
    this.noiseScale = 0.005; // inverse effect on arcs
    this.fadeRate = 0.5;
    this.particles = [];

    this.curl = createVector();
    this.alpha = 1;
    this.lightness = 100;
    // this.col = color(255, 0, 255, this.alpha);
    this.noise = new OpenSimplexNoise();
    this.timeMult = 0.0002;
  }

  getCurl(x, y, z, f) {
    const delta = 0.01;
    let n1 = this.noise.noise3D(x + delta, y, f);
    let n2 = this.noise.noise3D(x - delta, y, f);
    const cy = -(n1 - n2) / (delta * 2);

    n2 = this.noise.noise3D(y + delta, z, f);
    let n3 = this.noise.noise3D(y - delta, z, f);
    const cx = (n2 - n3) / (delta * 2);

    n1 = this.noise.noise3D(x, z + delta, f);
    n3 = this.noise.noise3D(x, z - delta, f);
    const cz = (n1 - n3) / (delta * 2);
    return createVector(cx, cy, cz);
  }

  update(f) {
    let curl = this.getCurl(
      this.pos.x * this.noiseScale,
      this.pos.y * this.noiseScale,
      this.pos.z * this.noiseScale,
      f
    );
    // this.pos.add(this.vel);
    this.pos.add(curl.mult(this.noiseForce));

    this.alpha -= this.fadeRate;
    this.lightness -= this.fadeRate * 1;
  }

  show(f) {
    noStroke();
    let curl = this.getCurl(f, 0, 0);
    let col = color(225, 100, this.lightness);
    fill(col);
    push();
    translate(this.pos);
    sphere(40);
    pop();
  }
}
