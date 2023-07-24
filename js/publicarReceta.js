const btnPublicar = document.getElementById("publicar");
btnPublicar.addEventListener("click", guardarReceta);



function guardarReceta() {

  if (validarForm()) {

    Swal.fire({
      title: 'Desea guardar la Receta ?',
      imageUrl: '../img/content/pEmpanadas.PNG',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }) .then((result) => {
       if (result.isConfirmed) {
        Swal.fire('Receta guardada!', '', 'success');
              } else if (result.isDenied) {
        Swal.fire('No se han guadado los cambios', '', 'info')
      }
    })

  } else {

    Swal.fire({
      icon: 'error',
      title: 'Datos incompletos...',
      text: 'Para publicar debe completar todos los datos de la Receta',
    })
  }


}

function validarForm() {
  const formFileMultiple = document.getElementById("formFileMultiple");
  const descripcion = document.getElementById("descripcion");
  const ubicacion = document.getElementById("ubicacion");
  const descripcionDetallada = document.getElementById("descripcionDetallada");
  const tipoPublicacion = document.getElementById("tipoPublicacion");
  const validar = formFileMultiple.value != '' && descripcion.value != '' && ubicacion.value != '' && descripcionDetallada.value != '' && tipoPublicacion.value != '';

  return validar;

}



