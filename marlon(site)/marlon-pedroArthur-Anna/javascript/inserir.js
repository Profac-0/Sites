function incluir(){
var item=document.getElementById("caixa").value
var lista=document.getElementById("lista")
var elemento=document.createElement("li")

elemento.textContent=item

lista.appendChild(elemento)


}