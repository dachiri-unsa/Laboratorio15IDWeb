const elementoMain = document.querySelector("main");
const nuevoArticle = elementoMain.firstElementChild.cloneNode(true);
elementoMain.appendChild(nuevoArticle);
