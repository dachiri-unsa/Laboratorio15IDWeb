// Primera parte
const nuevoDiv = document.createElement("div");
nuevoDiv.setAttribute("id","contenedor");
for (let i = 1 ; i <= 3 ; i++) {
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Parrafo Nro"+i;
    nuevoDiv.appendChild(nuevoP);
}
document.body.appendChild(nuevoDiv);
// Segunda parte
const segundoP = document.querySelector("#contenedor").querySelectorAll("p")[1];
segundoP.remove();
