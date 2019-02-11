function calculo() {
  var maria = parseInt(document.getElementById('elec1').value);
  var juan = parseInt(document.getElementById('elec2').value);
  var pedro = parseInt(document.getElementById('elec3').value);
// alert("prueba");
  var porcentaje = 0;

  var det = false;

  var menor = 0;

  var total = (maria + juan + pedro) / 2;
  total = Math.round(total);



  if (maria > total) {
    porcentaje = (maria / (2 * total)) * 100;
    porcentaje = Math.round(porcentaje);
    det = true;
    document.getElementById('res').innerHTML = "Maria gano con " + porcentaje + "% de los votos";
  } else {
    if (juan > total) {
      porcentaje = (juan / (2 * total)) * 100;
      porcentaje = Math.round(porcentaje);
      det = true;
      document.getElementById('res').innerHTML = "Juan gano con " + porcentaje + "% de los votos";
    } else {
      porcentaje = (pedro / (2 * total)) * 100;
      porcentaje = Math.round(porcentaje);
      det = true;
      document.getElementById('res').innerHTML = "Pedro gano con " + porcentaje + "% de los votos";
    }
  }

  if ((maria == juan) || (pedro == juan) || (maria == pedro)) {
    det = false;
    document.getElementById('res').innerHTML = "";
  }

  if (!det) {
    alert("Se produjo un empate, segunda ronda");
    if ((maria < juan) && (maria < pedro)) {
      $("#elec1").addClass("hidden");
      $("#p1").addClass("hidden");
      document.getElementById('elec1').value = "0";
      document.getElementById('elec2').value = "0";
      document.getElementById('elec3').value = "0";
    }

    if ((juan < maria) && (juan < pedro)) {
      $("#elec2").addClass("hidden");
      $("#p2").addClass("hidden");
      document.getElementById('elec1').value = "0";
      document.getElementById('elec2').value = "0";
      document.getElementById('elec3').value = "0";
    }

    if ((pedro < juan) && (pedro < maria)) {
      $("#elec3").addClass("hidden");
      $("#p3").addClass("hidden");
      document.getElementById('elec2').value = "0";
      document.getElementById('elec3').value = "0";
      document.getElementById('elec1').value = "0";
    }

    $("#bot1").addClass("hidden");
    $("#bot2").removeClass("hidden");
  }


}

function cal2() {
  var maria = parseInt(document.getElementById('elec1').value);
  var juan = parseInt(document.getElementById('elec2').value);
  var pedro = parseInt(document.getElementById('elec3').value);

  if ((maria > juan) && (maria > pedro)) {
    document.getElementById('res').innerHTML = "Maria gano las elecciones";
  } else {
    if ((pedro > juan) && (pedro > maria)) {
      document.getElementById('res').innerHTML = "Pedro gano las elecciones";
  } else {
    document.getElementById('res').innerHTML = "Juan gano las elecciones";
  }
}
}
