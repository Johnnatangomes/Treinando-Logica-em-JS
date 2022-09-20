/* Exemplo 01 - `Variaveis` 
Exemplo
Vamos criar variaveis usando let, const e var, atribuir valores,
identificar comportamentos e saídas quando tentarmos recuperar. */
var myName = "Johnnatan Gomes"
console.log(myName)

let age = "28 anos"
console.log(age)

const Person ="Johnnatan Gomes possui 28 anos e tem 1,80 de altura"
console.log(Person)

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 2
`Concatenar x interpolar` Vamos criar variaveis usando 
let, const e var, atribuir strings e vamos concatenar e interpolar. */
var myName ="Johnnatan gomes "
let city = "Guanhães"
const country = "Brasil"
console.log( 
    "O garoto que estuda desenvolvimento web é conhecido como "
    + `${myName}` +
    " mora na cidade de " 
    + `${city}` + 
    " no país chamado "
     + `${country}`
)
console.log("---------------------------------------------------------------------------------------")
/*Exemplo 3
`Média entre números` 
Crie uma variavel e atribua como valor uma operacao de média entre 5 números inteiros e positivos. */
function media (a,b,c,d,e){
    return (a + b + c + d + e)/5
    
}
console.log("A média é igual a: ",media(2,4,6,8,10))

/*Exemplo 4 
`Quero lucrar` 
Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu 
valor é R$300, por quanto devo vendê-la para lucrar 25%? 
console.log( "60% do valor da sua bike corresponde a R") */
console.log("---------------------------------------------------------------------------------------")
/*Exemplo 5
`Quero somar` | Faça um programa que peça dois números e imprima no console a soma desses dois números. */

function soma(a,b){
    return a + b
}
console.log ("A soma é igual a:", soma(10,10))
console.log("---------------------------------------------------------------------------------------")
/*Exemplo 6
Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%? */

function desconto(valor){
    let desconta = valor * (25/100) 
    let precoFinal = 3000 - desconta
    return  precoFinal 
    
}
 console.log(`O preco de venda com o desconto será de: R$`,desconto(3000));
 
 console.log("---------------------------------------------------------------------------------------")
/*Exemplo 07 
`conversor de medidas` 
Escreva um programa que receba um valor em metros e o exiba no console convertido em milímetros. */

function conversorEmMilimetros(valor){
    let metros = 200
    let milímetros = metros / 1000
    return milímetros
}
console.log("O valor de 200 metros convertidos em milimetros é igual a : ", conversorEmMilimetros(200),"mm")
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 08
`Semaforo, sinal ou sinaleira?` 
Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito. */

var sinal = "vermelho"

switch (sinal){
    case "vermelho":
    console.log("Sinal vermelho, Aguarde");
    break;

    case "amarelo":
    console.log("Sinal amarelo, Atenção");
    break;

    case "Verde":
    console.log("Sinal verde, Avance");
    break;
    
    default:
        console.log( "Sinal em manutenção")
}
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 9
Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, 
para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir 
nenhum dos casos acima imprime o próprio número. */

let resultado = FizzBuzz(17);
console.log(resultado)

function FizzBuzz (entrada) {

    if ((entrada % 3 === 0) && (entrada % 5 ===0))
    return `FizzBuzz`

    if(entrada % 3 === 0)
    return `Fizz`
    
    if (entrada % 5 === 0)
    return `Buzz`
    
    return entrada;
}
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 10  
`É dia de aula?`
 Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.
*/
console.log("As aulas irão acontecer: ")
var diasDeAula = [ "Segunda", "Terça", " Quarta", " Quinta", " Sexta" , " Sabado", " Domingo" ]
console.log(diasDeAula [0] + diasDeAula [2] + diasDeAula [5])

//outra forma de se ter o resultado 
//console.log("As aulas irão acontecer: ")
//var diasDeAula = [ "Segunda", "Quarta" , "Sabado", ]
//for (var s = 0 ; s < diasDeAula.length; s++ ){
//console.log(diasDeAula[s]);

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 11
`IMC`
Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.*/

function imc(m,kg){
    return kg / m
}
console.log("O IMC de SANDRO COSTA é igual a:", imc(1.74,82));

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 12
 `Par ou Impar` 
Crie uma função que determina se um número é par ou impar. */
function parOuImpar(valor){
    if (valor % 2 == 0) 
    return `par`

    else (valor % 3 == 0) 
    return `impar`  
}
console.log( "O numero informado é:", parOuImpar(8))
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 13
`Tabuada` 
Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. */
function tabuada(x){
    var y =1
    while (y <= 10){
        console.log( x + " x " + y + " = " + (x*y)); y++}    
    
}
tabuada(9)
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 14 
`Pares` 
Imprima na tela os números pares existentes entre 0 e 100.. */

console.log("Os números pares de 0 a 100 são:")
for(var i = 0; i <= 100; i++){
    if( i % 2 === 0) console.log((i))
}
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 15 
`Conversor de temperatura` 
Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit. */
 function conversorTemperatura(tc){
    console.log("A temperatura dada em °C corresponde a:",(tc * 1.8) + 32 +" °F")

 } conversorTemperatura(23)

 console.log("---------------------------------------------------------------------------------------")
/* Exemplo 16 
Fatorial` 
Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo:  3! = 3 * 2 * 1 // 6 */
console.log("O fatorial do numero informado é igual a:") 
function fatorial(valor){
    let x = 1;
    for( let i = valor; i >= 1; i -= 1){
        x *= i
    }
    console.log(x)
}
fatorial(4)

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 17 
Multiplica
Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre eles. */
function multiplica(a,b){
    return a * b
}
console.log ("O resultado da multiplicacao dos numeros informados é igual a:",multiplica(10,12));

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 18 
Porcentagem
Crie uma função que calcula 5% de desconto retornando o valor do desconto. */
function desconta(x){
    return x * (5/100)

} 
console.log("O valor correspondente a 5% de desconto do produto será de: R$", desconta(1000))

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 19 
Conversor de moeda
Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia. */
function cotação(valor, dia){
    return valor / dia
}
console.log("A conversao do valor informado em real é igual a:U$", cotação(1496,5))

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 20 
For/Break/Continue
Utilize a estrutura de repetição for para imprimir no console  conforme instruções: 
    a) números de 1 a 50  
    b) quando chegar no número 25 interrompa a instrução e pare o loop 
    c) quando chegar no número 10 pule a instrução
*/
for( let i = 1; i <= 50; i++){
    console.log(i)
}
for(let i = 1; i <= 50; i++){
    console.log(i)
    if (i === 25) { break}
}
for( let i = 1; i<=50; i++){
    console.log(i)
    if( i === 10){break};
};

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 21
`10 em 10`
Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE" */
let x = 10;

while( x < 100) {

    x += 10;

    if( x === 60 || x === 90){ 
        console.log("CONTINUE")
    continue;
}
console.log(x)
}

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 22 
`conta bancária`
Vamos criar uma conta bancária com as 3 operações básicas? rs
a) A conta deverá iniciar com o saldo de 100
    b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
    c) Deverá ser possível passar 1 valor para a operação escolhida
    d) Deverá retornar o resultado e imprimir no console o saldo atual| */

    function conta (movimento, valor){
        let inicio = 100;

        switch(movimento){
            case 'depositar':
                inicio += valor;
                break

            case 'consultar saldo':
                inicio
                break

            case 'sacar':
                inicio -= valor;
                break
        
        default: 
        console.log('Digite corretamente')
                
        }
        return `Saldo total ${inicio}`

    };
    console.log(conta('depositar', 1500));
    console.log(conta('consultar saldo'));
    console.log(conta('sacar', 15));

console.log("---------------------------------------------------------------------------------------")    
/* Exemplo 23
`5 em 5` 
Crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, 
exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".*/
let c = 5;

while (c < 60){

    c += 5

    if (c === 35 || c === 45){
        console.log("PULOU")
        continue;
    }
       console.log(c)
}

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 24 
`Dias em horas`
Crie um algoritmo que converte dias em horas, quando recebe um número de dias. */
function converterDiasemHoras(dia){
    let h = 24
    let resultado = dia * h
    return resultado

    
}

console.log("O valor dgitado em dias corresponde a:", converterDiasemHoras(14965)+ "h")

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 25 
`É par` 
Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.*/
function par (a,b) {
 console.log( a /b )
 
if ( a % b === 0){ 
    return "É par";
}
}
console.log( par(4,2));

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 26 
`Repetição`
Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
    a) números de 1 a 100  
    b) quando chegar no número 50 interrompa a instrução e pare o loop 
    c) quando chegar no número 50 pule a instrução */
for( let x = 1; x <= 100; x++){
    while (x <= 100) { 
        console.log(x)
        break
        
    }
}
for(let x = 1; x <= 100; x++){
    while(x === 50){ 
        console.log(x)
        break
    }
}

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 27
`Calculadora` 
Vamos criar uma calculadora com as 4 operações matemáticas básicas?
*/







console.log("---------------------------------------------------------------------------------------")
/* Exemplo 28
`Desconto`
Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar. */

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 29 
`Viagem`
Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem..*/
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 30 
`Jantar`
Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago. */
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 31 `
Dia da semana`
Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente. */

function diasDasemana(dia) {
    if ( dia == 1) {
        return 'Segunda-feira'
    }
    if( dia == 2){ 
        return 'Terça-feira'
    }
    if( dia == 3){
        return 'Quarta-feira'
    }
    if( dia == 4){
        return 'Quinta-feira'
    }
    if( dia ==5 ){
        return 'Sexta-feira'
    }
    if( dia == 6){
        return 'Sábado'
    }
    if (dia == 7){
        return 'Domingo'
    }
    else { return 'Não corresponde a nenhum dia da semana'}
}
console.log(diasDasemana(3))

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 32 
`Números`
Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais". */
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 33  `
Impar/par`
Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro. */
console.log("---------------------------------------------------------------------------------------")
/* Exemplo 34 
`Boletim escolar`
Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
- Se a media for igual ou maior que 7 - Aprovado
- Se a media for maior e igual a cinco e menor que 7 - Recuperação
- Se a media for menor que 5 - Reprovado|*/
function boletim(a,b,c){
    let result = (a + b + c)/3
    if( result >= 7 ){
        console.log ("Aprovado")
    };
    if( result >= 5 && result < 7){
        console.log ("Recuperação")
    };
    if( result < 5){
        console.log ("Reprovado")
    }
}
boletim(4,5,8)

console.log("---------------------------------------------------------------------------------------")
/* Exemplo 35 
`Maior de idade`
Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor. */


