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
let jugadores = []

function Player(nombre) {
    this.nombre = nombre;
}

botonAjugar.addEventListener('click', ()=> {
    
    vaciarArray()

    for (let inputNombre of nombresJugadores) {
        
        if (inputNombre.value != '') {

            jugadores.push(new Player(inputNombre.value.toUpperCase()));
        }
    }
    console.log(jugadores)
}) 

function vaciarArray(){
    jugadores.length = 0;
}



// EN PROCESO //

$("#aJugar").click(function () {
    ocultarInputs()
    mostrar()
    agregarColumnas();
})

function mostrar() {
    let tablero = document.getElementById('tablero_');
    tablero.style.display = '';
}

function ocultarInputs(){
    let ocultar = document.getElementById('ocultar');
    ocultar.style.display = 'none';
}

function agregarColumnas() {

    for (let jugador of jugadores) {

        console.log(jugadores.indexOf(jugador));

        if (jugador.nombre != '') {    

            $("tr:first").append(`<td><p>${jugador.nombre.toUpperCase()}</p></td>`);

            $(".1").append(`<td>       
                <select id="1" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".2").append(`<td>       
                <select id="2" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".3").append(`<td>       
                <select id="3" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});;">
                    <option value="0"></option>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="X">X</option>
                 </select>
            </td>`);

            $(".4").append(`<td>       
                <select id="4" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".5").append(`<td>       
                <select id="5" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".6").append(`<td>       
            <select id="6" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                <option value="0"></option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
                <option value="30">30</option>
                <option value="X">X</option>
            </select>
            </td>`);

            $(".esc").append(`<td>       
                <select id="escalera" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".full").append(`<td>       
                <select id="full" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".pok").append(`<td>       
                <select id="pok" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="X">X</option>
                </select>
            </td>`);
            
            $(".gen").append(`<td>       
                <select id="gen" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".gen2").append(`<td>       
                <select id="gen2" class="${jugadores.indexOf(jugador)}" onchange="sumarTOTAL(${jugadores.indexOf(jugador)});">
                    <option value="0"></option>
                    <option value="100">100</option>
                    <option value="105">105</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".total").append(`<td class="puntos${jugadores.indexOf(jugador)}">0</td>`);

        };
    }
}

function sumarTOTAL() {
    
    for (let jugador of jugadores) {
        
        var total = 0;
        $(`.${jugadores.indexOf(jugador)}`).each(function() {
            if (isNaN(parseInt($(this).val()))) {
        total += 0;
            } else {
        total += parseInt($(this).val());
        }
        });
    
        const puntos = document.getElementsByClassName(`puntos${jugadores.indexOf(jugador)}`);

        for (let p of puntos) {
            p.innerHTML = total;
        }

    }
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