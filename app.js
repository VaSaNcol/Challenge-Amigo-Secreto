// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoInput = document.getElementById('amigo');
let amigos = [];

function agregarAmigo() {
    let nombre = amigoInput.value.trim();
    
    if (nombre === ''){
        alert ('Por favor, ingresa un nombre válido');
        return;
    }


    amigos.push(nombre);

    let li = document.createElement('li');
    li.textContent = nombre;
    document.getElementById('listaAmigos').appendChild(li);

    amigoInput.value = '';
    amigoInput.focus();


}

function sortearAmigo() {

    if(amigos.length === 0) {
        alert('Primero añade nombres a la lista');
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[amigoAleatorio];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    let resultadoItem = document.createElement('li');
    resultadoItem.textContent = `¡${amigoSecreto} es tu amigo secreto!`;
    resultadoItem.classList.add('resultado-destacado');

    resultadoElement.appendChild(resultadoItem);
    
}

amigoInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});