const elementoUl = document.getElementById("bloque_ul");
const listaElementosLi = elementoUl.children;
for (const l of listaElementosLi) {
    console.log(l.textContent);
}
