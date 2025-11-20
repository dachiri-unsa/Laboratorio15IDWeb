const listaDivs = document.querySelectorAll("div");
let cantidad = listaDivs.length;
const nuevoP = document.createElement("p");
nuevoP.textContent = "La cantidad de div es: "+cantidad;
document.body.appendChild(nuevoP);
