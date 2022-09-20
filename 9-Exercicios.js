console.log("------------- Exercicio 1 -------------")
/*Crie uma variável chamada nomeCompleto e atribua a ela o seu nome,
após isso, imprima o valor no console utilizando a função
console.log(nomeCompleto)*/
var nomeCompleto = "Johnnatan Gomes"
console.log("\n",nomeCompleto)


console.log("------------- Exercicio 2 -------------")
/*Você irá criar duas variáveis chamadas numeroA e numeroB atribuindo
valores numéricos para ambas. Após isso crie uma terceira variável
chamada resultado atribuindo a multiplicação das duas variáveis
anteriores e imprima o valor do resultado no console*/
var numA ="100"
var numB = "10"
var resultado = ( numA * numB) 
console.log("\n", "A multiplicacao de 100*10 e igual" + resultado )


console.log("------------- Exercicio 3 -------------")
/*Você deverá criar uma função chamada saudacao que ao executá-la
deverá imprimir no console a seguinte mensagem: “Oi eu sou o Goku!”*/
function Saudacao(){ 
console.log("\n","Oi Eu sou Goku!")
}
Saudacao();

console.log("------------- Exercicio 4 -------------")
/* Crie uma função chamada multiplica que recebe dois parâmetros
numéricos. Ela deverá exibir a multiplicação desses dois parâmetros no
console*/
function Multiplica(a,b) { 
return a * b;
}
console.log( "\n","A multiplicacao de 100*10 e igual" + Multiplica(10,20));


console.log("------------- Exercicio 5 -------------")
/*Crie uma função chamada podeDirigir que receba como parâmetro da
idade em formato número, e exiba no console “Você pode dirigir” caso o
valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
dirigir”*/
function PodeDirigir(idade){
if ( idade >= 18 ){ console.log("Voce pode dirigir")}
else (console.log("Voce nao pode dirigir"))
}
PodeDirigir(19)
PodeDirigir(10)
PodeDirigir(12)
PodeDirigir(18)


console.log("------------- Exercicio 6 -------------")
/*Você deve criar um loop usando o for, que exibe no console a sequência
de números do 0 ao 20.*/
for ( var i = 0; i<= 20; i++ ){
console.log(i);
} 

console.log("------------- Exercicio 7 -------------")
/*Você deve criar um loop usando o for, que exibe no console apenas os
números ímpares da sequência de números do 0 ao 20.*/
for( var i = 0; i <= 20; i++){
    if (i % 2 != 0 ) console.log (i);
}             //ou 
// for( var i = 0; i<=20; i++){
// if(i %2==1) console.log(i)
//}

console.log("------------- Exercicio 8 -------------")
/* Crie uma função chamada tabuada que irá receber um número inteiro
como parâmetro e exibir no console a tabuada desse número 1 ao 10.*/ 

function Tabuada(x){ 
  var y = 1
  while (y<=10) {console.log( x + "x" + y + "=" + (x*y)); y++} 

}
Tabuada(9);


console.log("------------- Exercicio 9 -------------")
/*Crie uma função chamada converterEmHoras que receba um número em
minutos como parâmetro e irá exibir a quantidade em horas.*/
function ConverterEmHoras (minutos) {
    console.log ("\n", minutos + "minutos é igual" + (minutos/60) + "horas" ,"\n")
}

ConverterEmHoras(240);

 

  