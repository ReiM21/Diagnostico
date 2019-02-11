function calculo() {
  var n = document.getElementById('numero').value;
  var dig1 = 0;
  var dig2 = 0;
  var dig3 = 0;
//  DIGITOS DE DERECHA A IZQUIERDA
  dig1 = n % 10;

  dig2 = n / 10;
  dig2 = Math.floor(dig2);
  dig2 = dig2 % 10;

  dig3 = (n - (n % 100)) / 100;

  if ((dig1 > dig2) && (dig1 > dig3)) {
    document.getElementById('res1').innerHTML = dig1;
    if (dig2 > dig3) {
      document.getElementById('res2').innerHTML = dig2;
      document.getElementById('res3').innerHTML = dig3;
    } else {
      document.getElementById('res2').innerHTML = dig3;
      document.getElementById('res3').innerHTML = dig2;
    }
  } else {
    if ((dig2 > dig1) && (dig2 > dig3)) {
      document.getElementById('res1').innerHTML = dig2;
      if (dig1 > dig3) {
        document.getElementById('res2').innerHTML = dig1;
        document.getElementById('res3').innerHTML = dig3;
      } else {
        document.getElementById('res2').innerHTML = dig3;
        document.getElementById('res3').innerHTML = dig1;
      }
    } else {
      if ((dig3 > dig1) && (dig3 > dig2)) {
        document.getElementById('res1').innerHTML = di3;
        if (dig1 > dig2) {
          document.getElementById('res2').innerHTML = dig1;
          document.getElementById('res3').innerHTML = dig2;
        } else {
          document.getElementById('res2').innerHTML = dig2;
          document.getElementById('res3').innerHTML = dig1;
        }
      }
    }
  }
}
