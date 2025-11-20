const arrayParrafos = Array.from(document.querySelectorAll("p"));
arrayParrafos.sort((a,b) => {
    const textoA = a.textContent.trim();
    const textoB = b.textContent.trim();
    if (textoA > textoB) return 1;
    else return -1;
});
for (const e of arrayParrafos) {
    document.body.appendChild(e);
}
