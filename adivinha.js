let res = document.querySelector('section#result');
let computador = 0;
let jogador = 0;

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    computador = min + Math.trunc(dif * aleatorio);
}

function jogar() {
    jogador = Number(window.prompt("Qual o seu palpite? "));
    if (jogador < computador) {
        res.innerHTML += `<p>Você pensou eim: ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p> Você pensou eim: ${jogador}. Meu número é <small>menor</small>!</p>`
    } else if (jogador == computador) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha pensado exatamente no número ${computador}</p>`
        document.getElementById('butao').style.visibility = 'hidden'
    }
} 