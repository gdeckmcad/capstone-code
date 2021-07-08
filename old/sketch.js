let fontLight;
function preload() {
  fontLight = loadFont('assets/Roboto-Light.ttf');
}

var words = [
  'Marco Young  //  38  //  Electronics Technician  //  $32,000',
  'Rebecca Dehn  //  23  //  Personnel recruiter  //  $42,000',
  'Kerry Sisco  //  60  //  Grocery Store Clerk  //  $23,000',
  'Elbert Hobbs  //  49  //  Benefits Administrator  //  $50,000',
  'Daisy Gardner  //  26  //  Warehouse Worker  //  $27,000'];

var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background('rgb(111, 75, 213)');
  textFont(fontLight);
  textAlign(CENTER);
  fill('rgb(255, 255, 230)');
  textSize(32);
  text(words[index], windowWidth/2, 150);

  button = createButton('Randomize characters');
  button.position(windowWidth/2.25, 300);
  button.style('font-family', 'Roboto');
  button.style('font-size', '14px');
  button.style('font-weight', '300');
  button.style('letter-spacing', '2');
  button.style('color', '#FFFFFF');
  button.style('border', '1px solid #FFFFFF')
  button.style('border-radius', '10px');
  button.style('padding', '16px');
  button.style('background-color', 'rgb(111, 75, 213)');
  button.style('text-align', 'center');
  button.mousePressed(changeCharacter);

  button = createButton('Select Character');
  button.position(windowWidth/2.25, 375);
  button.style('font-family', 'Roboto');
  button.style('font-size', '14px');
  button.style('font-weight', '300');
  button.style('letter-spacing', '2');
  button.style('color', 'rgb(111, 75, 213)');
  button.style('border', '1px solid #FFFFFF')
  button.style('border-radius', '10px');
  button.style('padding', '16px');
  button.style('background-color', '#FFFFFF');
  button.style('text-align', 'center');
  button.style('margin-left', '20px');
  button.mousePressed(comingSoon);
}

function changeCharacter() {

  index = floor(random(words.length));
  
  console.log(index);

  if (index == words.length) {
    index = 0;
  }
}

function comingSoon() {
  alert('Coming soon!');
        return;
}
