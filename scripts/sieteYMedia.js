// Debes realizar el juego de la 7 y media. Requisitos:
// - Para ello debes preguntar al usuario si desea jugar. En caso afirmativo debe preguntar
// el número de jugadores, de 1 a 4 jugadores.
// - El programa debe crear la baraja de cartas, si el jugador quiere jugar debe barajar las
// cartas en ese momento.
// - Las cartas deben almacenarse solo con su nombre (5 de bastos), sin su valor. El valor
// debe calcularse una vez la carta es repartida a un jugador.
// - Una vez se reparte una carta a cada jugador, el programa debe preguntar al primer
// jugador si desea más cartas o se planta.
// - Si un jugador desea más cartas, el programa le dará una carta y pasará a preguntar al
// siguiente jugador si quiere carta.
// - Si un jugador se ha plantado el programa lo saltará a la hora de preguntar si quiere
// carta o no.
// - Si un jugador obtiene más de 7 y media, el programa notificará que ha perdido y lo
// saltará en el turno de reparto de cartas
// - El juego termina cuando todos los jugadores se han plantado o hayan perdido.
// - Además de poder jugar 4 jugadores debes añadir la posibilidad de indicarle al
// programa que quieres jugar contra él.
// Reglas del juego de las 7 y media.:
// - Se juega con una baraja española (bastos, espadas, copas y oros).
// - La baraja tiene 40 cartas del 1 al 7 y sota, caballo y rey por cada palo.
// - Las cartas tienen el valor indicado en la carta (3 de copas = 3), a excepción de las
// figuras (sota, caballo y rey) que valen media (rey de espadas = 0,5).
// - El jugador debe acercarse lo máximo posible o igualar a la puntuación de 7,5 entre
// todas sus cartas.
// - Si un jugador obtiene más de 7,5 puntos ha perdido.
// - Si ningún jugador ha obtenido 7,5, gana el que más cerca este.
// - Si un jugador ha obtenido 7,5 gana el juego y termina la partida.
// + No se puede hacer uso de ningún objeto o estructura de datos no visto en clase. Hacer uso
// de la consola para ir mostrando los resultados. Para preguntar, notificar a los usuarios podéis
// hacer uso de del prompt, alert y confirm.
// Crear una baraja española
function crearBaraja() {
  baraja = [];
  for (let palo = 1; palo <= 4; palo++) {
    for (let valor = 0; valor <= 12; valor++) {
      if (palo == 1) {
        if (palo == 1) {
          if (valor == 1) {
            baraja.push("As de copas");
          }
          if (valor >= 2 && valor <= 7) {
            baraja.push(valor + " de copas");
          }
          if (valor == 10) {
            baraja.push("Sota de copas");
          }
          if (valor == 11) {
            baraja.push("Caballo de copas");
          }
          if (valor == 12) {
            baraja.push("Rey de copas");
          }
        }
      }
      if (palo == 1) {
        if (palo == 1) {
          if (valor == 1) {
            baraja.push("As de Abastos");
          }
          if (valor >= 2 && valor <= 7) {
            baraja.push(valor + " de abastos");
          }
          if (valor == 10) {
            baraja.push("Sota de abastos");
          }
          if (valor == 11) {
            baraja.push("Caballo de abastos");
          }
          if (valor == 12) {
            baraja.push("Rey de abastos");
          }
        }
      }
      if (palo == 1) {
        if (palo == 1) {
          if (valor == 1) {
            baraja.push("As de espadas");
          }
          if (valor >= 2 && valor <= 7) {
            baraja.push(valor + " de espadas");
          }
          if (valor == 10) {
            baraja.push("Sota de espadas");
          }
          if (valor == 11) {
            baraja.push("Caballo de espadas");
          }
          if (valor == 12) {
            baraja.push("Rey de espadas");
          }
        }
      }
      if (palo == 1) {
        if (palo == 1) {
          if (valor == 1) {
            baraja.push("As de oros");
          }
          if (valor >= 2 && valor <= 7) {
            baraja.push(valor + " de oros");
          }
          if (valor == 10) {
            baraja.push("Sota de oros");
          }
          if (valor == 11) {
            baraja.push("Caballo de oros");
          }
          if (valor == 12) {
            baraja.push("Rey de oros");
          }
        }
      }
    }
  }
  alert(baraja);
}
var baraja = document.getElementById("baraja");
baraja.addEventListener("click", baraja);
function baraja(){
barajarBaraja(baraja);
}
// Barajar la baraja
function barajarBaraja(array) {
  for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * array.length);
    let aux = array[i];
    array[i] = array[random];
    array[random] = aux;
  }
  alert("Baraja mezclada: ");
  alert(array);
}
function comprobarPuntuacionCarta(carta) {
  let partesCarta = baraja[carta].split(" ");
  let valorCarta = partesCarta[0];
  let valorNumerico = 0;

  if (valorCarta === "As") {
    valorNumerico = 1;
  } else if (valorCarta === "2") {
    valorNumerico = 2;
  } else if (valorCarta === "3") {
    valorNumerico = 3;
  } else if (valorCarta === "4") {
    valorNumerico = 4;
  } else if (valorCarta === "5") {
    valorNumerico = 5;
  } else if (valorCarta === "6") {
    valorNumerico = 6;
  } else if (valorCarta === "7") {
    valorNumerico = 7;
  } else if (
    valorCarta === "Sota" ||
    valorCarta === "Caballo" ||
    valorCarta === "Rey"
  ) {
    valorNumerico = 0.5;
  }

  return valorNumerico;
}

crearBaraja();
barajarBaraja(baraja);
let deseaJugar = true;
var botonSYM = document.getElementById("botonSYM");
botonSYM.addEventListener("click", sieteYMedia);
function sieteYMedia(){
while (deseaJugar == true) {
  deseaJugar = confirm("¿Desea jugar al juego de la 7 y media?");
  if (deseaJugar == false) {
    alert("No quiere jugar");
  } else {
    let contraCPU = confirm(
      "Quiere jugar contra la cpu? Si es que no, jugarás con otros jugadores."
    );
    if (contraCPU == true) {
      let derrota = [];
      let puntuacion = [0, 0];
      let deseaCarta = [];
      alert("Ha entrado en el juego contra la CPU");
      let salirCPU = true;
      let cartaNum = 0;

      for (let i = 0; i < 2; i++) {
        puntuacion[i] += comprobarPuntuacionCarta(cartaNum);
        if (i == 0) {
          alert("Tu primera carta es " + baraja[cartaNum]);
          alert("Tu puntuación: " + puntuacion[i]);
        }
        if (i == 1) {
          alert("La primera carta de la CPU es " + baraja[cartaNum]);
          alert("Puntuación de la CPU: " + puntuacion[i]);
        }
        cartaNum++;
      }
      while (salirCPU) {
        for (let i = 0; i < 2; i++) {
          if (i == 0) {
            let confirma = confirm("¿Desea carta?");
            deseaCarta.push(confirma);
            alert(deseaCarta[i]);
            if (confirma == false) {
              alert("Te has plantado");
              continue;
            }
          }
          if (i == 1) {
            if (puntuacion[i] < 7.5 && puntuacion[0] > puntuacion[i]) {
              deseaCarta[i] = true;
              alert("La cpu quiere otra carta");
            }
            if (puntuacion[i] < 7.5 && puntuacion[0] < puntuacion[i]) {
              deseaCarta[i] = false;
              alert("La cpu no quiere carta");
            }
          }
          if (deseaCarta[i] == true && puntuacion[i] <= 7.5) {
            puntuacion[i] += comprobarPuntuacionCarta(cartaNum);
            if (i == 0) {
              alert("Tu siguiente carta es " + baraja[cartaNum]);
              alert("Tu puntuación: " + puntuacion[i]);
            }
            if (i == 1) {
              alert("La carta de la CPU es " + baraja[cartaNum]);
              alert("Puntuación de la CPU: " + puntuacion[i]);
            }
            cartaNum++;
          }
          if (i == 0) {
            if (deseaCarta == false) {
              alert("Pasas turno");
              continue;
            }
            if (puntuacion[i] > 7.5) {
              alert("Has perdido");
              derrota[i] = true;
              salirCPU = false;
              break;
            }
            if (puntuacion[i] == 7.5) {
              alert("Has ganado");
              salirCPU = false;
              break;
            }
          }
          if (i == 1) {
            if (deseaCarta == false) {
              alert("CPU pasa turno");
              continue;
            }
            if (puntuacion[i] > 7.5) {
              alert("CPU ha perdido");
              derrota[i] = true;
              salirCPU = false;
              break;
            }
            if (puntuacion[i] == 7.5) {
              alert("CPU ha ganado");
              salirCPU = false;
              break;
            }
          }
        }
      }
    }
    if (contraCPU === false) {
      alert("Entras en modo jugadores");
      const numJugadores = parseInt(prompt("Cantidad de jugadores (2-4)"));
      if (numJugadores <= 1 || numJugadores > 4) {
        alert("Cantidad de jugadores no válida");
        break;
      }
      let puntuacion = [];
      for (let i = 1; i <= numJugadores; i++) {
        puntuacion[i] = 0;
      }
      let cartaNum = 0;
      for (let i = 1; i <= numJugadores; i++) {
        puntuacion[i] += comprobarPuntuacionCarta(cartaNum);
        alert(
          "Primera carta del jugador " + i + " es " + baraja[cartaNum]
        );
        alert("Puntuacion de J" + i + " : " + puntuacion[i]);
        cartaNum++;
      }
      let salir = true;
      cartaNum++;
      let deseaCarta = [];
      deseaCarta[0] = false;
      let derrota = [];
      while (salir) {
        for (let i = 1; i <= numJugadores; i++) {
          if (derrota[i]) {
            alert("J" + i + " ya perdió");
            continue;
          }
          let confirma = confirm("J" + i + " ¿Desea carta?");
          deseaCarta.push(confirma);
          if (deseaCarta == false) {
            alert("J" + i + " pasa turno");
            continue;
          }
          alert("J" + i + " puntuacion: " + puntuacion[i]);
          if (deseaCarta[i] == true && puntuacion[i] <= 7.5) {
            puntuacion[i] += comprobarPuntuacionCarta(cartaNum);
            alert("La carta del J" + i + " es " + baraja[cartaNum]);
            alert("Puntuacion del J" + i + " es " + puntuacion[i]);
            cartaNum++;
          }

          if (puntuacion[i] > 7.5) {
            alert("J" + i + " ha perdido");
            derrota[i] = true;
          }
          if (puntuacion[i] == 7.5) {
            alert("J" + i + " ha ganado");
            salir = false;
            break;
          }
          if (numJugadores == 2 && derrota[i]) {
            alert("J");
            salir = false;
            break;
          }
        }
      }
    }
  }
}}
