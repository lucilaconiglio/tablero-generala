let cantidadJugadores = parseInt(prompt('Cantidad de 2 a 7 jugadores'));

let jugadores = () => {

    

    function Player(jugador){
        this.jugador = jugador;
    } 

    let jugador = []
    
    if (cantidadJugadores === 2) {


        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        console.log(jugador);

       
    } else if (cantidadJugadores === 3) {

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        console.log(jugador);

    } else if (cantidadJugadores === 4) {

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        console.log(jugador);

    } else if (cantidadJugadores === 5) {

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        jugador.push(new Player('Jugador 5'));
        console.log(jugador);

    } else if (cantidadJugadores === 6) {

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        jugador.push(new Player('Jugador 5'));
        jugador.push(new Player('Jugador 6'));
        console.log(jugador);

    } else /*cantidad de jugadores 7 */{


        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        jugador.push(new Player('Jugador 5'));
        jugador.push(new Player('Jugador 6'));
        jugador.push(new Player('Jugador 7'));
        console.log(jugador);
    }

}

console.log(jugadores());



if (cantidadJugadores == 2) {

    var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');
    
    nombresJugadores[6].style.backgroundColor = "#556052";
    nombresJugadores[5].style.backgroundColor = "#556052";
    nombresJugadores[4].style.backgroundColor = "#556052";
    nombresJugadores[3].style.backgroundColor = "#556052";
    nombresJugadores[2].style.backgroundColor = "#556052";

} else if (cantidadJugadores == 3) {
    var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');

    nombresJugadores[6].style.backgroundColor = "#556052";
    nombresJugadores[5].style.backgroundColor = "#556052";
    nombresJugadores[4].style.backgroundColor = "#556052";
    nombresJugadores[3].style.backgroundColor = "#556052";
  

} else if (cantidadJugadores == 4) {
    var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');

    nombresJugadores[6].style.backgroundColor = "#556052";
    nombresJugadores[5].style.backgroundColor = "#556052";
    nombresJugadores[4].style.backgroundColor = "#556052";

} else if (cantidadJugadores == 5) {
    var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');
    
    nombresJugadores[6].style.backgroundColor = "#556052";
    nombresJugadores[5].style.backgroundColor = "#556052";

} else if (cantidadJugadores == 6) {

    var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');

    nombresJugadores[6].style.backgroundColor = "#556052";

} 


// Objeto con nombre del jugador y la cantidad de puntos que hizo en cada seccion del juego


/* function Player(nombre, puntos, puntosTotales){
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
  */


/* 
var nombresJugadores = document.getElementById('nombreJugadores').getElementsByClassName('nombres');

console.log(nombresJugadores)

function jugadores() {

    if (eleccion === [2]) {
        nombresJugadores[5].style.backgroundColor = "black";
        nombresJugadores[4].style.backgroundColor = "black";
        nombresJugadores[3].style.backgroundColor = "black";
        nombresJugadores[2].style.backgroundColor = "black";
    } else if (eleccion === 3) {
        nombresJugadores[5].style.backgroundColor = "black";
        nombresJugadores[4].style.backgroundColor = "black";
        nombresJugadores[3].style.backgroundColor = "black";
    } else if (eleccion === 4) {
        nombresJugadores[5].style.backgroundColor = "black";
        nombresJugadores[4].style.backgroundColor = "black";
    } else if (eleccion === 5) {
        nombresJugadores[5].style.backgroundColor = "black";
    } else if (eleccion === 6) {
        nombresJugadores[3].style.backgroundColor = "black";

    }
} */
