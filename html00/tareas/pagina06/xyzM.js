import { Picture } from './img.js';

let app = document.getElementById("app");
app.innerHTML = Picture(1, "Mauricio") + Picture(4, "Lola") + Picture(54, "Pancho");

const lista = app.querySelectorAll("img");
console.log(lista);

for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener("click", () => {
        lista[i].classList.toggle("redonda");
    });
}

function saludar() {
    alert("asdjsadjdjasd");
}