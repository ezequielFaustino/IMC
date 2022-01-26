const calculate = document.getElementById('calculate'); //pega o botao Calcular e salva na const

function calculateIMC(){
    const name = document.getElementById('name').value; //pega o nome e salva na const
    const height = document.getElementById('height').value; //pega a altura e salva na const
    const weight = document.getElementById('weight').value; //pega o peso e salva na const
    const result = document.getElementById('resultado'); //pega a div result para armazenar o calculo do IMC

    //validacao para ver se os campos estao preenchidos
    if(name !=="" && height !=="" && weight !==""){
        const valorIMC = parseFloat( ( weight / (height * height))).toFixed(1);
        let classificacao = '';
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso!!'
        }
        else if(valorIMC < 25){
            classificacao = 'com peso ideal!!'
        }
        else if(valorIMC < 30){
            classificacao = 'levemente acima do peso!!'
        }
        else if(valorIMC < 35){
            classificacao = 'com obesidade grau I'
        }
        else if(valorIMC < 40){
            classificacao = 'com obesidade grau II'
        }
        else{
            classificacao = 'com obesidade grau III!!'
        }
        result.textContent = `${name}, seu IMC é: ${valorIMC} e voce esta ${classificacao}`; //joga o calculo do IMC para a div result
    }else{
        let string = '';
        string+= 'Ex Altura: 1.75'+'\n'
        string+= '\n'+'Preencha todos os campos!!'
        result.textContent = string //escrever dentro do conteudo da div
    }
};
calculate.addEventListener('click', calculateIMC);
