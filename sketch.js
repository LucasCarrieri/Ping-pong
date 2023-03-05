//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}

  function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}      

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
}
  if (yBolinha + raio> height ||
     yBolinha - raio<0){
    velocidadeYBolinha *= -1;
  }
}
function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
      }
    }
function verificaColisaoRaquete(){
  if(xBolinha- raio  < xRaquete + raqueteComprimento 
    & yBolinha - raio < yRaquete + raqueteAltura & yBolinha + raio > yRaquete){
  velocidadeXBolinha *= -1;
  }
}