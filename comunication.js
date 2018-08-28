
"use strict";

var zonadatos,boton,ruta,solicitud;

function inicio(){
	zonadatos=document.getElementById("zonadatos");
	boton=document.getElementById("boton");
	boton.addEventListener("click",lectura,false);
}
function lectura(){
	ruta="texto.txt";
	solicitud=new XMLHttpRequest();
	solicitud.addEventListener("load",function(event){
		zonadatos.innerHTML=event.target.responseText;},false);
			solicitud.open("GET",ruta,true);
			solicitud.send(null);	
}


window.addEventListener("load", inicio, false);