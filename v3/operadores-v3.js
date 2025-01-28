function somar(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
            <li>O resultado da operação é ${valor1} + ${valor2} = <span>${valor1 + valor2}</span> </li>
        </ul>
        `
    }
};

function subtrair(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 - v2}</span> </li>
            </ul>
        `
    }
}

function multiplicar(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 * v2}</span> </li>
            </ul>
        `
    }
};

function dividir(){
    //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente');
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 * v2}</span> </li>
            </ul>
        `
    }
};

function porcentagem(){
     //  são 2 variaveis que guardam o valor do campo que o usuario digitou
    const valor1 = parseFloat(document.getElementById('valor01').value);
    const valor2 = parseFloat(document.getElementById('valor02').value);
    // transformar os container em flex para aparecer o resultado como um container
    document.getElementById('resultado').style.display = 'flex';
    const resultado = document.getElementById('resultado');
    // verificando se o usuario digitou algum campo em branco e dando um aviso se for True
    if (valor1 === '' || valor2 === ''){
        // alerta para o usuario
        alert('Valor 1 ou Valor 2 esta em branco, digite novamente')
    }
    // caso o usuario digite 2 digitos ele faz o calculo direto e manda para o conteiner
    else{
        // usando o inner para rescrever o HTML trocando as variaveis pelos numeros
        resultado.innerHTML = 
        `
        <ul>
            <li>Operação: <span>SOMA</span> </li>
            <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
            <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
            <li>O resultado da operação é ${v1} + ${v2} = <span>${v1*v2/100}</span> </li>
            </ul>
        `
    }
};

function limpar(){
    //  o conteiner que esta com o id resultado ele vai deixar de ser flex e vai ser none, ou seja vai sumir
    document.getElementById('resultado').style.display = 'none';
    //  os campos do formularios serão armenezados
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};