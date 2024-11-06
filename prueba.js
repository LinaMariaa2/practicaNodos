console.log("Dom de la consola");

// captura el encabezado del doc con get elemntby
var head = document.getElementById("head");// id
console.log(head);

var encabezado = document.getElementsByClassName("encabezado"); //clase
console.log(encabezado);

var superior = document.getElementsByTagName("header"); //etiqueta
console.log(superior);

var tituloNombre = document.getElementsByClassName('title'); //clase
console.log(tituloNombre);


// captura del cuerpo del doc con query selector
var container = document.querySelector('#container'); //id
console.log(container);

var cuerpo = document.querySelector(".cuerpo"); //clase
console.log(cuerpo);

var titulo= document.querySelector('titulo');//etiqueta
console.log(titulo);

var main= document.querySelector('main');//etiqueta
console.log(main);

var h5tit = document.querySelector('.h5tit');
console.log(h5tit);

// captura del footer con query selector

var pieDePagina = document.querySelector('.pieDePagina');
console.log(pieDePagina);

var parrafos = document.querySelectorAll('.parrafos');
console.log(parrafos);
 

//crear elementos html desde Js

var h2 = document.createElement("h2");
console.log(h2);

// contenido el elemento desde javascript por medio de nodos

var textoh2 = document.createTextNode('txt h2 desde JS');
console.log(textoh2);

//agregar el nodo h2 al dom dentro del header
// 1 paso. capturar el header 

var header = document.querySelector('.encabezado');
console.log(header);

// 2 paso. agregar nodo al Dom
header.appendChild(h2);
h2.appendChild(textoh2);

//ejrcicio

var h4 = document.createElement('h4');
console.log(h4);
var textoh4 = document.createTextNode('txt h4 desde JS');
header.appendChild(h4);
h4.appendChild(textoh4);

// Agregar section
var section = document.createElement('section')
console.log(section);
var article = document.createElement('article');
var article2 = document.createElement('article');

header.appendChild(section);
section.appendChild(article);
section.appendChild(article2);

var parrafo = document.createElement('p');
var parrafo1 = document.createElement('p');
var textp = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor ab, sit minima cumque inventore');
var textp2 = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolor ab, sit minima cumque inventore');

parrafo.appendChild(textp);
parrafo1.appendChild(textp2);
article.appendChild(parrafo);
article2.appendChild(parrafo1);

var img = document.createElement('img');
img.src = 'img/imagen.jpeg';
var img2 = document.createElement('img');
img2.src = 'img/imagen.jpeg';
article.appendChild(img);
article2.appendChild(img2);

//estilos desde JS para el doc html


article.style.border = '1px solid black';
article.style.margin= '20px';
article.style.backgroundColor = '#ADD8E6';


article2.style.margin= '20px';
article2.style.border = '1px solid black';
article2.style.backgroundColor = '#ADD8E6';

parrafo.style.padding = '10px';
parrafo.style.fontFamily = 'times new roman';
parrafo.style.aling = 'times new roman';

img.style.paddingLeft = '165px';
img2.style.paddingLeft = '165px';

parrafo1.style.padding = '10px';
parrafo1.style.fontFamily = 'times new roman';

section.style.border = '1px solid black';
section.style.display = 'flex';
section.style.height = '40vh';

h2.style.fontFamily = 'fantasy';
h2.style.color  = '#87CEEB';
h2.style.fontSize = '30PX';

h4.style.fontFamily = 'fantasy';
h4.style.color  = '#87CEEB';
h4.style.fontSize = '20PX';

pieDePagina.style.border = '1px solid black';
pieDePagina.style.color = 'gray';
pieDePagina.style.padding= '10px';
pieDePagina.style.fontSize = '16px';


main.style.height = '20vh';
h5titstyle.color  = '#87CEEB';


