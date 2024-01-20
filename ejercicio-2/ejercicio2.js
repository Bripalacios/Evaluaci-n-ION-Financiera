
document.addEventListener("DOMContentLoaded", function () {
  // Crear la imagen y agregarla al primer td
  const imagen = document.createElement("img");
  imagen.src = "imagen.jpg"; 
  imagen.id = "imagen";

  const primerTd = document.querySelector("#tabla td");
  primerTd.appendChild(imagen);

  // Iniciar el movimiento de la imagen
  moverImagen();
});

const moverImagen = () => {
  const imagen = document.getElementById("imagen");
  let posX = 0;
  let posY = 0;

  setInterval(function() {
    // Mover la imagen 
    posX += 1;
    posY += 5;

    // Restringir la imagen dentro de la tabla
    if (posX > 250)
      posX = 0;
    if (posY > 200)
      posY = 0;

    // Aplicar la nueva posición a la imagen
    imagen.style.left = posX + "px";
    imagen.style.top = posY + "px";
  }, 200); // Ajusta la velocidad del movimiento 
}