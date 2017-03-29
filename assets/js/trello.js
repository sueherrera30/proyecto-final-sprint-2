
function agregarLista(){
    var inputTexto = document.createElement("input");
    inputTexto.setAttribute("type", "text");
    inputTexto.setAttribute("placeholder", "agrega pendiente");
    document.body.appendChild(inputTexto);
    var boton = document.createElement("button");
    var textoBoton = document.createTextNode("agregar");
    boton.appendChild(textoBoton);
    document.body.appendChild(boton);
    boton.onclick = function agregarPendientes(){
      var inputPendiente =inputTexto.value;
      var elementoNuevoLista = document.createElement('LI');
      var pendiente = document.createTextNode(inputPendiente);
      elementoNuevoLista.appendChild(pendiente);
      document.getElementById('listaGeneral').appendChild(elementoNuevoLista);
    }
}

  function agregar(){
    var input = document.getElementById('pendiente').value;
    var titulo = document.createElement('p');
    var textTitulo =document.createTextNode(input);
    document.getElementById('titulo').appendChild(textTitulo);
    agregarLista();
    }
