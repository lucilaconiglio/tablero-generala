// let cantidadJugadores = parseInt(prompt('Cantidad de 2 a 7 jugadores'));
// Por ahora pido la cantidad por prompt, pero la idea es que se seleccione con
// los radio buttons

const cantidadJugadores = document.getElementsByClassName('cantidad');
const nombresJugadores = document.getElementsByClassName('nombres');


cantidadJugadores.addEventListener("change", () => {

    for (let i = 0; i <= cantidadJugadores.value; i++) {
        nombresJugadores[i].style.backgroundColor = "#2b580c";
        nombresJugadores[i].disabled = false;
        
    }

}) 

console.log(cantidadJugadores())


let jugador = []

function Player(nombre) {
    this.nombre = nombre;
}


for (let i = 1; i <= cantidadJugadores; i++) {

    jugador.push(new Player('Jugador ' + i));

} 

console.log(jugador);








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


