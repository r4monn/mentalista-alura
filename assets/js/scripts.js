var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var elementoBotao = document.getElementById("bchutar");
var elementoTentativas = document.getElementById("tentativas");
var valorResultado = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    valorResultado.innerHTML = "Parabéns, você acertou!";
    elementoTentativas.innerHTML = "Número correto";
    elementoBotao.innerHTML = "Recomeçar";
    elementoBotao.setAttribute("onclick", "Recomecar(this);");
    tentativas = 0;
  } else if (chute > 10 || chute < 0) {
    valorResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    tentativas++;
    valorResultado.innerHTML = "Você errou, continue tentando";
  }

  if (chute != numeroSecreto) {
    elementoTentativas.innerHTML =
      "Você tem " + (3 - tentativas) + " tentativas";
  }

  if (tentativas == 3) {
    valorResultado.innerHTML = "Suas tentativas acabaram :c";
    elementoBotao.innerHTML = "Recomeçar";
    elementoBotao.setAttribute("onclick", "Recomecar();");
  }
}

function Recomecar() {
  numeroSecreto = parseInt(Math.random() * 11);
  elementoTentativas.innerHTML = "Você tem 3 tentativas";
  elementoBotao.innerHTML = "Chutar";
  elementoBotao.setAttribute("onclick", "Chutar();");
  document.getElementById("valor").value = "";
  valorResultado.innerHTML = "";
}