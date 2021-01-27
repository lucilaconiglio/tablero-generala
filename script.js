/* function jugadores(){
    let jugador1 = prompt('Nombre jugador');

    alert(jugador1 + ' comienza el juego');
   
}

console.log(jugadores()); 
 */

/* function Player(jugador1, jugador2){
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;

    console.log(jugador1)
    console.log(jugador2)
}

var nombre1 = prompt('Nombre')
var nombre2 = prompt('Nombre')

console.log(Player(nombre1, nombre2))

function quienGano() {
    if
} */

/* function cantidadJugadores(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6){
    this.jugador1 = jugador1;
    this.jugador2 = jugador2;
    this.jugador3 = jugador3;
    this.jugador4 = jugador4;
    this.jugador5 = jugador5;
    this.jugador6 = jugador6;


    var cantidad = parseInt(prompt('Seleccione la cantidad de jugadores')); // minimo 2 jugadores maximo 6

    if (cantidad <2) {
        console.log('No se puede jugar de a 1');
    } else if (cantidad === 2) {
        var jugador1 = prompt('Nombre o inicial del jugador 1');
        var jugador2 = prompt('Nombre o inicial del jugador 2');
    } else if (cantidad === 3) {
        var jugador1 = prompt('Nombre o inicial del jugador 1');
        var jugador2 = prompt('Nombre o inicial del jugador 2');
        var jugador3 = prompt('Nombre o inicial del jugador 3');
    } else if (cantidad === 4) {
        var jugador1 = prompt('Nombre o inicial del jugador 1');
        var jugador2 = prompt('Nombre o inicial del jugador 2');
        var jugador3 = prompt('Nombre o inicial del jugador 3');
        var jugador4 = prompt('Nombre o inicial del jugador 4');
    } else if (cantidad === 5) {
        var jugador1 = prompt('Nombre o inicial del jugador 1');
        var jugador2 = prompt('Nombre o inicial del jugador 2');
        var jugador3 = prompt('Nombre o inicial del jugador 3');
        var jugador4 = prompt('Nombre o inicial del jugador 4');
        var jugador5 = prompt('Nombre o inicial del jugador 5');
    } else if (cantidad === 6) {
        var jugador1 = prompt('Nombre o inicial del jugador 1');
        var jugador2 = prompt('Nombre o inicial del jugador 2');
        var jugador3 = prompt('Nombre o inicial del jugador 3');
        var jugador4 = prompt('Nombre o inicial del jugador 4');
        var jugador5 = prompt('Nombre o inicial del jugador 5');
        var jugador6 = prompt('Nombre o inicial del jugador 6');
    } else {
        console.log('La cantidad de jugadores maxima es de 6')
    }

}

console.log(cantidadJugadores(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6)) */



let jugadores = () => {

    let cantidadJugadoresPosibles = [2, 3, 4, 5, 6, 7];
    let cantidadJugadores = parseInt(prompt('Cantidad de 2 a 7 jugadores'));
    
    
    if (cantidadJugadores === 2) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,1);
        console.log(cantidadJugadoresPosibles);
       
    } else if (cantidadJugadores === 3) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,2);
        console.log(cantidadJugadoresPosibles);

    } else if (cantidadJugadores === 4) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,3);
        console.log(cantidadJugadoresPosibles);

    } else if (cantidadJugadores === 5) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,4);
        console.log(cantidadJugadoresPosibles);

    } else if (cantidadJugadores === 6) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,5);
        console.log(cantidadJugadoresPosibles);

    } else /*cantidad de jugadores 7*/ {

        console.log(cantidadJugadoresPosibles);
    }

}

console.log(jugadores());



function Player(nombre, puntos, puntosTotales){
    this.nombre = nombre;
    this.puntos =  {

        p1: null,

        p2: null,
        
        p3: null,

        p4: null,

        p5: null,

        p6: null,

        escalera: null,

        full: null,
        
        poker: null,

        generala: null,

        generalaDoble: null,

        }

    this.puntosTotales = null  
}

let jugador = prompt('Ingrese el nombre del jugador')
let nombre = new Player(jugador);

console.log(nombre);




 