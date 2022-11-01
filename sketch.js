let myCapture;
let mic;

//load local files
let myImage;
let mySong; 
function preload() {
  mySong = loadSound("./assets/sound/Sound.mp3");
  myImage = loadImage("./assets/images/Fiorellino.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  angleMode(DEGREES);

  myCapture = createCapture(VIDEO); 
  myCapture.hide();
}

function draw() {

push();
rotate(frameCount*5);
image(myImage,width/3,height,70,70)
pop();

if(mic) {
  let micLevel = mic.getLevel();
  let size = map(micLevel, 0,1,3,100);
  noStroke();
  fill("red");
  ellipse(100, 100, size);
}

  push();
  fill(0,51,153);
  noStroke();
  ellipse(mouseX,mouseY, 15,20);
  pop();

  push();
  translate(width/2,height/2.5);
  scale(-1,1);
  tint(0,51,153);
  image(myCapture,0,0,width/2.5,height/2);
  //filter(GRAY);
  pop();

  push();
  let msg = "move your mouse to create a nice dot pattern";
  textFont("Open Sans");
  textStyle("normal");
  textAlign(CENTER);
  textSize(20);
  noStroke();
  fill("white");
  text(msg, width/1.2, height/15);
  pop();

  push();
  let msg2 = "click to hear the sound";
  textFont("Open Sans");
  textStyle("italic");
  textAlign(CENTER);
  textSize(20);
  noStroke();
  fill("white");
  text(msg2, width/1.2, height/10);
  pop();

  push();
  let msg3 = "press P to download your picture";
  textFont("Open Sans");
  textStyle("bold");
  textAlign(CENTER);
  textSize(20);
  noStroke();
  fill("white");
  text(msg3, width/1.2, height/7.5);
  pop();

  push();
  let msg4 = "speak loudly!";
  textFont("Open Sans");
  textStyle("normal");
  textAlign(CENTER);
  textSize(15);
  noStroke();
  fill("white");
  text(msg4, width/17, height/7.5);
  pop();

  //big text
  push();
  let title = "say";
  textFont("Open Sans");
  textStyle("bold");
  textAlign(CENTER);
  textSize(width/9);
  noStroke();
  fill("white");
  text(title, width/6.3, height/2);
  pop();

  push();
  let titleh = "CHEESE";
  textFont("Rubik Glitch");
  textStyle("normal")
  textAlign(CENTER);
  textSize(width/9);
  noStroke();
  fill("white");
  text(titleh, width/1.9, height/2);
  pop();

  push();
  let myText = "and     save     your     picture";
  textFont("Open Sans");
  textStyle("bold")
  textAlign(CENTER);
  textSize(width/20);
  noStroke();
  fill("yellow");
  text(myText, width/2.4, height/1.7);
  pop();

}

//download your picture when "p" is typed
function keyTyped(){
	if (key === "p" || key === "P") {
		save("Picture.jpg");
	}
}

// play mySong when the mouse is clicked
function mouseClicked(){
  if (!mySong.isPlaying()){
   mySong.play();
  } 
}

//press to activate the microphone 
function mousePressed() {
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

 function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background("black");
  }
