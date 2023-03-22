const botao = document.querySelector("button");

botao.onclick = () => { const lista = document.querySelector(".lista"); if (lista.style.display === "none") { lista.style.display = "block"; }else { lista.style.display = "none"; }

}