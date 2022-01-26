const calculate = document.getElementById('calculate'); //pega o botao Calcular e salva na const



function calculateIMC(){
    const name = document.getElementById('name').value; //pega o nome e salva na const
    const height = document.getElementById('height').value; //pega a altura e salva na const
    const weight = document.getElementById('weight').value; //pega o peso e salva na const
    const result = document.getElementById('resultado'); //pega a div result para armazenar o calculo do IMC

    //validacao para ver se os campos estao preenchidos
    if(name !=="" && height !=="" && weight !==""){
        alert('todos os campos preenchidos!!')
    }else{
        result.textContent = 'Preencha todos os campos!!' //escrever dentro do conteudo da div
    }
};


calculate.addEventListener('click', calculateIMC);
