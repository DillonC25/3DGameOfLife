let rows = 10;
let cols = 10;
let dep = 10;
let spacing = 50;
let cubeSize = 40;
let zoomFactor = .5;

function createArray(rows,columns,depth){
  let array3D = new Array(rows);

    for (let i = 0; i < rows; i++) {
        array3D[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            array3D[i][j] = new Array(depth);
            for (let k = 0; k < depth; k++) {
                array3D[i][j][k] = Math.floor(Math.random() * 2);
            }
        }
    }
    return array3D;
}

let array3D = createArray(10,10,10);

function setup() {
  createCanvas(400, 400, WEBGL);
  saveGif("test", 6);
}

function draw() {
  frameRate(12);
  background(220);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  scale(zoomFactor);

  for (let i = 1; i < rows-1; i++) {
    for (let j = 1; j < cols-1; j++) {
      for (let k = 1; k < dep-1; k++) {
        let count = 0;
        
        if(array3D[i-1][j][k] == 1){
          count++;
        }
        if(array3D[i][j-1][k] == 1){
          count++;
        }
        if(array3D[i][j][k-1] == 1){
          count++;
        }
        if(array3D[i+1][j][k] == 1){
          count++;
        }
        if(array3D[i][j+1][k] == 1){
          count++;
        }
        if(array3D[i][j][k+1] == 1){
          count++;
        }
        if(array3D[i-1][j-1][k] == 1){
          count++;
        }
        if(array3D[i-1][j][k-1] == 1){
          count++;
        }if(array3D[i][j-1][k-1] == 1){
          count++;
        }if(array3D[i-1][j-1][k-1] == 1){
          count++;
        }
        if(array3D[i+1][j+1][k] == 1){
          count++;
        }if(array3D[i+1][j][k+1] == 1){
          count++;
        }if(array3D[i][j+1][k+1] == 1){
          count++;
        }if(array3D[i+1][j+1][k+1] == 1){
          count++;
        }if(array3D[i-1][j+1][k] == 1){
          count++;
        }if(array3D[i][j+1][k-1] == 1){
          count++;
        }if(array3D[i+1][j-1][k] == 1){
          count++;
        }if(array3D[i][j-1][k+1] == 1){
          count++;
        }if(array3D[i-1][j][k+1] == 1){
          count++;
        }if(array3D[i+1][j][k-1] == 1){
          count++;
        }if(array3D[i+1][j+1][k-1] == 1){
          count++;
        }if(array3D[i+1][j-1][k-1] == 1){
          count++;
        }if(array3D[i-1][j+1][k+1] == 1){
          count++;
        }if(array3D[i-1][j+1][k+1] == 1){
          count++;
        }if(array3D[i-1][j+1][k-1] == 1){
          count++;
        }if(array3D[i+1][j-1][k+1] == 1){
          count++;
        }
        
        if (count >= 7 || count <= 5) {
          array3D[i][j][k] = 0;
        } else if (count === 6) {
          array3D[i][j][k] = 1;
        }
        
        if(array3D[i][j][k] == 1){
          fill(0, 255, 0);
        }else{
          fill(255, 0, 0, 0);
        }
        
        let x = i * spacing - (spacing * rows) / 2;
        let y = j * spacing - (spacing * cols) / 2;
        let z = k * spacing - (spacing * dep) / 2;

        push();
        translate(x, y, z);
        box(cubeSize);
        pop();
      }
    }
  }
}