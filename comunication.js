 // JavaScript Document
"use strict";

var zonadatos,boton,ruta,solicitud,zonaprogreso;

function inicio(){
	zonadatos=document.getElementById("zonadatos");
	zonaprogreso=document.getElementById("zonaprogreso");
	boton=document.getElementById("boton");
	boton.addEventListener("click",lectura,false);
}
function lectura(){
	ruta="video-2012-04-05-14-22-32.mp4";
	solicitud=new XMLHttpRequest();
	
		solicitud.addEventListener("loadstart",comienzo_barra,false);
	
		solicitud.addEventListener("progress", estado_barra, false);
	
		solicitud.addEventListener("load",mostrar,false);	
		
				solicitud.open("GET",ruta,true);
				solicitud.send(null);	
}
function comienzo_barra(){
	zonadatos.innerHTML="<progress value='0' max='100'></progress>";
}
function estado_barra(event){
	/*La propiedad "loaded" hace referencia al tamaño total del archivo, 
		mientras que la propiedad "total" hace referencia a la cantidad 
		descargada en un momento concreto*/
	var porcentage=parseInt(event.loaded/event.total*100);
	var barraProgreso=zonadatos.querySelector("progress");
		barraProgreso.value=porcentage;
		zonaprogreso.innerHTML=porcentage + " % descargado";
}
	
function mostrar(event){
	
	/*"event.target.responseText" es para leer un texto*/
	
	//zonadatos.innerHTML=event.target.responseText;
	
	zonadatos.innerHTML="Archivo descargado!!!";
}

window.addEventListener("load", inicio, false);
