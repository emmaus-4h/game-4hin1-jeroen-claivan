/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = SPELEN;

var spelerX = 640; // x-positie van speler
var spelerY = 360; // y-positie van speler
var snelheidX = 0;
var snelheidY = 0;

var vijandX = 920;
var vijandY = 640;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
     if (mouseIsPressed) {
    snelheidX = mouseX - 640
    snelheidY = mouseY - 360
    snelheidX = snelheidX / 33
    snelheidY = snelheidY / 33
  } 
    spelerX = spelerX - snelheidX;
    spelerY = spelerY - snelheidY;
  
  if (spelerX < 70) {
    snelheidX = snelheidX * -1;
  }
  if (spelerX > 1210) {
    snelheidX = snelheidX * -1;
  }
  if (spelerY < 70) {
    snelheidY = snelheidY * -1;
  }
  if (spelerY > 650) {
    snelheidY = snelheidY * -1;
  }
  // vijand
  
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
 
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("pink")
  rect(0,0,1280,720)
  fill("black")
  rect(20, 20, 30, 680) // Links
  fill("black")
  rect(20, 670, 900, 30) // Onder 1
  fill("black")
  rect(20, 20, 1240, 30) // Boven
  fill("black")
  rect(1230, 20, 30, 680)  // Rechts
  fill("black")
  rect(1175, 670, 55, 30) // Onder 2
  textSize(100);
  text(frameCount / 50, 100, 150);   
  // vijand
  fill("red")
  rect(920, 670, 255, 30)
  
  // kogel

  // speler
  fill("white");
  ellipse(spelerX, spelerY , 30, 30);
  fill("black");
  ellipse(spelerX, spelerY , 20, 20);
  fill("pink");
  ellipse(spelerX, spelerY , 15, 15);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  if (spelerY > 649 && spelerX > 920 && spelerX < 1175) {
    console.log("af");
    return true;
  } 
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  frameRate(50);
  textSize(60);


  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('pink');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();  
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen");
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
     textSize(100);
    fill ("black");
    text ("GG!!", 550, 350);
    text ("druk spatie voor start", 200, 450);
    if (keyIsDown(32)) { 
     spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    // teken uitlegscherm
    console.log("uitleg");
     textSize(100);
    fill ("pink");
    rect (0,0, 1280, 720);
    fill ("black");
    text ("Klik op enter om te starten", 70, 350);
    if (keyIsDown(13)) { 
      spelerX = 640;
      spelerY = 320;
     spelStatus = SPELEN;
     frameCount = 0;
    }
    
     
  }
}
