 
function novaTarefa() {
  var lista = document.getElementById("lista");
  var item = document.createElement("li");  
  var novo = document.getElementById("campo").value;
  
  item.appendChild(document.createTextNode(novo));
  lista.insertBefore(item, lista.childNodes[0]);
  document.getElementById("campo").value = "";
 } 
 
 var lista = document.querySelector('ul');
 lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
 }, false);
 
 document.body.onkeyup = function(enter) {
  if (enter.keyCode == 13) {
    novaTarefa();
  }
};