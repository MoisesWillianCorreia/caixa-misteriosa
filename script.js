document.addEventListener("DOMContentLoaded", function () {
    var naoButton = document.getElementById("nao");
  
    naoButton.addEventListener("mouseover", function () {
      var maxX = window.innerWidth - naoButton.clientWidth;
      var maxY = window.innerHeight - naoButton.clientHeight;
      var newX = Math.floor(Math.random() * maxX);
      var newY = Math.floor(Math.random() * maxY);
  
      naoButton.style.left = newX + "px";
      naoButton.style.top = newY + "px";
    });
  
    document.getElementById("sim").addEventListener("click", function () {
      var mensagem = document.createElement("h2");
      mensagem.innerText = "Ansioso para te ver ❤️";
      document.body.appendChild(mensagem);
    });
  });
  