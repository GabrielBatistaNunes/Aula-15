
/*
1.

a)
o código irá dizer se pode ou não dirigir baseado na idade e carteira de motorista

b)
Caso a idade seja 18 ou mais e tenha carteira de motorista,
será emitido no console um aviso dizendo que a pessoa pode dirigir.
Mas se a idade for menor a 18 ou não tiver carteira, 
ele irá dizer que a pessoa não pode dirigir
*/

/*
javascriptCopy code
const pessoa = {
nome: "Alice",
idade: 25,
temCarteiraDeMotorista: true
}
if (pessoa.idade >= 18 && pessoa.temCarteiraDeMotorista) {
console.log(`${pessoa.nome} pode dirigir!`)
} else {
console.log(`${pessoa.nome} não pode dirigir.`)
}
*/

/*

2.
a) Ele diz baseado na informação dada, ele diz se o animal é ou não carnívoro

b) Leão é um animal carnívoro.

*/ 

/*
const animal = {
	nome: "Leão",
	carnivoro: true
	}
	if (animal.carnivoro) {
	console.log(`${animal.nome} é um animal carnívoro.`)
	} else {
	console.log(`${animal.nome} não é um animal carnívoro.`)
	}
*/
/* 
3.
a)Ele diz em relação a variável número se ela é maior ou menor e se é 
par ou ímpar

b) O número é maior do que 5
   O número é par

*/

/* 
const numero = 10;
if (numero > 5) {
console.log("O número é maior do que 5.");
} else {
console.log("O número é menor ou igual a 5.");
}
if (numero % 2 === 0) {
console.log("O número é par.");
} else {
console.log("O número é ímpar.");
}
*/

/* 
B.
1.
*/
/*
const pessoa = {
	idade:[prompt("qual sua idade")]
	}
	if (pessoa.idade >= 18) {
	console.log(`Você é maior de idade`)
	} else {
	console.log(`Você é menor de idade`)}
*/

// 2.
/*
let hora = prompt("qual o seu turno");
if(hora === "manhã"){
	console.log("Bom Dia!")}
else if (hora === "tarde"){
	console.log("Boa Tarde!")
}
else if (hora === "noite"){
	console.log("Boa noite!")
}
else
	console.log("Não sei em qual horário você está, mas bom dia!")
*/
// 3.
/*
const turno = prompt("Qual seu turno")
switch (turno) {
	case "manhã":
		console.log("Bom Dia!");
		break;
	case "tarde":
		console.log("Boa tarde!");
	case "noite":
		console.log("Boa noite");
		break;
	default:
		console.log("Não sei em qual horário você está, mas bom dia!")
		break;
};
*/
// 4.
/* 
function aluno(nome, idade, tipodecurso, tembolsa){
if (idade < 30 && tipodecurso == ("sim") && tembolsa == ("não")){
	return (`${nome} você pode se candidatar a uma bolsa de estudos!`)}
	else {return(`Desculpe ${nome}, mas você não atende aos requisitos para a bolsa.`)}
};
console.log(aluno(prompt("Seu nome"), Number(prompt("Sua idade")), 
(prompt("está matriculado em algum curso?")), (prompt("tem bolsa?"))));
  */

// 5.

function produto(nome, preço, desconto, fretegratis){{
let preçodesconto = ((preço / 100) * desconto)
if (desconto > 0 && fretegratis == "sim"){
	return (`Item: ${nome},  Preço: ${preço} Preço final: ${preçodesconto} Tem frete?: sim`)}
	else if (desconto > 0 && fretegratis == "não")
	{return (`Item: ${nome}, Preço: ${preço} Preço final: ${preçodesconto}`)}
	else if (desconto == 0 && fretegratis == "sim")
	{return (`Item: ${nome}, Preço: ${preço} Tem frete?: sim`)}
	else
	{return ("Item:", preço)}
}
};
console.log(produto(prompt("nome do produto"), Number(prompt("preço do item")), 
Number(prompt("quantia de desconto")), prompt("Tem frete?")));
