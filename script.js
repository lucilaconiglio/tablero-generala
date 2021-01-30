let cantidadJugadores = parseInt(prompt('Cantidad de 2 a 7 jugadores'));
// Por ahora pido la cantidad por prompt, pero la idea es que se seleccione con
// los radio buttons

let jugadores = () => {

    function Player(jugador){
        this.jugador = jugador;
    } 

    let jugador = [] // El nombre se ingresara por el formulario de nombres que se encunetra en mi HTML (tablero.html),
                     // con eventos, y el nombre ingresado se reproducira en el tablero anotador
    
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


// Dependiendo de la cantidad de jugadores seleccionados ( de 2 a 7) 
// se pone de color gris los campos que no van a poder ser completados.
// Por ahora la cantidad se ingresa por prompt hasta que vea eventos

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


