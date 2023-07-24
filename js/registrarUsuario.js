const btnPublicar = document.getElementById("registrarse");
btnPublicar.addEventListener("click", verificarDatos);


function verificarDatos() {
  if (validarForm()) {

    Swal.fire({
      title: 'Todos los datos son correctos?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Guardar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Usuario registrado con éxito!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Puede seguir editando sus datos', '', 'info')
      }
    })


  } else {
    Swal.fire({
      icon: 'error',
      title: 'Datos incompletos...',
      text: 'Debe completar todos sus datos para registrarse',
    })
  }


}

function validarForm() {
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const userName = document.getElementById("userName");
  const fechaNac = document.getElementById("fechaNac");
  const idgenero = document.getElementById("idgenero");

  console.log(inputEmail.value);
  console.log(inputPassword.value);
  console.log(userName.value);
  console.log(fechaNac.value);
  console.log(idgenero.value);


  const validar = inputEmail.value != '' && inputPassword.value != '' && userName.value != '' && fechaNac.value != '' && idgenero.value != '';
  return validar;

}
