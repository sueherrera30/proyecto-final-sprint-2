
function crearLista(){
   var nuevo = document.createElement("p");
   nuevo.setAttribute("id","titulo");
   nuevo.style.fontWeight="bold";
   nuevo.style.fontSize="150%";
   var tituloValor = document.getElementById('lista');
   nuevo.innerText = tituloValor.value;
   var almancen = document.getElementById("almacenGeneral");
   almancen.appendChild(nuevo);
   tituloValor.value ="";
   var inputTexto = document.createElement("input");
   inputTexto.setAttribute("type", "text","placeholder", "agrega pendiente")
   almancen.appendChild(inputTexto);
   var boton = document.createElement("button");
   var textoBoton = document.createTextNode("agregar");
   boton.appendChild(textoBoton);
   almancen.appendChild(boton);
   boton.onclick = function agregarPendientes(){
      var inputPendiente =inputTexto.value;
      var elementoNuevoLista = document.createElement('LI');
      var pendiente = document.createTextNode(inputPendiente);
      elementoNuevoLista.appendChild(pendiente);
      var listaGeneral =  document.getElementById('listaGeneral')
      listaGeneral.appendChild(elementoNuevoLista);

}
      almacen.appendChild(listaGeneral)

}

// contenedor.insertBefore(nuevo,contenedor.firstChild)
// function agregarNuevaLista(){
//
// }
