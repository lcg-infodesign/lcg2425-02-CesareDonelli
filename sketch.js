let baseSize;
let cols, rows;
let padding;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(255);

  setupGrid();
  drawGrid();
}

function setupGrid() {
  cols = int(windowWidth / 100);
  rows = int(windowHeight / 100);
  
  baseSize = min(windowWidth, windowHeight) / (cols + 2);
  padding = baseSize * 0.5;
}

function drawGrid() {
  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * (baseSize + padding) + padding;
      let y = j * (baseSize + padding) + padding;
      createSquareGlyph(x, y, baseSize);
    }
  }
}

function createSquareGlyph(x, y, size) {
  let squareCount = int(random(5, 10));  // Numero casuale di quadrati
  let maxSquareSize = size * 0.5; // Dimensione massima dei quadrati

  // Disegna un quadrato nero al centro
  fill(0);
  rect(x - maxSquareSize / 2, y - maxSquareSize / 2, maxSquareSize, maxSquareSize);

  for (let i = 0; i < squareCount; i++) {
    let squareSize = random(maxSquareSize * 0.2, maxSquareSize); // Dimensione casuale dei quadrati
    let squareX = x + random(-maxSquareSize * 0.5, maxSquareSize * 0.5);
    let squareY = y + random(-maxSquareSize * 0.5, maxSquareSize * 0.5);
    fill(random(255), random(255), random(255), 150); // Colore casuale con trasparenza
    rect(squareX - squareSize / 2, squareY - squareSize / 2, squareSize, squareSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setupGrid();
  drawGrid();
}
