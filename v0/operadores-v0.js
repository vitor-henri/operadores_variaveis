function somar(){
    
    // Let é utilizado apenas para aquele escopo como se fosse uma variavel privada ou seja so vai ser utilizada quando a função for chamada
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02')); 
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').innerHTML = `O resultado é ${v1 + v2}`;
}

function subtrair(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').innerHTML = `O resultado é ${v1 - v2}`;
}

function multiplicar(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').innerHTML = `O resultado é ${v1 * v2}`;
}

function dividir(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').innerHTML = `O resultado é ${v1 / v2}`;
}
