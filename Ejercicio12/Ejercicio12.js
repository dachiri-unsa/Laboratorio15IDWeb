const elementoP = document.getElementsByTagName("p")[0];
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
elementoP.remove();
document.body.appendChild(nuevoDiv);
