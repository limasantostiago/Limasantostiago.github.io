const imagem = document.getElementById('imagem');
const modo = document.getElementById('modo');
const botao = document.getElementById('botao');

botao.onclick = function (event) {
    var value = event.target.value;
    if (botao.value === 'fase1') {
        botao.value = 'fase2';
        imagem.src = 'decepcionado.jpg';
        modo.textContent = 'Estou decepcionado';
    }
    else if (botao.value === 'fase2') {
        botao.value = 'fase3';
        imagem.src = 'bravo.jpg';
        modo.textContent = 'Estou bravo';
    }
    else if (botao.value === 'fase3') {
        botao.value = 'fase1';
        imagem.src = 'alegre.jpg';
        modo.textContent = 'Estou alegre';
    }
}