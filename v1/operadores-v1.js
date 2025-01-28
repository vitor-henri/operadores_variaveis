function somar(){
    //  são 2 variaveis porem a virgula separa elas, é só para não fazer mais linhas
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

function porcentagem(){
    let v1 = parseFloat(prompt('Qual valor voce quer')), v2 = parseFloat(prompt('Quantos % voce quer'));
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').innerHTML = `O resultado é ${v1*v2/100}`;
}

function limpar(){
    document.getElementById('resultado').style.display = 'none';
}