const listaSection = document.querySelectorAll("section");
for (let i = 0 ; i < listaSection.length ; i++) {
    listaSection[i].setAttribute("data-index",""+i);
}
