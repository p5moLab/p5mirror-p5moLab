// https://editor.p5js.org/jht1900/sketches/SQvdG-9bM
// video clock

let nwidth = 640;
let nheight = 480;
let xgap = nwidth / 9;
let ygap = nheight / 9;
let x0;
let y0;
let capture;
let ang = 0;
let astep = 0.1;
let astart = 15; //180;
let aend = 360;
let aclockStep = 0.1;
let rscale = 2;
let routterScale = 1;

let phase = 0;
let zoff = 0;
let noiseMax = 5;

function setup() {
  createCanvas(nwidth, nheight);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
  x0 = int(nwidth / 2);
  y0 = int(nheight / 2);
}

function draw() {
  // colorMode(HSB);
  strokeWeight(1);
  // background(0);

  // image(img,dx,dy,dWidth,dHeight,sx,sy,[sWidth],[sHeight],
  let img = capture.get();
  image(img, 0, 0, nwidth);

  draw_rad(img);
}

function draw_rad(img) {
  for (let ang = astart; ang < aend; ang += astep) {
    let r1 = xgap / 2;
    let rang = radians(ang);
    // let x1 = r1 * cos(rang);
    // let y1 = r1 * sin(rang);

    let xoff = map(cos(rang + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(rang + phase), -1, 1, 0, noiseMax);
    let r2 = map(noise(xoff, yoff, zoff), 0, 1, r1, r1 * rscale);
    let x1 = r2 * cos(rang);
    let y1 = r2 * sin(rang);

    let c1 = img.get(x0 + x1, y0 + y1);
    stroke(c1);
    fill(x1);
    fill(0);
    circle(x0 + x1, y0 + y1, 5);

    let r3 = nwidth * routterScale;
    let x2 = r3 * cos(rang);
    let y2 = r3 * sin(rang);
    line(x0 + x1, y0 + y1, x0 + x2, y0 + y2);
  }
  phase += 0.003;
  zoff += 0.01;
  astart += aclockStep;
  aend += aclockStep;
}

// https://editor.p5js.org/jht1900/sketches/TWxfoAfA6
// video radial perlin

// https://editor.p5js.org/codingtrain/sketches/sy1p1vnQn
// Polar Perlin Noise Loop

// https://editor.p5js.org/jht1900/sketches/ydWiCsI2z
// video radial

// https://editor.p5js.org/jht1900/sketches/-Ypn6ODK_
// video scan radial

// https://editor.p5js.org/jht1493/sketches/mEXETIijv
// video scan gap center

// https://editor.p5js.org/jht1493/sketches/oHVI5tU4BP
// video scan gap

// https://editor.p5js.org/jht1493/sketches/Q9jdcICpW
// video scan mouseY

// https://editor.p5js.org/jht1493/sketches/gnx2IQn1N
// video scan

// https://github.com/processing/p5.js/wiki/Beyond-the-canvas#capture-live-video
