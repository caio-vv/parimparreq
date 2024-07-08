const prompt = require('prompt-sync')()
const parImpar = require("./parimpar")

const numero = prompt("digite numero: ")

let retorno = parImpar.parImpar(numero)

console.log(retorno)