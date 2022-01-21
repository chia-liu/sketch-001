let bg;
const COL = createCols("https://coolors.co/007f5f-2b9348-55a630-80b918-aacc00-bfd200-d4d700-dddf00-eeef20-ffff3f");

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	bg = createGraphics(width, height);
	bg.background(255,20);
  bg.noStroke();
  for (let i = 0; i < 300000; i++) {
    var x = random(width);
    var y = random(height);
    var s = noise(x*0.01, y*0.01)*1;
    bg.fill(250,80);
    bg.rect(x, y, s, s);
  } 
}

function draw() {
	randomSeed(0);
	noStroke();
	for(let i = 0; i < 150; i++){
		fill(COL[int(random(COL.length))]);
		let s = random(20,40)* (random(1,2)+(sin(frameCount/100+random(100))+1)*0.5);
		let x = (random(width)+frameCount*random(1,10))%(width+s);
		let y = (random(height)+sin(frameCount/100)*height*random(0.2,1) + height)%(height+s)-s;
		ellipse(x,y, s, s);
	}
	image(bg,0,0);
}

function createCols(_url){
	
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = '#' + arr[i];
  }
  return arr;
	
}