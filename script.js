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
    
    vaciarArray()

    for (let inputNombre of nombresJugadores) {
        
        if (inputNombre.value != '') {

            jugador.push(new Player(inputNombre.value.toUpperCase()));
        }
    }
    console.log(jugador)
}) 

function vaciarArray(){
    jugador.length = 0;
}



// EN PROCESO //

$("#aJugar").click(function () {
    agregarColumnas();
})

function agregarColumnas() {

    for (let valor of nombresJugadores) {

        if (valor.value != '') {    

            $("tr:first").append(`<td><p>${valor.value.toUpperCase()}</p></td>`);

            $(".1").append(`<td>       
                <select id="1"class="suma" onchange="sumarTOTAL();">
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
                <select id="2" class="suma" onchange="sumarTOTAL();">
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
                <select id="3" class="suma" onchange="sumarTOTAL();">
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
                <select id="4" class="suma" onchange="sumarTOTAL();">
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
                <select id="5" class="suma" onchange="sumarTOTAL();">
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
            <select id="6" class="suma" onchange="sumarTOTAL();">
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
                <select id="escalera" class="suma" onchange="sumarTOTAL();">
                    <option value="0"></option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".full").append(`<td>       
                <select id="full" class="suma" onchange="sumarTOTAL();">
                    <option value="0"></option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".pok").append(`<td>       
                <select id="pok" class="suma" onchange="sumarTOTAL();">
                    <option value="0"></option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="X">X</option>
                </select>
            </td>`);
            
            $(".gen").append(`<td>       
                <select id="gen" class="suma" onchange="sumarTOTAL();">
                    <option value="0"></option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".gen2").append(`<td>       
                <select id="gen2" class="suma" onchange="sumarTOTAL();">
                    <option value="0"></option>
                    <option value="100">100</option>
                    <option value="105">105</option>
                    <option value="X">X</option>
                </select>
            </td>`);

            $(".total").append(`<td class="puntos">0</td>`);

        };
    }
}

<<<<<<< HEAD
// function sumaTOTAL(){}
=======
function sumarTOTAL() {

    var total = 0;
    $(".suma").each(function() {
        if (isNaN(parseInt($(this).val()))) {
    total += 0;
        } else {
    total += parseInt($(this).val());
    }
    });

    const puntosTotales = document.getElementsByClassName('puntos');

    for ( let puntos of puntosTotales) {
        
       puntos.innerHTML = total;

    }
}



>>>>>>> tabla

// function vaciarColumnas(){}




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