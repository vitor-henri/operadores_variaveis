function somar(){
    //  são 2 variaveis porem a virgula separa elas, é só para não fazer mais linhas
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
                <ul>
                    <li>Operação: SOMA </li>
                    <li>Valor 01 digitado pelo usuário: ${v1} </li>
                    <li>Valor 02 digitado pelo usuário: ${v2}</li>       
                    <li>O resultado da operação é = ${v1 + v2}</li>
                </ul>
    `
}

function subtrair(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';


    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
                <ul>
                    <li>Operação: SOMA </li>
                    <li>Valor 01 digitado pelo usuário: ${v1} </li>
                    <li>Valor 02 digitado pelo usuário: ${v2}</li>       
                    <li>O resultado da operação é = ${v1 - v2}</li>
                </ul>
    `
}

function multiplicar(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
                <ul>
                    <li>Operação: SOMA </li>
                    <li>Valor 01 digitado pelo usuário: ${v1} </li>
                    <li>Valor 02 digitado pelo usuário: ${v2}</li>       
                    <li>O resultado da operação é = ${v1 * v2}</li>
                </ul>
    `
}

function dividir(){
    let v1 = parseFloat(prompt('Valor 01')), v2 = parseFloat(prompt('Valor 02'));
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
                <ul>
                    <li>Operação: SOMA </li>
                    <li>Valor 01 digitado pelo usuário: ${v1} </li>
                    <li>Valor 02 digitado pelo usuário: ${v2}</li>       
                    <li>O resultado da operação é = ${v1 / v2}</li>
                </ul>
    `
}

function porcentagem(){
    let v1 = parseFloat(prompt('Qual valor voce quer')), v2 = parseFloat(prompt('Quantos % voce quer'));
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = 
    `
    <h2>Memória de Cálculo</h2>
                <ul>
                    <li>Operação: SOMA </li>
                    <li>Valor 01 digitado pelo usuário: ${v1} </li>
                    <li>Valor 02 digitado pelo usuário: ${v2}</li>       
                    <li>O resultado da operação é = ${v1*v2/100}</li>
                </ul>
    `
}

function limpar(){
    document.getElementById('resultado').style.display = 'none';
}