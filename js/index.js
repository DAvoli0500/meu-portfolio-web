// Chamar a função criar estrelas
criarEstrelas();

/* Função criar estrelas */
function criarEstrelas() {
    const numStars = 300;
    for (let cont = 0; cont < numStars; cont++) {
        let star = document.createElement("div");
        star.className = "star";

        var xy = pegarPosicoesRandom();
        star.style.left = xy[1] + "px";
        star.style.top = xy[0] + "px";

        document.body.appendChild(star);
    }
}

/* Função pegar posições aleatórias */
function pegarPosicoesRandom() {
    // Altura total da página
    var pageHeight = document.documentElement.scrollHeight;
    // Largura da janela do navegador
    var pageWidth = window.innerWidth;

    var randomY = Math.floor(Math.random() * pageWidth);
    var randomX = Math.floor(Math.random() * pageHeight);

    return [randomX, randomY];
}