function comparison(a, b){
    const soma = a + b;
    const iguais = a === b;
    const maiorQueDez = soma > 10;
    const maiorQueVinte = soma > 20;

    if(iguais){
        if(maiorQueDez){
            return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`
        }
        else if(maiorQueVinte){
            return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e maoir que 20`
        }
    }
    else{
        if(maiorQueDez){
            return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`
        }
        else if(maiorQueVinte){
            return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é maior que 10 e maoir que 20`
        }
    }

    return
}

console.log(comparison(11, 11))