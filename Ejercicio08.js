const numeroAleatorio5 = () => parseInt(Math.random()*5+1);
const arrayColores = ["#7f0000","#bd0003","#ff0000","#ff6c3e","#ffa372"]
const listaDiv = document.getElementsByTagName("div");
for (const div of listaDiv) {
    div.style.backgroundColor = arrayColores[numeroAleatorio5()-1];
}
