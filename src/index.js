const botonResponder = document.getElementById("boton-responder");
const botonPop = document.getElementById("pop");
const botonCiencia = document.getElementById("ciencia");
const botonJugar = document.getElementById("boton-jugar");
const botonReiniciar = document.getElementById("reiniciar");
const seccionPrincipal = document.getElementById("seccion-principal");
const seccionCiencia = document.getElementById("seccion-ciencia");
const seccionPop = document.getElementById("seccion-pop");
const seccionBotones = document.getElementById("botones");
const seccionNombreJugadora = document.getElementById("resultado-nombre");
const resultadoPreguntas = document.getElementById("resultado-trivia");
let cronometroJs = document.getElementById("cronometro");
let cronometroJs2 = document.getElementById("cronometro2");

const radio1 = document.getElementById("radio1");
const radio6 = document.getElementById("radio6");
const radio8 = document.getElementById("radio8");
const radio10 = document.getElementById("radio10");
const radio15 = document.getElementById("radio15");
const radio17 = document.getElementById("radio17");

let primera = 0;
let segunda = 0;
let tercera = 0;
let puntaje = 0;
let tiempototal = 20;

botonResponder.addEventListener("click", Respuestas);
botonJugar.addEventListener("click", seleccionTema);
botonReiniciar.addEventListener("click", reiniciarJuego);

//PAGINA PRINCIPAL
seccionNombreJugadora.display = "none";
seccionPrincipal.style.display = "grid";
seccionCiencia.style.display = "none";
seccionPop.style.display = "none";
seccionBotones.style.display = "none";

//SELECCION DEL TEMA

function seleccionTema() {
  if (botonCiencia.checked) {
    segundaVentana();
    seccionPrincipal.style.display = "none";
    seccionCiencia.style.display = "grid";
    seccionPop.style.display = "none";
    seccionBotones.style.display = "grid";
  } else if (botonPop.checked) {
    terceraVentana();
    seccionPrincipal.style.display = "none";
    seccionCiencia.style.display = "none";
    seccionPop.style.display = "grid";
    seccionBotones.style.display = "grid";
  } else {
    alert("Selecciona un tema para continuar");
  }
}

//SEGUNDA PAGINA QUE CORRESPONDE A CIENCIA
function segundaVentana() {
  let nombre = document.getElementById("nombre-jugadora").value;
  document.getElementById("resultado-nombrejugadora").innerText = nombre;
  seccionNombreJugadora.display = "grid";
  cuentaRegresiva();
  setTimeout(Respuestas, 20000);
}
//TERCERA PAGINA QUE CORRESPONDE A POP
function terceraVentana() {
  let nombre = document.getElementById("nombre-jugadora").value;
  document.getElementById("resultado-nombrejugadora2").innerText = nombre;
  seccionNombreJugadora.display = "grid";
  cuentaRegresiva();
  setTimeout(Respuestas, 20000);
}

//VALOR DE PUNTAJE DE LAS PREGUNTAS DE CIENCIA Y POP
function Respuestas() {
  if (radio1.checked || radio10.checked) {
    primera = 1;
    puntaje = puntaje + 3;
  }
  if (radio6.checked || radio15.checked) {
    segunda = 1;
    puntaje = puntaje + 3;
  }
  if (radio8.checked || radio17.checked) {
    tercera = 1;
    puntaje = puntaje + 4;
  }
  //MANDA EL FEEDBACK DEL TEMA SELECCIONADO
  if (botonCiencia.checked) {
    feedbackCiencia();
  }
  if (botonPop.checked) {
    feedbackPop();
  }
}

function feedbackCiencia() {
  if (primera === 1 && segunda === 1 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:Alexander Fleming. Acertaste!!<br> Respuesta 2:Rayos x. Acertaste!!<br>Respuesta 3:Delfin. Acertaste!!";
  }
  if (primera === 0 && segunda === 0 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:Alexander Fleming. No acertaste<br> Respuesta 2:Rayos x . No acertaste<br> Respuesta 3:Delfin. No acertaste";
  }
  if (primera === 0 && segunda === 0 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:Alexander Fleming. No acertaste<br> Respuesta 2:Rayos x. No acertaste<br> Respuesta 3:Delfin. Acertaste!!";
  }
  if (primera === 0 && segunda === 1 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:Alexander Fleming. No acertaste<br> Respuesta 2:Rayos x. Acertaste!!<br> Respuesta 3:Delfin. No acertaste";
  }
  if (primera === 0 && segunda === 1 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: Alexander Fleming. No acertaste<br> Respuesta 2:Rayos x. Acertaste!!<br> Respuesta 3:Delfin. Acertaste!!";
  }
  if (primera === 1 && segunda === 0 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: ALexander Fleming. Acertaste!!<br> Respuesta 2:Rayos x. No acertaste<br> Respuesta 3:Delfin. No acertaste";
  }
  if (primera === 1 && segunda === 0 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: Alexander Fleming. Acertaste!!<br> Respuesta 2:Rayos x. No acertaste<br> Respuesta 3:Delfin. Acertaste!!";
  }
  if (primera === 1 && segunda === 1 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: Alexander Fleming. Acertaste!!<br> Respuesta 2:Rayos x. Acertaste!!<br> Respuesta 3:Delfin. No acertaste";
  }
  //ARROJA EL PUNTAJE Y VUELVEN LOS VALORES A 0
  alert("Tu puntaje es: " + puntaje);
  inicializarVar();
}

function feedbackPop() {
  if (primera === 1 && segunda === 1 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:King Kong. Acertaste!!<br> Respuesta 2:Nintendo. Acertaste!!<br> Respuesta 3:Madonna. Acertaste!!";
  }
  if (primera === 0 && segunda === 0 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:King Kong. No acertaste<br> Respuesta 2:Nintendo . No acertaste<br> Respuesta 3:Madonna. No acertaste";
  }
  if (primera === 0 && segunda === 0 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:King Kong. No acertaste<br> Respuesta 2:Nintendo. No acertaste<br> Respuesta 3:Madonna. Acertaste!!";
  }
  if (primera === 0 && segunda === 1 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1:King Kong. No acertaste<br> Respuesta 2:Nintendo. Acertaste!!<br> Respuesta 3:Madonna. No acertaste";
  }
  if (primera === 0 && segunda === 1 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: King Kong. No acertaste<br> Respuesta 2:Nintendo. Acertaste!!<br> Respuesta 3:Madonna. Acertaste!!";
  }
  if (primera === 1 && segunda === 0 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: King Kong. Acertaste!!<br> Respuesta 2:Nintendo. No acertaste<br> Respuesta 3:Madonna. No acertaste";
  }
  if (primera === 1 && segunda === 0 && tercera === 1) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: King Kong. Acertaste!!<br> Respuesta 2:Nintendo. No acertaste<br> Respuesta 3:Madonna. Acertaste!!";
  }
  if (primera === 1 && segunda === 1 && tercera === 0) {
    resultadoPreguntas.innerHTML =
      "Respuesta 1: King Kong. Acertaste!!<br> Respuesta 2:Nintendo. Acertaste!!<br> Respuesta 3:Madonna. No acertaste";
  }
  alert("Tu puntaje es: " + puntaje);
  inicializarVar();
}

//Funcion del cronometro
function cuentaRegresiva() {
  if (tiempototal > 0) {
    cronometroJs.innerHTML = tiempototal;
    cronometroJs2.innerHTML = tiempototal;
    tiempototal = tiempototal - 1;
  }
  setTimeout(cuentaRegresiva, 1000);
}

//Funcion de inicializar variables
function inicializarVar() {
  primera = 0;
  segunda = 0;
  tercera = 0;
  puntaje = 0;
}

//Funcion del boton reiniciar
function reiniciarJuego() {
  window.location.reload();
}
