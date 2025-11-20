const nuevoUl = document.createElement("ul");
for (let i = 1 ; i <= 7 ; i++) {
    const nuevoLi = document.createElement("li");
    const nuevoSpan = document.createElement("span");
    nuevoSpan.textContent = "Nivel interno Nro"+i;
    nuevoLi.appendChild(nuevoSpan);
    nuevoUl.appendChild(nuevoLi);
}
document.body.appendChild(nuevoUl);