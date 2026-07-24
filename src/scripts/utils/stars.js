function pegarPosicoesRandom() {
  var pageHeight = document.documentElement.scrollHeight;
  var pageWidth = window.innerWidth;
  var randomY = Math.floor(Math.random() * pageWidth);
  var randomX = Math.floor(Math.random() * pageHeight);
  return [randomX, randomY];
}

function criarEstrelas() {
  var numStars = 300;
  for (var cont = 0; cont < numStars; cont++) {
    var star = document.createElement("div");
    star.className = "star";
    var xy = pegarPosicoesRandom();
    star.style.left = xy[1] + "px";
    star.style.top = xy[0] + "px";
    document.body.appendChild(star);
  }
}