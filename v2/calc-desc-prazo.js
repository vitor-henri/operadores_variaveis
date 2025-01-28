function calc_vista(){
    let preco = 100;
    let desconto = 10;
    
    console.log(`valor = ${preco}`);
    console.log(`desconto = ${desconto}`);
    console.log(`Total = ${preco - (desconto / 100 * preco)}`);
} 

function calc_prazo(){
    let preco = 100;
    let desconto = 10;

    console.log(`valor = ${preco}`);
    console.log(`desconto = ${desconto}`);
    console.log(`Total = ${preco + (desconto / 100 * preco)}`);
}
                  
function calc_vista2(preco, desconto){
    desconto = preco * (desconto / 100);
    pagar = preco - desconto;

    console.log(`Valor da compra R$ ${preco.toFixed(2)}.`);
    console.log(`Valor do desconto R$ ${desconto.toFixed(2)}.`);
    console.log(`Valor a Vista R$ ${pagar.toFixed(2)}.`);
}

function calc_vista_validacao(preco, desconto){
    preco = parseFloat(preco);
    desconto = parseFloat(desconto);
    // verificando se o preco ou o desconto é um Not a Number
    if (isNaN(preco) || isNaN(desconto)){
        console.log('Por favor, coloque numeros não letras');
        // return serve para não mostrar um monte de erro e travar ali obrigado o usuario a por um numero
        return
    }
    let valor_desconto = preco * (desconto/100);
    let valor_pagar = preco - desconto;

    console.log(`Valor da compra R$ ${preco.toFixed(2)}.`);
    console.log(`Valor do desconto R$ ${valor_desconto.toFixed(2)}.`);
    console.log(`Valor a Vista R$ ${valor_pagar.toFixed(2)}.`);
}

calc_vista_validacao(30,0);