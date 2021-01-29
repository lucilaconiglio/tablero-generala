let jugadores = () => {

    let cantidadJugadoresPosibles = [2, 3, 4, 5, 6, 7];
    let cantidadJugadores = parseInt(prompt('Cantidad de 2 a 7 jugadores'));

    
    function Player(jugador){
        this.jugador = jugador;
    }

    let jugador = []
    
    
    if (cantidadJugadores === 2) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,1);
        console.log(cantidadJugadoresPosibles);

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        console.log(jugador);

       
    } else if (cantidadJugadores === 3) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,2);
        console.log(cantidadJugadoresPosibles);

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        console.log(jugador);

    } else if (cantidadJugadores === 4) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,3);
        console.log(cantidadJugadoresPosibles);

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        console.log(jugador);

    } else if (cantidadJugadores === 5) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,4);
        console.log(cantidadJugadoresPosibles);

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        jugador.push(new Player('Jugador 5'));
        console.log(jugador);

    } else if (cantidadJugadores === 6) {

        cantidadJugadoresPosibles = cantidadJugadoresPosibles.slice(0,5);
        console.log(cantidadJugadoresPosibles);

        jugador.push(new Player('Jugador 1'));
        jugador.push(new Player('Jugador 2'));
        jugador.push(new Player('Jugador 3'));
        jugador.push(new Player('Jugador 4'));
        jugador.push(new Player('Jugador 5'));
        jugador.push(new Player('Jugador 6'));
        console.log(jugador);

    } else /*cantidad de jugadores 7*/ {

        console.log(cantidadJugadoresPosibles);

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



// Objeto con nombre del jugador y la cantidad de puntos que hizo en cada seccion del juego

/*
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
 */



 