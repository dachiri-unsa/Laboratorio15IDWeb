const seccionPrincipal = document.querySelector("section");
const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Titulo nuevo";
const nuevoP = document.createElement("p");
nuevoP.textContent = "Descripcion generada";
const nuevoUl = document.createElement("ul");
for (let i = 1 ; i<= 3 ; i++) {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Item Nro"+i;
    nuevoUl.appendChild(nuevoLi);
}
document.querySelector("h2").remove();
seccionPrincipal.appendChild(nuevoH2);
seccionPrincipal.appendChild(nuevoP);
seccionPrincipal.appendChild(nuevoUl);
