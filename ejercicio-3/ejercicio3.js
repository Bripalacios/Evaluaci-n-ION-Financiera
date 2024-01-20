
// De la siguiente expresión, menciona “Si Es lo Mismo”:
let a = 2;

if(a == 2) {
  temp = 45;
}
if(a == 3) {
  temp = 89;
}
if (a == 4) {
  temp = 32;
}

// Que

if (a == 2) {
  temp = 45;
} else if (a == 3) {
  temp = 89;
} else if (a == 4) {
  temp = 32;
}

/* En este caso en particular funcionan de la misma manera ya que no hay una instrucción return dentro de las sentencias "if" sin "else". La principal diferencia se tiene en la legibilidad del código, sin embargo la segunda expresión, que utiliza "else if", evita hacer la evaluación de condiciones adicionales una vez que encuentra una condición verdadera.*/