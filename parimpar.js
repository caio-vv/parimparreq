function parImpar(numero) {
    let array = numero.split("")
    let soma = 0

    array.forEach((element) => {
        soma += +element
    });

    if (soma % 2 == 0) {
        return "impar"
    }
    return "par"
}

module.exports = {parImpar}