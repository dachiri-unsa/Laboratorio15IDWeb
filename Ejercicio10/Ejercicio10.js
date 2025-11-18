const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Este es el nuevo título H3";
const primerP = document.querySelector("p");
document.body.insertBefore(nuevoH3, primerP);
