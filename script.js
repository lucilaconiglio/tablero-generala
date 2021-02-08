const cantidadJugadores = document.getElementsByClassName('cantidad');
const nombresJugadores = document.getElementsByClassName('nombres');

console.log(cantidadJugadores)

for (let button of cantidadJugadores) {
   // console.log(button);
   // console.log(button.value);

    button.addEventListener('change', ()=>{
      //  console.log(button + !cambie)

        for (let input of nombresJugadores){
        
        //console.log(input)
        //console.log(input.id)
    
        for (let i = 0; i <= button.value; i++) {
            nombresJugadores[i].style.backgroundColor = "#2b580c";
            nombresJugadores[i].disabled = false;
        } 
    }
    })
} 
    

let jugador = []
console.log(jugador);

function Player(nombre) {
    this.nombre = nombre;
}

for (let button of cantidadJugadores) {
    console.log(button);
    console.log(button.value);

    button.addEventListener('click', ()=> {
        //  console.log(button + !cambie)
  
        for (let i = 0; i <= button.value; i++) {
        
            jugador.push(new Player('Jugador ' + (i+1)));
        
        }
    })
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


