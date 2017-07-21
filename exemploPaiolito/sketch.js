//[ok] Plano cartesiano;
//[ok] Loop;
//[ok] Desenhando formas (rect, ellipse, line);
//[ok] Cor, linha e preenchimento;
//Inputs (mouse e teclado);
//[ok] Variáveis;
//Listas;
//Condicionais;

//Variáveis, espaços reservados na memória que serão utulizados no código:
var alturaDosOlhos = 25;
var tamanhoDosOlhos = 35;
var distanciaDosOlhos = 55;
var larguraDaBoca = 5;


//Essa função 'acontece' uma única vez, assim que o programa inicia.
function setup() {
  //cria um canvas (html5) de 800 por 600 pixels de resolucao. 
  createCanvas(800,600);
}

//Essa função acontece repetidas vezes em um loop;
function draw() {
  //atualiza o valor da variável 'larguraDaBoca' com a posição horizontal do mouse
  larguraDaBoca = mouseX;
  //pinta o fundo com um cinza escuro
  background(100);
  
  //define a espessura da linha
  strokeWeight(5);
  
  //define a cor da linha
  stroke(255,0,255);
  
  //essa serie de funcoes desenha um smile (paiolito) baseado nos valores das variáveis
  ellipse(width/2,height/2,200,200);
  ellipse(width/2-(distanciaDosOlhos/2),height/2-alturaDosOlhos,tamanhoDosOlhos,tamanhoDosOlhos);
  ellipse(width/2+(distanciaDosOlhos/2),height/2-alturaDosOlhos,tamanhoDosOlhos,tamanhoDosOlhos);
  rect(width/2-(larguraDaBoca/2),height/2+10,larguraDaBoca,10);
  
}