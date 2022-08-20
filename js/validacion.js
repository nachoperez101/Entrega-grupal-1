function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let boton = document.getElementById('regBtn')

boton.addEventListener('click', function() {

    let pw1 = document.getElementById('password1').value;
    let pw2 = document.getElementById('password2').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let terminos = document.getElementById('terminos');
    
    if (pw1.length > 5 && pw1 == pw2 && nombre != '' && apellido!= '' && email!= '' && terminos.checked) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
})