const cantidadJugadores = document.getElementsByClassName('cantidad');
const nombresJugadores = document.getElementsByClassName('nombres');

habilitarBotones()

function habilitarBotones() {
    
    for (let button of cantidadJugadores) {
        
        button.addEventListener('change', ()=>{
            
            deshabilitarBotones()
            
            for (let i = 0; i <= button.value; i++) {
                nombresJugadores[i].style.backgroundColor = "#2b580c";
                nombresJugadores[i].disabled = false;
            } 
        })
    } 
    
}

function deshabilitarBotones(){
    
    for (let input of nombresJugadores) {
        input.style.backgroundColor = "#556052";
        input.disabled = true;
        input.value=""; 
    }
    
}

const botonAjugar = document.getElementById('aJugar');
let jugador = []

function Player(nombre) {
    this.nombre = nombre;
}

botonAjugar.addEventListener('click', ()=> {
    
    for (let inputNombre of nombresJugadores) {
        
        if (inputNombre.value != '') {

            jugador.push(new Player(inputNombre.value.toUpperCase()));
        }
    }
    console.log(jugador)
}) 

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