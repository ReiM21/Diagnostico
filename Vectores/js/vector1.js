function calculo() {
  var vec = new Array(10);
  var pos = new Array(10);
  var i = 0;
  var pos1 = 0;

  for (i = 0; i < vec.length; i++) {
    vec[i] = Math.round(Math.random() * (100 - 1) + 1);
  }

  document.write("Numeros de menor a mayor: ");

  for (i = 1; i <= vec.length; i++) {
    for (var j = 0; j < vec.length; j++) {
      if (vec[j] > vec[i]) {
        pos1 = vec[j];
        vec[j] = vec[i];
        vec[i] = pos1;
      }
    }
  }

  for (i = 0; i < vec.length; i++) {
    document.write(vec[i] + " ");
  }
  document.write("&nbsp &nbsp &nbsp Numeros de mayor a menor: ");

  for (i = 1; i <= vec.length; i++) {
    for (var j = 0; j < vec.length; j++) {
      if (vec[j] < vec[i]) {
        pos1 = vec[j];
        vec[j] = vec[i];
        vec[i] = pos1;
      }
    }
  }

  for (i = 0; i < vec.length; i++) {
    document.write(vec[i] + " ");
  }
}

function buscar() {
  var vec = new Array(10);
  var pos = new Array(10);
  var i = 0;
  var pos1 = 0;
  var c = parseInt(0);
  var det = false;

  for (i = 0; i < vec.length; i++) {
    vec[i] = Math.round(Math.random() * (50 - 1) + 1);
  }

  c = parseInt(document.getElementById('num').value);

  for (i = 0; i < vec.length; i++) {
    document.write(vec[i] + " ");
  }

  document.write('\n');

  for (i = 0; i < vec.length; i++) {
    if (!det && (c == vec[i])) {
      document.write("El numero se encuentra en el vector en la posicion " + i);
      det = true;
    }
  }

  if (!det) {
    document.write("El numero no se encuentra en el vector");
  }

}
