let n = 20;
let r = 100;
let x = 0;
let g = 0.1;

let pendulum1;

class Pendulum {
  constructor(p, t, v, a, l, parent) {
    this.p = p;
    this.v = v;
    this.a = a;
    this.t = t;
    this.l = l;
    this.parent = parent;
    if (this.parent == true) {
      this.child = new Pendulum(this.p, 0, 0.01, 0, 50, false);
    }
  }
  show() {
    push();
    noFill();
    translate(this.p.x, this.p.y);
    rotate(this.t);
    rectMode(CENTER);
    rect(0, this.l, 20, 20);
    line(0, this.l, 0, 0);
    if (this.parent == true) {
      translate(0, this.l);
      rotate(this.child.t);
      rect(0, this.child.l, 20, 20);
      line(0, this.child.l, 0, 0);
    }
    pop();
  }
  move() {
    this.v += this.a;
    this.t += this.v;
    if (abs(this.t) >= PI / 4) {
      this.v *= -1;
    }
    if (this.parent == true) {
      this.child.v += this.child.a;
      this.child.t += this.child.v;
      if (abs(this.child.t) >= PI / 4) {
        this.child.v *= -1;
      }
    }
  }
}

function setup() {
  createCanvas(400, 400);
  let p = createVector(width / 2, height / 2);
  pendulum1 = new Pendulum(p, 0, 0.01, 0, 100, true);
}

function draw() {
  background(220);
  pendulum1.show();
  pendulum1.move();
}