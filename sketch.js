//variáveis da bolinha
let xBolinha = 300;
var yBolinha = 200;
var diametro = 20;
var raio = diametro / 2;

//variáveis da velocidade da bolinha
var velocidadeXBolinha = 3;
var velocidadeYBolinha = 3;
var raqueteComprimento = 10;
var raqueteAltura = 90;

//variaveis da raquete
var xRaquete = 5;
var yRaquete = 150;

//variaveis do oponente
var xRaqueteOponente = 585
var yRaqueteOponente = 150;
var velocidadeYOponente;

//placar do jogo
var meusPontos = 0;
var pontosOponente =0;

//var velocidadexOponente;
var colidiu = false;

//sons do game ping pong
//var raquetada;
//var ponto;
//var trilha;

//function preloud (){
  //trilha = loadSound("trilha.mp3");
  //ponto = loadSound("ponto.mp3");
  //raquetada = loadSound("raquetada.mp3");
//}

function setup() {
  createCanvas(600, 400);
  trilha.loop();

}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaquete(xRaquete,yRaquete);
  verificaColisaoBorda();
  rect(xRaquete, yRaquete,
  raqueteComprimento, raqueteAltura);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  //colisaoRaqueteOponenteBiblioteca();
  incluiPlacar();
  marcaPonto();

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

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
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
function colisaoRaqueteBiblioteca(x, y){
    colidiu = 
    collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      //raquetada.play();
    }

}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, 
    raqueteComprimento,  raqueteAltura);
}
  function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento/2 -30;
  yRaqueteOponente += velocidadeYOponente
  //raquetada.play();
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26 );
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255); 
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
     meusPontos +=1;
    //ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente +=1; 
    //ponto.play();
  }
}