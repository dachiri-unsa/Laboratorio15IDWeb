const nuevo_ul = document.createElement("ul");
for (let i = 0 ; i < 5 ; i++) {
    const nuevo_li = document.createElement("li");
    nuevo_li.textContent = `Elemento ${i+1}`;
    nuevo_ul.appendChild(nuevo_li);
}
document.querySelector("section").appendChild(nuevo_ul);
