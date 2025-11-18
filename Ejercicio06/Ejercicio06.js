const lista_elementosLi = document.querySelectorAll(".lista__elemento");
for (const l of lista_elementosLi) {
    l.classList.remove("oculto");
    l.classList.add("resaltado")
}
