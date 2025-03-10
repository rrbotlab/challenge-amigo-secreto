// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// 2024 Ricardo G

let amigos = [];

let input = document.getElementById('amigo')

input.addEventListener('keyup', function(event) {
    // console.log(event.code + '\t' + event.key)
    input.placeholder = 'Digite um nome!';
    input.classList.remove('alert');
    event.preventDefault();
    if (event.code === 'Enter') {
        document.getElementById('btnAddAmigo').click();
    }
});

function adicionarAmigo(){

    // limpa resultado anterior antes de adicionar
    document.getElementById('resultado').innerHTML = '';
    
    let input = document.getElementById('amigo');
    let nome = input.value.trim().toUpperCase();

    if(!nome){
        //alert('Por favor insira um nome!');
        input.placeholder = 'ERRO! Por favor insira um nome!';
        input.classList.add('alert');
        input.focus();
        return;
    }else if(!amigos.includes(nome)){
        amigos.push(nome);        
    }else{
        alert('"' + nome + '"' + 'já existe na lista!');
    }
    
    input.focus();
    //input.placeholder = 'Digite um nome!';
    //input.classList.remove('alert');
    input.value = '';
    atualizarListaAmigos();

}

function atualizarListaAmigos(){
    // console.log(amigos);

    let listaAtualizada = '';
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        listaAtualizada += '<li>' + amigos[i] + '</li>';
    }
    
    lista.innerHTML = listaAtualizada;
    
}

function sortearAmigo(){

    // se a lista < 2 retorna
    if(amigos.length < 2){
        // console.log('empty');
        alert('A lista deve ter pelo menos 2 amigos para o sorteio!');
        return;
    } 

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // console.log(indiceAleatorio);

    // limpa lista, exibe sorteado, limpa array amigos 
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '<li>O amigo secreto sorteado é: ' + amigos[indiceAleatorio] + '</li>';
    amigos = [];
    
}