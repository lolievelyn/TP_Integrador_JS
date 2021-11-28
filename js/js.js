// Defino el valor de ticket
let valorTicket = 200;

// Defino porcentajes de descuento segun la categoria
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

// Elementos en variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoriaSelect");

// Calculo total a pagar
function total_a_pagar() {


    // Verifico si esta ingresado minimo 1 ticket, sino que se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value)) ) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        return
    }

    // Verifico que haya seleccionado una categoria
    if (categoria.value == "") {
        alert("Por favor, seleccioná una categoría.");
        return
    }

    // Multiplico cantidad de tickets por el valor
    var totalValorTickets = (cantidadTickets.value) * valorTicket;

    // Aplico descuentos segun categoria
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }

    // Inserto el valor en el HTML
    totalPago.innerHTML = totalValorTickets;
}

// Boton Resumen recibe un escuchador y la funcion del cálculo
btnResumen.addEventListener('click', total_a_pagar);

// Funcion para el boton Borrar para que borre el valor
function reset_total_a_pagar() {
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);