function enviarFormulario() {
  var numPersonas = document.querySelector('input[type="text"][placeholder="Escribe el número de personas"]').value;
  var nombre = document.querySelector('input[type="text"][placeholder="Escribe quien lo reserva"]').value;
  var telefono = document.querySelector('input[type="text"][placeholder=""]').value;
  var lugar = document.querySelector('select').value;
  var alergias = document.querySelector('input[type="text"][maxlength="300"]').value;
  var recordatorio = document.querySelector('input[type="checkbox"]').checked;

  console.log("Número de personas:", numPersonas);
  console.log("Nombre:", nombre);
  console.log("Teléfono:", telefono);
  console.log("Lugar:", lugar);
  console.log("Alergias:", alergias);
  console.log("¿Recordatorio?:", recordatorio);
}