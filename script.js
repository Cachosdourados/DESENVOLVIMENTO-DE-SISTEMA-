// definindo as informaçoes de Maria
const pesoMaria =55;// em kg 
const alturaMaria = 1.65;// em metros
const idadeMaria =25; // em anos 
//Definindo as informaçoes de Pedro
const pesoPedro = 70;//em kg
const alturaPedro = 1.80; // em metros
const idadePedro =28;//em anos 
//funçao para calcular o IMC
function calcularIMC(peso,altura){
return peso / (altura * altura);
}
//Calculando o IMC de Maria
const imcMaria =calcularIMC(pesoMaria, alturaMaria);
//Calculando o IMC de Pedro 
const imcPedro = calcularIMC(pesoPedro ,alturaPedro);
//Exibindo os resultados os resultados 
alert("IMC de Maria:",imcMaria.tofixed(2));
alert("IMC de Pedro:",imcPedro.tofixed(2));

